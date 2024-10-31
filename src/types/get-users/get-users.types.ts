import HttpResponse from '../http-response.type';
import { User } from './../user.types';
export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>
}