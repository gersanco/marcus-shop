import { listProducts } from "@/libs/product-service";
import BikeGrid from "@/components/bikes/bike-grid";

export default function BikesPage() {
  const bikes = listProducts();
  return (
    <div>
      <h1>List Bikes</h1>

      <BikeGrid bikes={bikes} />
    </div>
  );
}
