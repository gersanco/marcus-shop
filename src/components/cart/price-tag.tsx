import React from "react";

type Props = {
  price: number;
};
export default function PriceTag({ price }: Props) {
  return <span className="text-xl">{price.toFixed(2)} €</span>;
}
