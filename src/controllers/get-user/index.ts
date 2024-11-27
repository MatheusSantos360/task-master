import { response, status } from "../../functions/response";
import { HttpResponse } from "../../types/http.types";
import { IGetUserController, IGetUserRepository } from "../../types/repositories/get-user";
import { IUser } from "../../types/user.types";

export class GetUserController implements IGetUserController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}
  async handle(id: string): Promise<HttpResponse<IUser>> {
    try {
      const user = await this.getUserRepository.getUser(+id);

      if (user) {
        return status(response.OK).body({ data: user });
      }

      return status(response.NOT_FOUND).body({ message: "User not found" });
    } catch {
      return status(response.INTERNAL_SERVER_ERROR).internalServerError();
    }
  }
}
