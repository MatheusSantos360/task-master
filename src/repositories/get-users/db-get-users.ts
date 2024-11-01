import User from "../../models/user";
import { IGetUsersRepository } from "../../types/get-users/get-users.types";
import { IUser } from "../../types/user.types";

export class DBGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    const users = User.find({})
    
    return users
  }

}