import { expect, test, describe } from "vitest";
import { BillingInfoSchema } from "./billing-info-schema"; // Assuming you have the schema defined in this file

describe("BillingInfoSchema", () => {
  test("should validate a correct particular client", () => {
    const billingInfo = {
      email: "test@example.com",
      clientType: "particular",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      apartment: "Apt 4B",
      country: "USA",
      province: "NY",
      postalCode: "10001",
      phone: "123-456-7890",
    };

    const validation = BillingInfoSchema.safeParse(billingInfo);
    expect(validation.success).toBe(true);
  });

  test("should validate a correct company client", () => {
    const billingInfo = {
      email: "test@example.com",
      clientType: "company",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      apartment: "Apt 4B",
      country: "USA",
      province: "NY",
      postalCode: "10001",
      phone: "123-456-7890",
      company: "Example Corp",
      taxNumber: "123456789",
    };

    const validation = BillingInfoSchema.safeParse(billingInfo);
    expect(validation.success).toBe(true);
  });

  test("should invalidate a particular client with missing required fields", () => {
    const billingInfo = {
      email: "test@example.com",
      clientType: "particular",
      firstName: "John",
      address: "123 Main St",
      apartment: "Apt 4B",
      country: "USA",
      province: "NY",
      postalCode: "10001",
      phone: "123-456-7890",
    };

    const validation = BillingInfoSchema.safeParse(billingInfo);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a company client with missing required fields", () => {
    const billingInfo = {
      email: "test@example.com",
      clientType: "company",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      apartment: "Apt 4B",
      province: "NY",
      postalCode: "10001",
      phone: "123-456-7890",
      taxNumber: "123456789",
    };

    const validation = BillingInfoSchema.safeParse(billingInfo);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a company client with missing taxNumber", () => {
    const billingInfo = {
      email: "test@example.com",
      clientType: "company",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      apartment: "Apt 4B",
      country: "USA",
      province: "NY",
      postalCode: "10001",
      phone: "123-456-7890",
      company: "Example Corp",
    };

    const validation = BillingInfoSchema.safeParse(billingInfo);
    expect(validation.success).toBe(false);
  });

  test("should invalidate a client with incorrect email format", () => {
    const billingInfo = {
      email: "invalid-email",
      clientType: "particular",
      firstName: "John",
      lastName: "Doe",
      address: "123 Main St",
      apartment: "Apt 4B",
      country: "USA",
      province: "NY",
      postalCode: "10001",
      phone: "123-456-7890",
    };

    const validation = BillingInfoSchema.safeParse(billingInfo);
    expect(validation.success).toBe(false);
  });
});
