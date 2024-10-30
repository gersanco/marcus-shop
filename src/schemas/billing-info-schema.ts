import { z } from "zod";

export type ClientType = "particular" | "company";

const baseSchema = z.object({
  email: z.string().email().min(1, { message: "Email cannot be empty" }),
  clientType: z.enum(["particular", "company"]),
  firstName: z.string().min(1, { message: "First name cannot be empty" }),
  lastName: z.string().min(1, { message: "Last name cannot be empty" }),
  address: z.string().min(1, { message: "Address cannot be empty" }),
  apartment: z.string().min(1, { message: "Apartment cannot be empty" }),
  country: z.string().min(1, { message: "Country cannot be empty" }),
  city: z.string().min(1, { message: "City cannot be empty" }),
  province: z.string().min(1, { message: "Province cannot be empty" }),
  postalCode: z.string().min(1, { message: "Postal code cannot be empty" }),
  phone: z.string().min(1, { message: "Phone cannot be empty" }),
  company: z.string().min(1, { message: "Company cannot be empty" }).optional(),
  taxNumber: z
    .string()
    .min(1, { message: "Tax number cannot be empty" })
    .optional(),
});

export const BillingInfoSchema = baseSchema
  .refine(
    (data) => {
      if (data.clientType === "company") {
        return Boolean(data.company);
      }
      return true;
    },
    {
      message: "Company is required for company client type",
      path: ["company"],
    }
  )
  .refine(
    (data) => {
      if (data.clientType === "company") {
        return Boolean(data.taxNumber);
      }
      return true;
    },
    {
      message: "Tax number is required for company client type",
      path: ["taxNumber"],
    }
  );

export type BillingInfo = z.infer<typeof BillingInfoSchema>;
