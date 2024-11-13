import { describe, expect, test, vi } from "vitest";
import User from "../../src/models/user";
import { GetUsersRepository } from "../../src/repositories/get-users";
import { mockUsers } from "../mocks/user.mocks";

describe("GetUsersRepository", () => {
  test("Should return an array of users", async () => {
    const users = mockUsers;

    const findSpy = vi.spyOn(User, "find").mockResolvedValue(users);

    const getUsersRepository = new GetUsersRepository();
    const returnedUsers = await getUsersRepository.getUsers();

    expect(findSpy).toBeCalledTimes(1);
    expect(returnedUsers).toEqual(users);
  });
});
