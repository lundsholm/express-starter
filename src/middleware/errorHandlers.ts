import { NextFunction, Request, Response } from "express";
import { ApiError } from "@/utils/api-error";
import { log, bold, green, red } from "@/utils/debug";

export const apiErrorHandler = <T extends Error>(err: T, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ error: err.message });
  }
  log(green("passing through apiErrorHandler"));
  next(err);
};

export const catchAllHandler = <T extends Error>(err: T, req: Request, res: Response, next: NextFunction) => {
  log(red("catchAllHandler reached:\n", bold(err)));
  return res.status(500).json({ error: err.message });
};
