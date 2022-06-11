import { z } from "zod";

export const CategoryFormSchema = z.object({
  name: z.string(),
  slug: z.string(),
  parentSlug: z.string(),
  description: z.string().optional(),
});
