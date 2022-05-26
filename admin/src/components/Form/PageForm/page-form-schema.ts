import { z } from "zod";

export const PageFormSchema = z.object({
  state: z.string(),
  title: z.string(),
  slug: z.string(),
  body: z.string(),
});
