import "./utils/dotenv";
import "./utils/moduleAlias";
import express from "express";
import { blue, purple } from "@/utils/chalk";
import { log } from "@/utils/debug";

const app = express();
app.use(express.json());

// set X-Response-Time
app.use(async (req, res, next) => {
  log(purple("start set"));
  res.locals.start = Date.now();
  log("end set");
  next();
});

app.use(async (req, res, next) => {
  log("start response");
  const ms = Date.now() - res.locals.start;
  res.set("X-Response-Time", `${ms}ms`);
  res.json({ message: "Hello world" });
});

app.listen(process.env.PORT, () => {
  log(blue(`[index] server is listening on port ${process.env.PORT}`));
});
