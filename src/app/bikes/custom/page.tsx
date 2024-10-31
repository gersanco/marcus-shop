import BikeParts from "@/components/bikes/bike-parts";
import { listProducts } from "@/libs/product-service";

export default function CustomBakePage() {
  const bikeParts = listProducts("custom");
  return (
    <div>
      <BikeParts parts={bikeParts} />
    </div>
  );
}
