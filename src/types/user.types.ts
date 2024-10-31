import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Must be at least 3 characters long."),
  email: z.string().email(),
  password: z.string().min(8, "Must be at least 8 characters long."),
  confirmPassword: z.string().min(8, "Must be at least 8 characters long."),
});

export type IUser = z.infer<typeof userSchema>;
