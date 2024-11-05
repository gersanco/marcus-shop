import { z } from "zod";

export type PartType = "frameType" | "frameFinish" | "wheel" | "rim" | "chain";
export type Category = "road" | "electric" | "mountain" | "custom";

export const categores: Category[] = ["custom", "electric", "mountain", "road"];

export const ProductSchema = z.object({
  uid: z.string().min(1, { message: "UID cannot be empty" }).optional(),
  title: z.string().min(1, { message: "Title cannot be empty" }),
  description: z.string().min(1, { message: "Description cannot be empty" }),
  price: z.number().nonnegative(),
  inStock: z.number().int().nonnegative(),
  category: z.string().min(1, { message: "Category cannot be empty" }),
  slug: z.string().min(1, { message: "Slug cannot be empty" }),
  image: z.string().min(1, { message: "Image cannot be empty" }).optional(),
  type: z
    .enum(["frameType", "frameFinish", "wheel", "rim", "chain"])
    .optional(),
  availableFor: z.string().array().optional(),
});

export type Product = z.infer<typeof ProductSchema>;
