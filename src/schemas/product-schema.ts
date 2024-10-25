import { z } from "zod";

const ProductSchema = z.object({
  uid: z.string().optional(),
  title: z.string(),
  description: z.string(),
  price: z.number().nonnegative(),
  inStock: z.number().int().nonnegative(),
  category: z.string(),
  slug: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export default ProductSchema;
