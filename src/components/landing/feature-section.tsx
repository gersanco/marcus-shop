import React from "react";

import GridProducts from "../grid-products";
import CategoryCard from "../bikes/category-card";

export default function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-base-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 text-center">
          Featured Bikes
        </h2>

        <GridProducts>
          <CategoryCard category="road" />
          <CategoryCard category="mountain" />
          <CategoryCard category="electric" />
          <CategoryCard category="custom" />
        </GridProducts>
      </div>
    </section>
  );
}
