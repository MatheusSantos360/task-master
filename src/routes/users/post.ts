import { Request, Response } from "express";
import { CreateUsersController } from "../../controllers/create-users";
import { validateUserData } from "../../middlewares/validateUserData";
import { CreateUsersRepository } from "../../repositories/create-users";

export const middlewares = [validateUserData];

export default async (req: Request, res: Response) => {
  const createUsersController = new CreateUsersController(new CreateUsersRepository());
  const { status, body } = await createUsersController.handle(req.body);
  res.status(status).send(body);
};
