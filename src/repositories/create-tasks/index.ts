import Task from "../../models/task";
import { ICreateTasksRepository } from "../../types/repositories/create-tasks";
import { ITask } from "../../types/task.types";

export class createTasksRepository implements ICreateTasksRepository {
  async createTask(task: ITask) {
    const newTask = new Task(task);

    await newTask.save();

    return newTask;
  }
}
