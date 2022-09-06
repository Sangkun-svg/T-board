import * as dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === "produdction"
      ? ".production.env"
      : ".development.env"
  ),
});
