import { expect, test, describe } from "vitest";
import { LineItemSchema } from "./line-item-schema"; // Assuming you have the schema defined in this file

describe("LineItemSchema", () => {
  test("should validate a correct line item", () => {
    const lineItem = {
      uid: "123",
      name: "Sample Line Item",
      price: 19.99,
      quantity: 2,
      unit: "pcs",
    };

    const validation = LineItemSchema.safeParse(lineItem);
    expect(validation.success).toBe(true);
  });

  test("should invalidate a line item with missing required fields", () => {
    const lineItem = {
      name: "Sample Line Item",
      price: 19.99,
      quantity: 2,
      unit: "pcs",
    };

    const validation = LineItemSchema.safeParse(lineItem);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a line item with incorrect types", () => {
    const lineItem = {
      uid: 123,
      name: "Sample Line Item",
      price: "19.99",
      quantity: "2",
      unit: 1,
    };

    const validation = LineItemSchema.safeParse(lineItem);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a line item with negative price", () => {
    const lineItem = {
      uid: "123",
      name: "Sample Line Item",
      price: -19.99,
      quantity: 2,
      unit: "pcs",
    };

    const validation = LineItemSchema.safeParse(lineItem);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a line item with non-positive quantity", () => {
    const lineItem = {
      uid: "123",
      name: "Sample Line Item",
      price: 19.99,
      quantity: 0,
      unit: "pcs",
    };

    const validation = LineItemSchema.safeParse(lineItem);
    expect(validation.success).toBe(false);
  });

  test("should validate a line item without optional unit", () => {
    const lineItem = {
      uid: "123",
      name: "Sample Line Item",
      price: 19.99,
      quantity: 2,
    };

    const validation = LineItemSchema.safeParse(lineItem);
    expect(validation.success).toBe(true);
  });
});
