import { HttpResponse } from "../../http.types";
import { IUser } from "../../user.types";

export interface ICreateUsersController {
  handle(body: IUser): Promise<HttpResponse<IUser>>;
}

export interface ICreateUsersRepository {
  createUser(user: IUser): Promise<IUser>;
}