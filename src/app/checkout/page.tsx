import OrderSummary from "@/components/checkout/order-summary";
import BillingInfoForm from "@/components/checkout/billing-info-form";
import PaymentList from "@/components/checkout/payment-list";
import { getLineItems } from "@/functions/line-items";
import calculateSubTotalPrice from "@/libs/calculate-sub-total-price";
import { SHIPPING_PRICE, SHOP_TAX_RATE } from "@/libs/constants";
import calculateTaxes from "@/libs/calculate-taxes";

export const getData = () => {
  const lineItems = getLineItems();

  const subtotal = calculateSubTotalPrice(lineItems);
  const tax = calculateTaxes(subtotal, SHOP_TAX_RATE);
  const shipping = SHIPPING_PRICE;

  const total = subtotal + shipping + tax;

  return {
    items: lineItems,
    subtotal,
    tax,
    shipping,
    total,
  };
};

export default function CheckoutPage() {
  const order = getData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <BillingInfoForm />
        <div className="mt-10 lg:mt-0">
          <OrderSummary order={order} />

          <PaymentList />
        </div>
      </div>
    </div>
  );
}
