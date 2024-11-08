import { expect, test, describe } from "vitest";
import { ProductSchema } from "./product-schema";

describe("ProductSchema", () => {
  test("should validate a correct product", () => {
    const product = {
      uid: "123",
      title: "Sample Product",
      description: "This is a sample product.",
      price: 29.99,
      inStock: 10,
      category: "Electronics",
      slug: "sample-product",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(true);
  });

  test("should invalidate a product with missing required fields", () => {
    const product = {
      description: "This is a sample product.",
      price: 29.99,
      inStock: 10,
      category: "Electronics",
      slug: "sample-product",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a product with incorrect types", () => {
    const product = {
      uid: 123,
      title: "Sample Product",
      description: "This is a sample product.",
      price: "29.99",
      inStock: "10",
      category: "Electronics",
      slug: "sample-product",
      image: 12345,
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a product with negative price", () => {
    const product = {
      uid: "123",
      title: "Sample Product",
      description: "This is a sample product.",
      price: -29.99, // price should be nonnegative
      inStock: 10,
      category: "Electronics",
      slug: "sample-product",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a product with negative inStock", () => {
    const product = {
      uid: "123",
      title: "Sample Product",
      description: "This is a sample product.",
      price: 29.99,
      inStock: -10,
      category: "Electronics",
      slug: "sample-product",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a product with empty title", () => {
    const product = {
      uid: "123",
      title: "",
      description: "This is a sample product.",
      price: 29.99,
      inStock: 10,
      category: "Electronics",
      slug: "sample-product",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a product with empty description", () => {
    const product = {
      uid: "123",
      title: "Sample Product",
      description: "",
      price: 29.99,
      inStock: 10,
      category: "Electronics",
      slug: "sample-product",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a product with empty category", () => {
    const product = {
      uid: "123",
      title: "Sample Product",
      description: "This is a sample product.",
      price: 29.99,
      inStock: 10,
      category: "",
      slug: "sample-product",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a product with empty slug", () => {
    const product = {
      uid: "123",
      title: "Sample Product",
      description: "This is a sample product.",
      price: 29.99,
      inStock: 10,
      category: "Electronics",
      slug: "",
      image: "https://example.com/sample-product.jpg",
    };

    const validation = ProductSchema.safeParse(product);
    expect(validation.success).toBe(false);
  });
});
