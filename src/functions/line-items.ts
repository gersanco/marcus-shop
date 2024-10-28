import { cookies } from "next/headers";

export function getLineItems() {
  const cookiesStore = cookies();
  return JSON.parse(cookiesStore.get("cart")?.value || "[]");
}

export function addLineItem(itemId: string) {
  const cookiesStore = cookies();

  const lineItems: string[] = JSON.parse(
    cookiesStore.get("cart")?.value || "[]"
  );

  lineItems.push(itemId);

  cookiesStore.set("cart", JSON.stringify(lineItems));
}

export function hasLineItem(itemId: string) {
  const cookiesStore = cookies();

  const lineItems: string[] = JSON.parse(
    cookiesStore.get("cart")?.value || "[]"
  );

  return lineItems.includes(itemId);
}
