import express from "express";

export const app = express();
const router = express.Router();

app.set("port", process.env.PORT || 8090);

app.get("/", (req, res) => {
  res.send("Hello, Express");
  console.log("Hello, Express");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
