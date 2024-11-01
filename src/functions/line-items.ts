import { cookies } from "next/headers";
import parseLineItems from "@/libs/parse-line-item";
import { listAllProducts } from "@/libs/product-service";

export function getLineItems() {
  const cookiesStore = cookies();
  const items: string[] = JSON.parse(cookiesStore.get("cart")?.value || "[]");

  if (items.length === 0) return [];

  const products = listAllProducts();

  const lineItem = parseLineItems(products, items);

  return lineItem;
}

export function getTotalLineItems() {
  const cookiesStore = cookies();
  const items: string[] = JSON.parse(cookiesStore.get("cart")?.value || "[]");

  return items.length;
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

export function decreaseLineItem(itemId: string) {
  const cookiesStore = cookies();

  const lineItems: string[] = JSON.parse(
    cookiesStore.get("cart")?.value || "[]"
  );

  const index = lineItems.indexOf(itemId);

  lineItems.splice(index, 1);

  cookiesStore.set("cart", JSON.stringify(lineItems));
}

export function removeLineItem(itemId: string) {
  const cookiesStore = cookies();

  const lineItems: string[] = JSON.parse(
    cookiesStore.get("cart")?.value || "[]"
  );

  const items = lineItems.filter((lineItem) => lineItem !== itemId);

  cookiesStore.set("cart", JSON.stringify(items));
}
