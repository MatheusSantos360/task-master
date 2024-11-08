import { Request, Response } from "express";
import { GetUsersController } from "../../controllers/get-users";
import { DBGetUsersRepository } from "../../repositories/get-users/get-users";

export default async (req: Request, res: Response) => {
  const getUsersController = new GetUsersController(new DBGetUsersRepository());
  const { status, body } = await getUsersController.handle()
  res.status(status).send(body);
}