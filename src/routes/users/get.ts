import { Request, Response } from "express";
import { GetUsersController } from "../../controllers/get-users";
import { GetUsersRepository } from "../../repositories/get-users";

export default async (req: Request, res: Response) => {
  const getUsersController = new GetUsersController(new GetUsersRepository());
  const { status, body } = await getUsersController.handle()
  res.status(status).send(body);
}