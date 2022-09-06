import express from "express";
import morgan from "morgan";
import { userRouter } from "./router/userRouter";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.sendStatus(200);
});
app.use("/api/user", userRouter);
app.use((req, res, next) => {
  return res.sendStatus(404);
});
