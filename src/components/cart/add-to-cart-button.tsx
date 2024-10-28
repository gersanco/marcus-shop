"use client";

import React from "react";
import Button from "../button";
import addProductToCartAction from "@/actions/cart/add-product-to-cart-action";

type Props = {
  productId: string;
};

export default function AddToCartButton({ productId }: Props) {
  const handleClick = async () => {
    await addProductToCartAction(productId);
  };

  return (
    <Button size="lg" color="neutral" onClick={handleClick}>
      Add to Cart
    </Button>
  );
}
