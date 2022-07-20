import { NextFunction, Request, Response } from "express";

export interface ExpressMiddleware {
  (req: Request, res: Response, next: NextFunction): void;
}

/** Automatically forward errors to error handlers without manually implemeting try/catch in all controllers */
export const asyncHandler = (fn: ExpressMiddleware) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);
