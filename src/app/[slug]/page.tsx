import { findProduct, listProducts } from "@/libs/product-service";
import { notFound } from "next/navigation";
import Image from "next/image";
import { DEFAULT_IMAGE } from "@/libs/constants";
import AddToCartButton from "@/components/cart/add-to-cart-button";

export async function generateStaticParams() {
  const products = listProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const bike = findProduct(params.slug);

  if (!bike) {
    notFound();
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-8">
        <Image
          src={bike.image || DEFAULT_IMAGE}
          alt="Product Image"
          width={600}
          height={900}
          className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{bike.title}</h1>
          <div>
            <p>{bike.description}</p>
          </div>
          <div className="text-4xl font-bold">{bike.price} €</div>
        </div>
        <AddToCartButton productId={bike.uid as string} />
      </div>
    </div>
  );
}
