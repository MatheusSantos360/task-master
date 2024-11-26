import { ICreateTasksRepository } from "../../types/repositories/create-tasks";
import { ITask } from "../../types/task.types";

export class createTasksRepository implements ICreateTasksRepository {
  createTask(task: ITask): Promise<ITask[]> {
    throw new Error("Method not implemented.");
  }
}