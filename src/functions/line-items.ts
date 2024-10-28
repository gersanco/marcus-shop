import { cookies } from "next/headers";
import parseLineItems from "../libs/parse-line-item";
import { listProducts } from "../libs/product-service";

export function getLineItems() {
  const cookiesStore = cookies();
  const items: string[] = JSON.parse(cookiesStore.get("cart")?.value || "[]");

  if (items.length === 0) return [];

  const products = listProducts();

  const lineItem = parseLineItems(products, items);

  return lineItem;
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
