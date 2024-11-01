"use server";

import {
  addLineItem,
  decreaseLineItem,
  removeLineItem,
} from "@/functions/line-items";
import { redirect } from "next/navigation";

export async function addProductToCartAction(productId: string) {
  addLineItem(productId);
}

export async function removeProductFromCartAction(productId: string) {
  return removeLineItem(productId);
}

export async function decreaseLineItemAction(productId: string) {
  decreaseLineItem(productId);
}

export async function addMultiplesProductToCartAction(productsId: string[]) {
  productsId.forEach((productId) => addLineItem(productId));

  redirect("/checkout");
}
