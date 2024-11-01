import { products_data } from "@/data/products";
import { PartType } from "@/schemas/product-schema";

export function listAllProducts() {
  return products_data;
}

export function listProducts(category?: string) {
  if (category) {
    return products_data.filter((prod) => prod.category === category);
  }

  return products_data.filter((prod) => prod.category !== "custom");
}

export function findProduct(slug: string) {
  return products_data.find((product) => product.slug === slug);
}

export function listParts(type: PartType) {
  return products_data.find((product) => product.type === type);
}
