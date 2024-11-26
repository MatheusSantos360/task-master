import { HttpResponse } from "../../http.types";

export interface ICreateTasksController {
  // @ts-expect-error ITask not implemented 
  handle(body: ITask): Promise<HttpResponse<Itask>>;
}

export interface ICreateTasksRepository {
  // @ts-expect-error ITask not implemented 
  createTask(task: ITask): Promise<Itask>;
}