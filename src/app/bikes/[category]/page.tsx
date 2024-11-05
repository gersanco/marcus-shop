import { listProducts } from "@/libs/product-service";
import BikeGrid from "@/components/bikes/bike-grid";
import { categores } from "@/schemas/product-schema";

export async function generateStaticParams() {
  return categores.map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const bikes = listProducts(params.category);
  return (
    <div>
      <BikeGrid bikes={bikes} />
    </div>
  );
}
