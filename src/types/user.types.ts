import { z } from "zod";

// Function to check password strength
const isStrongPassword = (password: string) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(password);
  return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
};

export const userSchema = z
  .object({
    id: z.number().nonnegative({ message: "Please enter a valid ID. It should be a non-negative number." }),
    name: z
      .string()
      .min(3, { message: "Name must have at least 3 characters." })
      .refine((val) => val !== undefined && val.trim() !== "", {
        message: "Name can't be empty.",
      }),
    email: z.string().email({ message: "Please provide a valid email address." }),
    password: z
      .string()
      .min(8, { message: "Password needs to be at least 8 characters long." })
      .refine((val) => isStrongPassword(val), {
        message: "Password must include uppercase and lowercase letters, a number, and a special character.",
      }),
    confirmPassword: z.string().min(8, { message: "Please confirm your password (at least 8 characters)." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match, please check again.",
    path: ["confirmPassword"],
  });

export type IUser = Omit<z.infer<typeof userSchema>, "confirmPassword">;
