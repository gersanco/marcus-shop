"use server";

import { redirect } from "next/navigation";
import { BillingInfo, BillingInfoSchema } from "../schemas/billing-info-schema";
import { setBillingInfo } from "@/functions/checkout";

export const addBillingInfoToCookies = (billingInfo: BillingInfo) => {
  const response = BillingInfoSchema.safeParse(billingInfo);

  if (response.success) {
    setBillingInfo(billingInfo);
    redirect("/checkout/payment");
  }

  return response.error.message;
};

export const createOrder = () => {
  return "";
};
