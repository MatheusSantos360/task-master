import { HttpResponse } from "../../http.types";
import { IUser } from "../../user.types";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<IUser[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}
