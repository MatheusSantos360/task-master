const status = (status: response) => {
  return { status: status, body: body };
};

const body = function <T>(this: { status: number }, body: T) {
  return { status: this.status, body: body };
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
