import { NextFunction, Request, Response } from "express";
import { log, bold, orange, underline, yellow } from "@/utils/debug";

export const requestLogger = function (req: Request, res: Response, next: NextFunction) {
  let method = bold(req.method);
  let reqUrl = underline(`${req.protocol}://${req.headers.host}${req.url}`);
  // * Uncomment below to view headers of incoming requests in the console
  // const headers = "\n\n" + yellow(JSON.stringify(req.headers, null, 2));
  // reqUrl += headers
  const hasBody = Object.keys(req.body).length > 0;
  if (hasBody) {
    const body = "\n\n" + orange(JSON.stringify(req.body, null, 2));
    reqUrl += body;
  }
  log(method, reqUrl);
  next();
};
