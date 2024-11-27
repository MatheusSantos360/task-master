import { Request, Response } from "express";
import { createTasksRepository } from "../../repositories/create-tasks";
import { CreateTasksController } from "../../controllers/create-tasks";
import { validateTaskData } from "../../middlewares/validateTaskData";

export const middlewares = [validateTaskData]

export default async (req: Request, res: Response) => {
  const createUsersController = new CreateTasksController(new createTasksRepository());
  const { status, body } = await createUsersController.handle(req.body);
  res.status(status).send(body);
};
