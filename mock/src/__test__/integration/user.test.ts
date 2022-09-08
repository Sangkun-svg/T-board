import { app } from "../../app";
import request from "supertest";
import { MOCK_USER_ID_1, MOCK_USER_CREATE } from "../../constant/forTest";
import _, { over } from "lodash";

// TODO: Http StateCode 를 준수하면서 테스트하라
// 즉 , Http StateCode 를 준수하여 테스트하기 좋은 코드를 짜라
// Reference: https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C
// Reference: https://stackoverflow.com/questions/42176642/in-jest-how-can-i-make-a-test-fail

afterAll(async () => {
  // avoid jest open handle error
  // Jest has detected the following 1 open handle potentially keeping Jest from exiting error를 해결하기 위해 작성
  // 더 공부가 필요
  await new Promise((resolve) => setTimeout(() => resolve(""), 1000));
});

describe("[GET]: /api/user/ ", () => {
  describe("given the users data does exist", () => {
    it("should return a SUCCESS 200 status and User", async () => {
      const res = await request(app).get("/api/user/");
      expect(res.statusCode).toBe(200);
    });
  });
});

describe("[GET]: /api/user/:id", () => {
  describe("given the identification id", () => {
    // test isolation이 떨어짐 -> user update test 이후에 영향을 받는다.
    it.skip("should return a SUCCESS 200 status and User", async () => {
      const userId = 1;
      const { statusCode, body } = await request(app).get(
        `/api/user/${userId}`
      );
      expect(statusCode).toBe(200);
      // TODO: need fix ->
      expect(body.name).toBe(MOCK_USER_ID_1.name + "isUpdate");
      expect(body.email).toBe(MOCK_USER_ID_1.email + "isUpdate");
      expect(body.phone).toBe(MOCK_USER_ID_1.phone + "isUpdate");
      expect(body.address).toBe(MOCK_USER_ID_1.address + "isUpdate");

      /*
        TODO: 흠..뭔가 더 좋은 방법이 있을거같은데..고쳐야될듯..?
          FIXME: 걸리는점 1. matcher & constant declared
            -> toStrictEqual(expect.objectContaining({..obj})) 
              -> 적용중.
      */
    });
  });

  describe("given the identification id that does not exist", () => {
    describe("Id is not exist", () => {
      it("should return a ERROR: 500 status", async () => {
        const overUserId = 10000;
        const { statusCode } = await request(app).get(
          `/api/user/${overUserId}`
        );
        expect(statusCode).toBe(500);
      });
    });

    describe("id type is not number", () => {
      it("should return a ERROR: 404 status", async () => {
        const stringUserId = "user-123";
        const { statusCode } = await request(app).get(
          `/api/user/${stringUserId}`
        );
        expect(statusCode).toBe(404);
        // TODO: 404 middleware 로 처리하기 -> router 에서 분기처리 ㄴㄴ
      });
    });
  });
});
