import express, { NextFunction, Request, Response } from "express";

export const userRouter = express.Router();

const test_findByPk = (req: Request, res: Response, next: NextFunction) => {
  console.log("req.params : ", req.params.id);
  if (Number(req.params.id) > 10) {
    return res.sendStatus(404);
  }
  return res.sendStatus(200);
};
userRouter.route("/:id").get(test_findByPk);
