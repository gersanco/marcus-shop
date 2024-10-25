import { z } from "zod";
import { LineItemSchema } from "./line-item-schema";
import { BillingInfoSchema } from "./billing-info-schema";
import { PaymentSchema } from "./payment-schema";

export type Status = "paid" | "completed" | "canceled";

const StatusSchema = z.enum(["paid", "completed", "canceled"]);

export const OrderSchema = z.object({
  uid: z.string(),
  status: StatusSchema,
  lineItems: z.array(LineItemSchema),
  date: z.number(),
  billAddress: BillingInfoSchema,
  payment: PaymentSchema,
});

export type Order = z.infer<typeof OrderSchema>;
