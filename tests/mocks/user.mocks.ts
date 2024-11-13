import { IUser } from "../../src/types/user.types";

export const mockUsers: IUser[] = [
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

export const mockUser: IUser = {
  id: 1,
  name: "John Doe",
  email: "john@exmaple.com",
  password: "john_password",
};
