import { z } from "zod";

export const ArticleFormSchema = z.object({
  state: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string().optional(),
  body: z.string(),
});
