import { z } from "zod";

export const LineItemSchema = z.object({
  uid: z.string(),
  title: z.string(),
  price: z.number().nonnegative(),
  quantity: z.number().positive(),
  unit: z.string().optional(),
});

export type LineItem = z.infer<typeof LineItemSchema>;
