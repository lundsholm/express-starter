import "./utils/dotenv";
import "./utils/module-alias";
import path from "node:path";
import fs from "node:fs";
import express from "express";
import compression from "compression";
import morgan from "morgan";
import { createStream } from "rotating-file-stream";
import { blue } from "@/utils/chalk";
import { log } from "@/utils/debug";
import { apiErrorHandler, catchAllHandler } from "@/middleware/errorHandlers";
import { indexRouter } from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();
const logDir = path.join(path.resolve(), "logs");
const apiPrefix = "/api/v1";

fs.existsSync(logDir) || fs.mkdirSync(logDir);

const accessLogStream = createStream("access.log", {
  interval: "1d",
  path: logDir,
});

app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json());
app.use(compression());
app.use(express.static(path.join(path.resolve(), "public")));

// ROUTE HANDLERS
app.use(apiPrefix, indexRouter);

// ERROR HANDLERS
app.use(apiErrorHandler);
app.use(catchAllHandler);

app.listen(PORT, () => {
  log(blue(`[index] server is listening on port ${PORT}`));
});
