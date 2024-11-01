"use server";

import { redirect } from "next/navigation";
import { BillingInfo, BillingInfoSchema } from "@/schemas/billing-info-schema";
import {
  clearBillingInfo,
  getBillingInfo,
  setBillingInfo,
} from "@/functions/checkout";
import { Order } from "@/schemas/order-schema";
import { clearLineItems, getLineItems } from "@/functions/line-items";
import { SHIPPING_PRICE, SHOP_TAX_RATE } from "@/libs/constants";
import calculateSubTotalPrice from "@/libs/calculate-sub-total-price";
import calculateTaxes from "@/libs/calculate-taxes";

export const addBillingInfoToCookies = (billingInfo: BillingInfo) => {
  const response = BillingInfoSchema.safeParse(billingInfo);

  if (response.success) {
    setBillingInfo(billingInfo);
    redirect("/checkout/payment");
  }

  return response.error.message;
};

export const createOrder = () => {
  const billAddress = getBillingInfo();
  const lineItems = getLineItems();

  const subTotal = calculateSubTotalPrice(lineItems);
  const taxes = calculateTaxes(subTotal, SHOP_TAX_RATE);
  const shipping = SHIPPING_PRICE;

  const total = subTotal + shipping + taxes;

  const orderData: Order = {
    uid: "", // generate automaticaly
    date: Date.now(),
    status: "paid",
    billAddress,
    lineItems,
    payment: {
      currency: "EUR",
      taxPercent: SHOP_TAX_RATE,
      subTotal,
      taxes,
      total,
    },
  };

  console.log("Order created", orderData);

  clearLineItems();
  clearBillingInfo();

  redirect("/order-completed");
};
