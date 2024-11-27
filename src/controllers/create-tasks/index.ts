import { response, status } from "../../functions/response";
import { ICreateTasksController, ICreateTasksRepository } from "../../types/repositories/create-tasks";
import { ITask } from "../../types/task.types";

export class CreateTasksController implements ICreateTasksController {
  constructor(private createTasksRepository: ICreateTasksRepository) {}

  async handle(body: ITask) {
    try {
      const task = await this.createTasksRepository.createTask(body);

      return status(response.CREATED).body({
        message: "Task created successfully!",
        data: task,
      });
    } catch {
      return status(response.INTERNAL_SERVER_ERROR).internalServerError();
    }
  }
}
