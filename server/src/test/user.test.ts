import "regenerator-runtime";
import { faker } from "@faker-js/faker";
import { userServiceInstance } from "../service";
import { dbConfig } from "../db/sequelize";
import request from "supertest";
import express from "express";

// Reference: https://crmrelease.tistory.com/106

const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
faker.setLocale("ko");
const {
  internet: { userName, email },
  address: { cityName },
  phone: { number },
} = faker;

//TODO: 통합 테스트 O/C code
// beforeAll(async () => {
//   await dbConfig
//     .authenticate()
//     .then(() => {
//       console.info("connected to db");
//       // return dbConfig.drop();
//     })
//     .catch((err) => {
//       console.error("Errordb ", err);
//       throw "error";
//     });
// });
// ----------------------------------------
// afterAll(() => {
//   dbConfig.close();
// });

/* 
TODO: Unit test snerio
  - controller의 함수 반환 여부
  - 모델 호출 여부
  - 쿼리 전달 여부
  - 성공시 Return value
  - 성공시 Return code
  - 실패시 Return value
  - 실패시 Return code
  - 에러시 메세지 전달
*/

describe("User Create Test", () => {
  test("user create request", async () => {
    const test = await request(app)
      .get("/api/user")
      .expect(500)
      .catch((err) => console.error(err));
  });

  test("User create", async () => {
    const mockData = {
      name: userName(),
      email: email(),
      address: cityName(),
      phone: number("010-####-####"),
    };
    const users = await userServiceInstance.create(mockData);
    expect(!!users).toBe(true);
  });
});

describe("User searching Test", () => {
  test("Get all Users", async () => {
    const users: any = await userServiceInstance.getUsers();
    expect(!!users).toBe(true);
  });

  test("Get One User By UserId", async () => {
    const users: any = await userServiceInstance.getUserById(1);
    expect(!!users).toBe(true);
  });
});

describe("User Update Test", () => {
  test("User update", async () => {
    const mockData = {
      id: 1,
      name: userName(),
      email: email(),
      address: cityName(),
      phone: number("010-####-####"),
    };
    const result = await userServiceInstance.update(mockData);
    expect(Number(result)).toBe(1);
  });
});

describe("User Delete Test", () => {
  test("User delete", async () => {
    const user = await userServiceInstance.getUserById(1);
    if (user.isDeleted === false) {
      const result = await userServiceInstance.softDelete(1);
      expect(Number(result)).toBe(1);
    }
  });
});
