import User from "../../models/user";
import { ICreateUsersRepository } from "../../types/repositories/create-users";
import { IUser } from "../../types/user.types";

export class CreateUsersRepository implements ICreateUsersRepository {
  async createUser(user: IUser) {
    const newUser = new User(user);

    await newUser.save();

    return user;
  }
}