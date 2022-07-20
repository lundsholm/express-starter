import { Router } from "express";
import { asyncHandler } from "@/middleware/asyncHandler";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    res.status(200).json({ hello: "world" });
  })
);

export { router as indexRouter };
