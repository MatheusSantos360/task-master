import { describe, expect, test, vi } from "vitest";
import { GetUsersRepository } from "../../src/repositories/get-users";
import { IUser } from "../../src/types/user.types";
import User from "../../src/models/user";

vi.mock("../../src/models/user", async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = await importOriginal() as { default: { find: any } };
  return {
    default: {
      ...actual.default,
      find: vi.fn().mockResolvedValue([
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          password: "password123",
          confirmPassword: "password123",
        },
        {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
          password: "password456",
          confirmPassword: "password456",
        },
      ]),
    },
  };
});

describe("GetUsersRepository", () => {
  test("Should return an array of users", async () => {
    const getUsersRepository = new GetUsersRepository();

    const users: IUser[] = await getUsersRepository.getUsers();

    expect(users).toEqual([
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        confirmPassword: "password123",
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password456",
        confirmPassword: "password456",
      },
    ]);
    expect(User.find).toHaveBeenCalledTimes(1);
  });
});
