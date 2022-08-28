// FIXME: dotenv 설정
// TODO: Refs
// https://github.com/marciovrl/supertest
// https://github.com/visionmedia/supertest

import { baseUrl } from "../constants";
import request from "supertest";
import { App } from "../app";
import express from "express";

const url = `${baseUrl}`;
const app = express();

// FIXME: get url parameter need base URL? check plz
describe("request test", () => {
  request(app)
    .get(`${url}/api/user/`)
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.error(err);
        throw new Error();
      }
    });
});
