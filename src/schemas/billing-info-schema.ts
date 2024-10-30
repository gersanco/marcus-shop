import { z } from "zod";

export type ClientType = "particular" | "company";

const baseSchema = z.object({
  email: z.string().email(),
  clientType: z.enum(["particular", "company"]),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  apartment: z.string(),
  country: z.string(),
  city: z.string(),
  province: z.string(),
  postalCode: z.string(),
  phone: z.string(),
  company: z.string().optional(),
  taxNumber: z.string().optional(),
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
      message: "Company is a required for company client type",
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
      message: "Tax number is a required for company client type",
      path: ["taxNumber"],
    }
  );

export type BillingInfo = z.infer<typeof BillingInfoSchema>;
