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
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(1000),
  dueDate: z.date().optional(),
  priority: z.enum(priorityValues).optional(),
  status: z.enum(statusValues).optional(),
  tags: z.array(z.string()).optional(),
});


export type ITask = z.infer<typeof tasksSchema>
