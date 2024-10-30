import PaymentList from "@/components/checkout/payment-list";

export default function PaymentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Choose Your Payment Method</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PaymentList />
      </section>
    </div>
  );
}
