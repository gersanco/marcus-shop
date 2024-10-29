"use client";
import React, { PropsWithChildren } from "react";
import {
  addProductToCartAction,
  decreaseLineItemAction,
  removeProductFromCartAction,
} from "@/actions/cart";

type Props = PropsWithChildren & {
  productId: string;
};
export default function CartActions({ children, productId }: Props) {
  const handleAction = async (formData: FormData) => {
    const action = formData.get("action") as string;
    switch (action) {
      case "increase":
        addProductToCartAction(productId);
        break;
      case "decrease":
        decreaseLineItemAction(productId);
        break;
      case "remove":
        removeProductFromCartAction(productId);
        break;
      default:
        return;
    }
  };

  return <form action={handleAction}>{children}</form>;
}
