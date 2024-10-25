import { z } from "zod";

export const PaymentSchema = z
  .object({
    subTotal: z.number().nonnegative(),
    taxes: z.number().nonnegative(),
    total: z.number().nonnegative(),
    currency: z.string(),
    taxPercent: z.number(),
  })
  .refine((data) => data.taxes === data.subTotal * data.taxPercent, {
    message: "Taxes must be equal to subTotal * taxPercent",
    path: ["taxes"], // This will show the error at the taxes field
  })
  .refine((data) => data.total === data.subTotal + data.taxes, {
    message: "Total must be equal to subTotal + taxes",
    path: ["total"], // This will show the error at the taxes field
  });

export type Payment = z.infer<typeof PaymentSchema>;
