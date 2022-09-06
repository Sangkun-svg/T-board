import { app } from "../../app";
import request from "supertest";
import { MOCK_USER_ID_1 } from "../../constant/forTest";

describe("[GET]: /api/user/ ", () => {
  describe("given the users data does exist", () => {
    it("should return a SUCCESS 200 status and User", async () => {
      const res = await request(app).get("/api/user/");
      expect(res.statusCode).toBe(200);
    });
  });
});
describe("[GET]: /api/user/:id", () => {
  describe("given the specify user does exist", () => {
    it.only("should return a SUCCESS 200 status and User", async () => {
      const userId = 1;
      const { statusCode, body } = await request(app).get(
        `/api/user/${userId}`
      );
      expect(statusCode).toBe(200);
      expect(body).toStrictEqual(MOCK_USER_ID_1);
      /*
        TODO: 흠..뭔가 더 좋은 방법이 있을거같은데..고쳐야될듯..?
          FIXME: 걸리는점 1. matcher 를 너무 무식하게 쓴거같다.
          FIXME: 걸리는점 2. constant 를 너무 무식하게 산언한거같다.
      */
    });
  });

  describe("given the user does not exist", () => {
    describe("userId is not exist", () => {
      it("should return a ERROR: 500 status", async () => {
        const overUserId = 10000;
        const { statusCode } = await request(app).get(
          `/api/user/${overUserId}`
        );
        expect(statusCode).toBe(500);
      });
    });

    describe("typeof userId is not number", () => {
      it("should return a ERROR: 404 status", async () => {
        const stringUserId = "user-123";
        const { statusCode } = await request(app).get(
          `/api/user/${stringUserId}`
        );
        expect(statusCode).toBe(404);
      });
    });
  });
});
