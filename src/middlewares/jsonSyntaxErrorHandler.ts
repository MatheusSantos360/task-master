import { NextFunction, Request, Response } from "express";
import { response } from "../functions/response";

interface CustomError extends SyntaxError {
  status?: number;
  body?: unknown;
}

export const jsonSyntaxErrorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    res.status(response.BAD_REQUEST).json({ status: response.BAD_REQUEST, error: { title: "Invalid JSON", message: err.message } });
  } else {
    next();
  }
};
