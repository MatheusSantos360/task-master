import { describe, expect, test, vi } from "vitest";
import User from "../../src/models/user";
import { GetUsersRepository } from "../../src/repositories/get-users";
import { IUser } from "../../src/types/user.types";

describe("GetUsersRepository", () => {
  test("Should return an array of users", async () => {
    const users: IUser[] = [
      {
        id: 1,
        name: "John Doe",
        email: "john@exmaple.com",
        password: "john_password",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        password: "jane_password",
      },
    ];

    const findSpy = vi.spyOn(User, "find").mockResolvedValue(users);

    const getUsersRepository = new GetUsersRepository();
    const returnedUsers = await getUsersRepository.getUsers();

    expect(findSpy).toBeCalledTimes(1);
    expect(returnedUsers).toEqual(users);
  });
});
