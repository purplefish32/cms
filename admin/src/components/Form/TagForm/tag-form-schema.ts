import { z } from "zod";

export const TagFormSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
});
