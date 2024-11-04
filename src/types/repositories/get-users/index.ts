import HttpResponse from "../../http-response.type";
import { IUser } from "../../user.types";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<IUser[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}
