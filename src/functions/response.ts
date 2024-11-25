import { serverError } from "../types/serverError";

const status = (status: response) => {
  return { status: status, body, internalServerError };
};

const body = function <T>(this: { status: response }, body: T) {
  return { status: this.status, body: { status: this.status, body } };
};

export const internalServerError = function (this: { status: response; body: typeof body }) {
  return { status: this.status, body: { status: this.status, body: { message: serverError.message, errors: [serverError] } } };
};

export { status };

export enum response {
  // Success
  OK = 200,
  CREATED = 201,

  // Client Errors
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,

  // Server Errors
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}
