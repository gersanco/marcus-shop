import OrderSummary from "@/components/checkout/order-summary";
import BillingInfoForm from "@/components/checkout/billing-info-form";
import PaymentList from "@/components/checkout/payment-list";

const sampleOrder = {
  items: [
    { id: "1", name: "Product 1", price: 19.99, quantity: 2 },
    { id: "2", name: "Product 2", price: 29.99, quantity: 1 },
  ],
  subtotal: 69.97,
  tax: 5.6,
  shipping: 5.0,
  total: 80.57,
};

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <BillingInfoForm />
        <div className="mt-10 lg:mt-0">
          <OrderSummary order={sampleOrder} />

          <PaymentList />
        </div>
      </div>
    </div>
  );
}
