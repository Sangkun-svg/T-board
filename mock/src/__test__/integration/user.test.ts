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
