import User from "../../models/user";
import { IGetUserRepository } from "../../types/repositories/get-user";
import { IUser } from "../../types/user.types";

export class GetUserRepository implements IGetUserRepository {
  getUser(id: number): Promise<IUser | null> {
    const user = User.findOne({ id: id });

    return user;
  }
}
