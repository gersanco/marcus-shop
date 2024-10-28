"use server";
import { addLineItem } from "@/functions/line-items";

export default async function addProductToCartAction(productId: string) {
  addLineItem(productId);
}
