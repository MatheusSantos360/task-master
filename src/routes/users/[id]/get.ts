import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { GetUserController } from "../../../controllers/get-user";
import { processErrors } from "../../../functions/processErrors";
import { response } from "../../../functions/response";
import { GetUserRepository } from "../../../repositories/get-user";
import { Error } from "../../../types/http.types";

export const middlewares = [
  (req: Request, res: Response, next: NextFunction) => {
    const paramsSchema = z.object({ id: z.coerce.number() });

    const result = paramsSchema.safeParse(req.params);

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
  },
];

export default async (req: Request, res: Response) => {
  const getUserController = new GetUserController(new GetUserRepository());

  if (typeof req.params.id === "string") {
    const { status, body } = await getUserController.handle(req.params.id);
    res.status(status).send(body);
  }
};
