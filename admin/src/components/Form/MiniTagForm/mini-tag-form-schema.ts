import { z } from "zod";

export const MiniTagFormSchema = z.object({
  name: z.string(),
});
