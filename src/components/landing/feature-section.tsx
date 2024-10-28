import React from "react";
import { listProducts } from "@/libs/product-service";
import BikeCard from "../bikes/bike-card";
import GridProducts from "../grid-products";

export default function FeatureSection() {
  const bikes = listProducts();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-base-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
          Featured Bikes
        </h2>

        <GridProducts>
          {bikes.map((bike) => (
            <BikeCard {...bike} key={bike.slug} />
          ))}
        </GridProducts>
      </div>
    </section>
  );
}
