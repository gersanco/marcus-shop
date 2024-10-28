import { findProduct } from "@/libs/product-service";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const bike = findProduct(params.slug);

  if (!bike) {
    notFound();
  }

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}
