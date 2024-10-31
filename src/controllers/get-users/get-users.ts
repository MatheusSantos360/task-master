import { IGetUsersController, IGetUsersRepository } from "../../types/get-users/get-users.types";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch {
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
