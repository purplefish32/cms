import { z } from "zod";

export const CategoryFormSchema = z.object({
  name: z.string(),
  slug: z.string(),
  parent_slug: z.string(),
  description: z.string(),
});
