import User from "../../models/user";
import { IGetUsersRepository } from "../../types/repositories/get-users";
import { IUser } from "../../types/user.types";

export class GetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    const users = User.find({});

    return users;
  }
}
