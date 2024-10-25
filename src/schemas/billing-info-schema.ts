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
  province: z.string(),
  postalCode: z.string(),
  phone: z.string(),
  company: z.string().optional(),
  taxNumber: z.string().optional(),
});

export const BillingInfoSchema = baseSchema.refine(
  (data) => {
    if (data.clientType === "company") {
      return data.company !== undefined && data.taxNumber !== undefined;
    }
    return true;
  },
  {
    message: "Company and tax number are required for company client type",
    path: ["company"],
  }
);

export type BillingInfo = z.infer<typeof BillingInfoSchema>;
