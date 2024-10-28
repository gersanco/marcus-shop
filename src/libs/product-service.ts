import { products_data } from "../data/products";

export function listProducts() {
  // TODO: add filters
  return products_data;
}

export function findProduct(slug: string) {
  return products_data.find((product) => product.slug === slug);
}
