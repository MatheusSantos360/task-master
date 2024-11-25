import { response, status } from "../../functions/response";
import { IGetUsersController, IGetUsersRepository } from "../../types/repositories/get-users";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return status(response.CREATED).body({ data: users });
    } catch {
      return status(response.INTERNAL_SERVER_ERROR).internalServerError();
    }
  }
}
