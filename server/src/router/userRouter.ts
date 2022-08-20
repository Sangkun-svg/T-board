import * as express from "express";
import { NextFunction, Request, Response } from "express";

export const userRouter = express.Router();
const create = (req: Request, res: Response, next: NextFunction) => {};
const update = (req: Request, res: Response, next: NextFunction) => {};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {}; // TODO: delete can't be method name
const getUsers = (req: Request, res: Response, next: NextFunction) => {};
const getUserById = (req: Request, res: Response, next: NextFunction) => {};

// TODO: refactor for RESTful & graceful request method
userRouter.route("/users").get(getUsers);
userRouter.route("/users/create").get(create);
userRouter.route("/users/:id").get(getUserById).delete(deleteUser).put(update);
