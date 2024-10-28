import { products_data } from "../data/products";

export function listProducts(category?: string) {
  if (category) {
    return products_data.filter((prod) => prod.category === category);
  }

  return products_data;
}

export function findProduct(slug: string) {
  return products_data.find((product) => product.slug === slug);
}
