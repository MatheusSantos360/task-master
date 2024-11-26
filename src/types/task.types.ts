import { z } from "zod";

enum Priority {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

enum Status {
  TODO = "Todo",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}

const priorityValues = Object.values(Priority) as [string, ...string[]];
const statusValues = Object.values(Status) as [string, ...string[]];

export const tasksSchema = z.object({
  id: z.number().nonnegative(),
  title: z
    .string()
    .min(1, { message: "Title cannot be empty. Come on, give your task a cool name!" })
    .max(100, { message: "Title cannot exceed 100 characters. Be concise and to the point!" }),
  description: z
    .string()
    .min(1, { message: "Description cannot be empty. Give more details about the task!" })
    .max(1000, { message: "Description cannot exceed 1000 characters. Keep it simple!" }),
  dueDate: z
    .date()
    .optional()
    .refine((date) => date === undefined || date > new Date(), {
      message: "The due date must be a future date. Let's avoid delays!",
    }),
  priority: z
    .enum(priorityValues)
    .optional()
    .refine((val) => val === undefined || priorityValues.includes(val), {
      message: "Select a valid priority: High, Medium, or Low.",
    }),
  status: z
    .enum(statusValues)
    .optional()
    .refine((val) => val === undefined || statusValues.includes(val), {
      message: "Select a valid status: Todo, In Progress, or Completed.",
    }),
  tags: z
    .array(z.string())
    .optional()
    .refine((tags) => tags === undefined || tags.every((tag) => typeof tag === "string"), {
      message: "Tags must be text. Let's keep things organized!",
    }),
  user: z.number(),
});

export type ITask = z.infer<typeof tasksSchema>;
