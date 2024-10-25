import { expect, test, describe } from "vitest";
import { PaymentSchema } from "./payment-schema"; // Assuming you have the schema defined in this file

describe("PaymentSchema", () => {
  test("should validate a correct payment", () => {
    const payment = {
      subTotal: 100,
      taxes: 10,
      total: 110,
      currency: "USD",
      taxPercent: 0.1,
    };

    const validation = PaymentSchema.safeParse(payment);
    expect(validation.success).toBe(true);
  });

  test("should invalidate a payment with incorrect taxes", () => {
    const payment = {
      subTotal: 100,
      taxes: 5,
      total: 110,
      currency: "USD",
      taxPercent: 0.1,
    };

    const validation = PaymentSchema.safeParse(payment);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a payment with incorrect total", () => {
    const payment = {
      subTotal: 100,
      taxes: 10,
      total: 105,
      currency: "USD",
      taxPercent: 0.1,
    };

    const validation = PaymentSchema.safeParse(payment);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a payment with negative subTotal", () => {
    const payment = {
      subTotal: -100,
      taxes: -10,
      total: -110,
      currency: "USD",
      taxPercent: 0.1,
    };

    const validation = PaymentSchema.safeParse(payment);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a payment with negative taxPercent", () => {
    const payment = {
      subTotal: 100,
      taxes: -10,
      total: 90,
      currency: "USD",
      taxPercent: -0.1,
    };

    const validation = PaymentSchema.safeParse(payment);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a payment with incorrect types", () => {
    const payment = {
      subTotal: "100",
      taxes: "10",
      total: "110",
      currency: 123,
      taxPercent: "0.1",
    };

    const validation = PaymentSchema.safeParse(payment);
    expect(validation.success).toBe(false);
  });
});
