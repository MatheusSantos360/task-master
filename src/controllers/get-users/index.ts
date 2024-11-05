import { IGetUsersController, IGetUsersRepository } from "../../types/repositories/get-users";
import { response, status } from "../../functions/response";

export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return status(response.OK).body(users)
    } catch {
      return status(response.INTERNAL_SERVER_ERROR).body("Internal Server Error")
    }
  }
}
