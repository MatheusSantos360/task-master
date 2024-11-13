import { describe, expect, test } from "vitest";
import { GetUsersController } from "../../src/controllers/get-users";
import { response } from "../../src/functions/response";
import { IGetUsersRepository } from "../../src/types/repositories/get-users";
import { IUser } from "../../src/types/user.types";
import { mockUsers } from "../mocks/user.mocks";

describe("GetUsersController", () => {
  test("Should return a response with an array of users and status OK", async () => {
    class GetUsersRepositoryTest implements IGetUsersRepository {
      getUsers(): Promise<IUser[]> {
        return Promise.resolve(mockUsers);
      }
    }

    const getUsersController = new GetUsersController(new GetUsersRepositoryTest());
    const users = await getUsersController.handle();

    expect(users).toHaveProperty("status");
    expect(users).toHaveProperty("body");
    
    expect(Array.isArray(users.body)).toBeTruthy();
    expect(users.body).toBe(mockUsers);
    expect(users.status).toBe(response.OK);
  });

  test("Should return a response with an error message and status INTERNAL_SERVER_ERROR", async () => {
    class GetUsersRepositoryTest implements IGetUsersRepository {
      getUsers(): Promise<IUser[]> {
        return Promise.reject(mockUsers);
      }
    }

    const getUsersController = new GetUsersController(new GetUsersRepositoryTest());
    const users = await getUsersController.handle();

    expect(users).toHaveProperty("status");
    expect(users).toHaveProperty("body");
    
    expect(typeof users.body).toBe("string");
    expect(users.status).toBe(response.INTERNAL_SERVER_ERROR);
  });
});
