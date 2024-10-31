import { IGetUsersRepository } from "../../types/get-users/get-users.types";
import { IUser } from "../../types/user.types";

export class DBGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    return [{
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      confirmPassword: "password123"
    }]
  }

}