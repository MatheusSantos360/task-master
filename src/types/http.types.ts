import { response } from "../functions/response";

export interface HttpResponse<Body> {
  status: response;
  body: {
    status: response;
    message?: string;
    data?: Body;
    errors?: Error[];
  };
}

export interface Error {
  title?: string;
  message: string;
  field?: string;
}
