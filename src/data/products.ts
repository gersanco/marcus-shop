import { Product } from "@/schemas/product-schema";

export const products_data: Product[] = [
  {
    uid: "bike1",
    title: "Mountain Bike",
    description: "A sturdy mountain bike suitable for off-road trails.",
    price: 499.99,
    inStock: 10,
    category: "Bikes",
    slug: "mountain-bike",
    image: "/assets/placeholder.svg",
  },
  {
    uid: "bike2",
    title: "Road Bike",
    description: "A lightweight road bike designed for speed on paved roads.",
    price: 799.99,
    inStock: 5,
    category: "Bikes",
    slug: "road-bike",
    image: "/assets/placeholder.svg",
  },
  {
    uid: "bike3",
    title: "Hybrid Bike",
    description:
      "A versatile hybrid bike that combines features of road and mountain bikes.",
    price: 599.99,
    inStock: 8,
    category: "Bikes",
    slug: "hybrid-bike",
    image: "/assets/placeholder.svg",
  },
  {
    uid: "bike4",
    title: "Electric Bike",
    description:
      "An electric bike with a powerful motor for effortless riding.",
    price: 999.99,
    inStock: 3,
    category: "Bikes",
    slug: "electric-bike",
    image: "/assets/placeholder.svg",
  },
  {
    uid: "bike5",
    title: "Folding Bike",
    description: "A compact folding bike that is easy to store and transport.",
    price: 399.99,
    inStock: 12,
    category: "Bikes",
    slug: "folding-bike",
    image: "/assets/placeholder.svg",
  },
];
