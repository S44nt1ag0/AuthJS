import z from "zod";

export const loginSchema = z.object({
  username: z.string().min(8),
  password: z.string().min(8),
});

export type User = z.infer<typeof loginSchema>;