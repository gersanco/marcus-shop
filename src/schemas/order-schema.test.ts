import { expect, test, describe } from "vitest";
import { OrderSchema } from "./order-schema";

const validLineItem = {
  uid: "lineItem1",
  name: "Sample Item",
  price: 100,
  quantity: 2,
  unit: "pcs",
};

const validBillingInfo = {
  email: "test@example.com",
  clientType: "particular",
  firstName: "John",
  lastName: "Doe",
  address: "123 Main St",
  apartment: "Apt 4B",
  city: "Sprigfield",
  country: "USA",
  province: "NY",
  postalCode: "10001",
  phone: "123-456-7890",
};

const validPayment = {
  subTotal: 200,
  taxes: 20,
  total: 220,
  currency: "USD",
  taxPercent: 0.1,
};

describe("OrderSchema", () => {
  test("should validate a correct order", () => {
    const order = {
      uid: "order1",
      status: "paid",
      lineItems: [validLineItem],
      date: Date.now(),
      billAddress: validBillingInfo,
      payment: validPayment,
    };

    const validation = OrderSchema.safeParse(order);
    expect(validation.success).toBe(true);
  });

  test("should invalidate an order with missing required fields", () => {
    const order = {
      status: "paid",
      lineItems: [validLineItem],
      date: Date.now(),
      billAddress: validBillingInfo,
      payment: validPayment,
    };

    const validation = OrderSchema.safeParse(order);
    expect(validation.success).toBe(false);
  });

  test("should invalidate an order with incorrect status", () => {
    const order = {
      uid: "order1",
      status: "unknown",
      lineItems: [validLineItem],
      date: Date.now(),
      billAddress: validBillingInfo,
      payment: validPayment,
    };

    const validation = OrderSchema.safeParse(order);
    expect(validation.success).toBe(false);
  });

  test("should invalidate an order with invalid line items", () => {
    const order = {
      uid: "order1",
      status: "paid",
      lineItems: [{ ...validLineItem, price: -100 }],
      date: Date.now(),
      billAddress: validBillingInfo,
      payment: validPayment,
    };

    const validation = OrderSchema.safeParse(order);
    expect(validation.success).toBe(false);
  });

  test("should invalidate an order with invalid billing info", () => {
    const order = {
      uid: "order1",
      status: "paid",
      lineItems: [validLineItem],
      date: Date.now(),
      billAddress: { ...validBillingInfo, email: "invalid-email" },
      payment: validPayment,
    };

    const validation = OrderSchema.safeParse(order);
    expect(validation.success).toBe(false);
  });

  test("should invalidate an order with invalid payment info", () => {
    const order = {
      uid: "order1",
      status: "paid",
      lineItems: [validLineItem],
      date: Date.now(),
      billAddress: validBillingInfo,
      payment: { ...validPayment, total: 999 },
    };

    const validation = OrderSchema.safeParse(order);
    expect(validation.success).toBe(false);
  });
});
