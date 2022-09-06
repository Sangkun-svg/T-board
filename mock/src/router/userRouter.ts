import express, { NextFunction, Request, Response } from "express";
import { userController } from "../controller";

export const userRouter = express.Router();

const create = (req: Request, res: Response, next: NextFunction) => {
  userController
    .create(req.body)
    .then((response) => res.send(response))
    .then((res) => res.sendStatus(200))
    .catch((err) => {
      if (err) res.sendStatus(500);
    });
};
const update = (req: Request, res: Response, next: NextFunction) => {
  userController.update(req.body).then((response) => res.send(response));
};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  userController
    .delete(Number(req.params.id))
    .then((response) => res.send(response));
};

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  userController
    .getUsers()
    .then((response) => res.send(response))
    .then((res) => res.sendStatus(200))
    .catch((err) => {
      !err ?? res.sendStatus(500);
    });
};
const getUserById = (req: Request, res: Response, next: NextFunction) => {
  if (!Number(req.params.id)) {
    return res.sendStatus(404);
  }
  userController
    .getUserById(Number(req.params.id))
    .then((response) => res.send(response))
    .catch((err) => {
      console.log(err);
      if (err) res.sendStatus(500);
      return err;
    });
};

userRouter.route("/").get(getUsers);
userRouter.route("/create").get(create);
userRouter.route("/update").put(update);
userRouter
  .route("/:id") //
  .get(getUserById)
  .delete(deleteUser);
