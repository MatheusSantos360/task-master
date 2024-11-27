import { NextFunction, Request, Response } from "express";
import { generateID } from "../functions/generateID";
import { processErrors } from "../functions/processErrors";
import { response } from "../functions/response";
import { Error } from "../types/http.types";
import { tasksSchema } from "../types/task.types";

export const validateTaskData = (req: Request, res: Response, next: NextFunction) => {
  req.body.id = generateID();

  const result = tasksSchema.safeParse(req.body);

  if (!result.success) {
    const errors: Error[] = processErrors(result.error).map((err) => ({
      title: "Validation Error",
      message: err.message,
      field: err.path.join("."),
    }));

    res.status(400).json({
      status: response.FORBIDDEN,
      message: "There were issues with the information you provided.",
      errors,
    });
  } else {
    next();
  }
};
