import { describe, expect, test, vi } from "vitest";
import { GetUsersController } from "../../src/controllers/get-users";
import { response } from "../../src/functions/response";
import { GetUsersRepository } from "../../src/repositories/get-users";
import { mockUsers } from "../mocks/user.mocks";

describe("GetUsersController", () => {
  test("Should return a response with an array of users and status OK", async () => {
    const getUsersSpy = vi.spyOn(GetUsersRepository.prototype, "getUsers").mockResolvedValue(mockUsers);
    const getUsersController = new GetUsersController(new GetUsersRepository());
    const { status, body } = await getUsersController.handle();

    expect(getUsersSpy).toHaveBeenCalledOnce();
    // @ts-expect-error the property data exists
    expect(body.body.data).toBe(mockUsers);
    expect(status).toBe(response.CREATED);

    getUsersSpy.mockRestore();
  });

  test("Should return a response with an error message and status INTERNAL_SERVER_ERROR", async () => {
    const getUsersSpy = vi.spyOn(GetUsersRepository.prototype, "getUsers").mockRejectedValue(mockUsers);
    const getUsersController = new GetUsersController(new GetUsersRepository());
    const { status, body } = await getUsersController.handle();

    expect(getUsersSpy).toHaveBeenCalledOnce();
    expect(body.body).toHaveProperty("message");
    expect(body.body).toHaveProperty("errors");

    expect(status).toBe(response.INTERNAL_SERVER_ERROR);
  });
});
