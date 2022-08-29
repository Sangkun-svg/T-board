import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { userController } from "../controller";

export const userRouter = express.Router();

const create = (req: Request, res: Response, next: NextFunction) => {
  userController
    .create(req.body)
    .then((responese) => res.send(responese))
    .catch((err) =>
      res.status(err.status || 500).send({
        statusCode: err.status || 500,
        error_message: err.message,
      })
    );
};
const update = (req: Request, res: Response, next: NextFunction) => {
  userController
    .update(req.body)
    .then((responese) => res.send(responese))
    .catch((err) =>
      res.status(err.status || 500).send({
        statusCode: err.status || 500,
        error_message: err.message,
      })
    );
};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  userController
    .softDelete(Number(req.params.id))
    .then((responese) => res.send(responese))
    .catch((err) =>
      res.status(err.status || 500).send({
        statusCode: err.status || 500,
        error_message: err.message,
      })
    );
};

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  userController
    .getUsers()
    .then((responese) => res.send(responese))
    .catch((err) =>
      res.status(err.status || 500).send({
        statusCode: err.status || 500,
        error_message: err.message,
      })
    );
};
const getUserById = (req: Request, res: Response, next: NextFunction) => {
  userController
    .getUserById(Number(req.params.id))
    .then((responese) => res.send(responese))
    .catch((err) =>
      res.status(err.status || 500).send({
        statusCode: err.status || 500,
        error_message: err.message,
      })
    );
};

// TODO: refactor for RESTful & graceful request method
userRouter.route("/").get(getUsers);
userRouter.route("/create").get(create);
userRouter.route("/update").put(update);
userRouter.route("/:id").get(getUserById).delete(deleteUser);
