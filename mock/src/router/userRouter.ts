import express, { NextFunction, Request, Response } from "express";
import { userController } from "../controller";

export const userRouter = express.Router();

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  userController
    .getUsers()
    .then((response) => res.send(response))
    .then((res) => res.sendStatus(200))
    .catch((err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
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
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
    });
};
const create = async (req: Request, res: Response, next: NextFunction) => {
  await userController
    .create(req.body)
    .then((response) => res.send({ response: response, statusCode: 201 }))
    .catch((err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
    });
};

// DIVIDER

const update = (req: Request, res: Response, next: NextFunction) => {
  userController
    .update(req.body)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
    });
};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  userController
    .delete(Number(req.params.id))
    .then((response) => res.send(response));
};

userRouter.route("/").get(getUsers);
userRouter.route("/create").post(create);
userRouter.route("/update").put(update);
userRouter
  .route("/:id") //
  .get(getUserById)
  .delete(deleteUser);
