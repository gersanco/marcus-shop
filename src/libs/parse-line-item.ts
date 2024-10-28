import { Product } from "@/schemas/product-schema";

export default function parseLineItems(
  products: Product[],
  uids: string[]
): { uid: string; name: string; price: number; quantity: number }[] {
  const lineItemsMap: {
    [key: string]: {
      uid: string;
      name: string;
      price: number;
      quantity: number;
    };
  } = {};

  uids.forEach((uid) => {
    const product = products.find((p) => p.uid === uid);
    if (!product) {
      throw new Error(`Product with UID ${uid} not found`);
    }
    if (lineItemsMap[uid]) {
      lineItemsMap[uid].quantity += 1;
    } else {
      lineItemsMap[uid] = {
        uid: product.uid as string,
        name: product.title,
        price: product.price,
        quantity: 1,
      };
    }
  });

  return Object.values(lineItemsMap);
}
