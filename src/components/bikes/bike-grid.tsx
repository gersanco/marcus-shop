import React from "react";
import { Product } from "@/schemas/product-schema";
import GridProducts from "../grid-products";
import BikeCard from "./bike-card";

type Props = {
  bikes: Product[];
};

export default function BikeGrid({ bikes }: Props) {
  return (
    <GridProducts>
      {bikes.map((bike) => (
        <BikeCard {...bike} key={bike.slug} />
      ))}
    </GridProducts>
  );
}
