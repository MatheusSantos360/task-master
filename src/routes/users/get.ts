import { NextFunction, Request, Response } from 'express';

export const middlewares = [
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Middleware.');
    next();
  },
];

export default (req: Request, res: Response) => {
  res.json({ message: 'Users list' });
};