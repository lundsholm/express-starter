import "./utils/moduleAlias";
import express from "express";
import { purple } from "@/utils/chalk";
import { log } from "./utils/debug";
import dotenv from "dotenv";
dotenv.config();
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

app.listen(3000);
