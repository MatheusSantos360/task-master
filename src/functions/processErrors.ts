import { ZodError } from "zod";

export const processErrors = (error: ZodError) => {
  return error.errors.map((err) => ({
    path: err.path,
    message: err.message,
  }));
};
