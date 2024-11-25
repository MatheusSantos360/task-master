import { response, status } from "../../functions/response";
import User from "../../models/user";
import { Error } from "../../types/http.types";
import { ICreateUsersController, ICreateUsersRepository } from "../../types/repositories/create-users";
import { IUser } from "../../types/user.types";

export class CreateUsersController implements ICreateUsersController {
  constructor(private readonly createUsersRepository: ICreateUsersRepository) {}

  async handle(body: IUser) {
    try {
      const user = await User.findOne(body);

      if (!user) {
        const validationError: Error = {
          message: "User already exists.",
        };

        return status(response.BAD_REQUEST).body({
          message: validationError.message,
          errors: [validationError],
        });
      }

      const newUser = await this.createUsersRepository.createUser(body);

      return status(response.OK).body({
        message: "User created successfully!",
        data: newUser,
      });
    } catch {
      return status(response.INTERNAL_SERVER_ERROR).internalServerError();
    }
  }
}
