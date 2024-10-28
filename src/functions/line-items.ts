"use server";

import { cookies } from "next/headers";
const cookiesStore = cookies();

export function getLineItems() {
  return JSON.parse(cookies().get("cart")?.value || "[]");
}

export function addLineItem(itemId: string) {
  const lineItems: string[] = JSON.parse(
    cookiesStore.get("cart")?.value || "[]"
  );

  lineItems.push(itemId);

  cookiesStore.set("cart", JSON.stringify(lineItems));
}

export function hasLineItem(itemId: string) {
  const lineItems: string[] = JSON.parse(
    cookiesStore.get("cart")?.value || "[]"
  );

  return lineItems.includes(itemId);
}
