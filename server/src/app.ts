import express from "express";
import morgan from "morgan";
// import * as morgan from 'morgan';
import { userRouter } from "./router";
import { dbConfig } from "./db/sequelize";
import cors from "cors";

// app.ts는 node module을 로딩하고
// 초기 initialize해야 하는 변수나 Object를 선언하고 Router에 유입이 이루어 지는 그 유입점의 역할

const options: cors.CorsOptions = {
  allowedHeaders: [
    "*",
    "Origin",
    "X-Requested-With",
    "X-Custom-Header",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "authorization",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
  preflightContinue: false,
};

// https://zinirun.github.io/2020/10/16/node-better-express-app/ : 좀 더 바람직하게 Express 서버 여는 법
/*
    이 Express app을 Class로 관리하면 또 다른 장점이 있는데,서버 앱을 하나의 인스턴스로 관리할 수 있다.
    비동기식 실행과 스레딩의 장점으로 노드를 CDN 서버 등으로 많이 활용하는데 
    접속된 인스턴스가 몇 개인지 관리하거나 접속 인스턴스의 갯수 제한을 두는 등의 작업을 편하게 할 수 있다.
*/
export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initProcess();
  }

  private async initProcess() {
    try {
      await this.connectdb();
      await this.setMiddleWare();
    } catch (err) {
      console.error(err);
    }
  }
  private connectdb = () => {
    dbConfig
      .authenticate()
      .then(() => console.info("connected to db"))
      .catch((err) => {
        console.error("Errordb ", err);
        throw "error";
      });
  };

  private async setMiddleWare() {
    this.app.all("/", function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      );
      next();
    });
    this.app.use(cors(options));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use("/api/user", userRouter);
    this.app.use(morgan("dev"));
  }
}
