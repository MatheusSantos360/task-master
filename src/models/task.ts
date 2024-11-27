import { Document, model, Schema } from "mongoose";
import { ITask } from "../types/task.types";

type TaskDocument = ITask & Document;

const tasksSchema = new Schema<TaskDocument>({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date },
  priority: { type: String, enum: ["low", "medium", "high"], },
  status: { type: String, enum: ["pending", "in progress", "completed"], required: true, default: "pending" },
  user: { type: Number, required: true },
});

const Task = model<TaskDocument>("tasks", tasksSchema);
export default Task;
