import { listProducts } from "@/libs/product-service";
import BikeGrid from "@/components/bikes/bike-grid";

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
