import { DBGetUsersRepository } from './repositories/get-users/db-get-users';
import express, { Application, Request, Response } from "express";
import { config } from "dotenv"
import { GetUsersController } from "./controllers/get-users/get-users";

config()
const port = process.env.PORT || 3000

const app: Application = express();

app.get("/users", async (req: Request, res: Response) => {
  const dbGetUsersRepository = new DBGetUsersRepository()
  const getUsersController = new GetUsersController(dbGetUsersRepository)
  const {statusCode, body } = await getUsersController.handle()
  res.status(statusCode).json(body)
})

app.listen(port, () => {
  console.log("server is running on http://localhost:3000");
});
