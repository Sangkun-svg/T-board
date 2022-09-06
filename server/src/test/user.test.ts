import "regenerator-runtime";
import { faker } from "@faker-js/faker";
import { userService } from "../service";
import { userController } from "../controller";
import { dbConfig } from "../db/sequelize";
import request from "supertest";
import express from "express";

/* TODO:  set OCP
beforeAll(async () => {
  await dbConfig
    .authenticate()
    .then(() => {
      console.info("connected to db");
      // return dbConfig.drop();
    })
    .catch((err) => {
      console.error("Errordb ", err);
      throw "error";
    });
});
----------------------------------------
afterAll(() => {
  dbConfig.close();
});
*/

/* Reference: https://jestjs.io/docs/expect
toBeTruly & toBeFalsy
toBeNull
toEqual
etc..
*/

/* Reference: https://crmrelease.tistory.com/106 */
const text = `
data 를 직접적으로 관리(Create , Read , Update , Delete etc..) 하는 API의 경우, 모델을 대상으로 데이터에 접근하는 로직만을 작성하여 테스트하다
기본적인 유닛테스트 시나리오

- controller의 함수 반환 여부
- 모델 호출 여부
- 쿼리 전달 여부
- 성공시 Return value
- 성공시 Return code
- 실패시 Return value
- 실패시 Return code
- 에러시 메세지 전달

`;

const app = express();
faker.setLocale("ko");
const {
  internet: { userName, email },
  address: { cityName },
  phone: { number },
} = faker;
const typeof_Function = "function";

describe("Create Test", () => {
  //TODO: Controller의 함수 반환 여부
  test.only("User create Cotroller 함수 반환 여부 테스트", () => {
    expect(typeof userController.create).toBe(typeof_Function);
  });
  //TODO: 모델 호출 여부
});

// DIVIDER : 유저 생성 테스트를 develop 하기 위해 원본과 복사본에 대한 분리
// DIVIDER
// DIVIDER

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
    const users = await userService.create(mockData);
    expect(!!users).toBe(true);
  });
});

describe("User searching Test", () => {
  test("Get all Users", async () => {
    const users: any = await userService.getUsers();
    expect(!!users).toBe(true);
  });

  test("Get One User By UserId", async () => {
    const users: any = await userService.getUserById(1);
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
    const result = await userService.update(mockData);
    expect(Number(result)).toBe(1);
  });
});

describe("User Delete Test", () => {
  test("User delete", async () => {
    const user = await userService.getUserById(1);
    if (user.isDeleted === false) {
      const result = await userService.softDelete(1);
      expect(Number(result)).toBe(1);
    }
  });
});
