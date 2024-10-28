import { expect, test, describe } from "vitest";
import parseLineItems from "./parse-line-item";

const products = [
  {
    uid: "b1d493af-5ed0-52a1-91aa-2ed4cfd958f7",
    title: "Mountain Bike Pro",
    description: "A high-performance mountain bike for rugged trails.",
    price: 1200.0,
    inStock: 5,
    category: "Mountain",
    slug: "mountain-bike-pro",
  },
  {
    uid: "f549bc42-b812-5fc5-b3ae-2bae16bef757",
    title: "Road Bike Elite",
    description: "A lightweight road bike designed for speed and agility.",
    price: 1500.0,
    inStock: 8,
    category: "Road",
    slug: "road-bike-elite",
  },
  {
    uid: "b20744cd-5cd1-545e-a360-f43bd8bebfde",
    title: "Electric Commuter Bike",
    description:
      "An electric bike perfect for daily commutes with minimal effort.",
    price: 2000.0,
    inStock: 3,
    category: "Electric",
    slug: "electric-commuter-bike",
  },
];

describe("parseLineItems", () => {
  test("should parse line items correctly", () => {
    const uids = [products[0].uid, products[1].uid];
    const expected = [
      {
        uid: products[0].uid,
        name: products[0].title,
        price: products[0].price,
        quantity: 1,
      },
      {
        uid: products[1].uid,
        name: products[1].title,
        price: products[1].price,
        quantity: 1,
      },
    ];

    const result = parseLineItems(products, uids);
    expect(result).toEqual(expected);
  });

  test("should accumulate quantity for duplicate UIDs", () => {
    const uids = [products[0].uid, products[0].uid, products[1].uid];
    const expected = [
      {
        uid: products[0].uid,
        name: products[0].title,
        price: products[0].price,
        quantity: 2,
      },
      {
        uid: products[1].uid,
        name: products[1].title,
        price: products[1].price,
        quantity: 1,
      },
    ];

    const result = parseLineItems(products, uids);
    expect(result).toEqual(expected);
  });

  test("should throw an error if a product is not found", () => {
    const uids = ["221f8ff6-1357-54e0-8c60-0008ef77edad"];

    expect(() => parseLineItems(products, uids)).toThrowError(
      "Product with UID"
    );
  });
});
