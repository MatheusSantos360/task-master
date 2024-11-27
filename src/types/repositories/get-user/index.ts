import { HttpResponse } from "../../http.types";
import { IUser } from "../../user.types";

export interface IGetUserController {
  handle(id: string): Promise<HttpResponse<IUser>>;
}

export interface IGetUserRepository {
  getUser(id: number): Promise<IUser | null>;
}
