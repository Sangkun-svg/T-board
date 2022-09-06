import { app } from "../app";
import request from "supertest";

describe("server test", () => {
  it("test", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});

describe("user route", () => {
  it.only(":/id should return SUCCESS 200 status", async () => {
    const userId = 1;
    const res = await request(app).get(`/api/user/${userId}`);
    expect(res.statusCode).toBe(200);
  });
  it.only(":/id should return ERROR: 404 status", async () => {
    const userId = 100;
    const res = await request(app).get(`/api/user/${userId}`);
    expect(res.statusCode).toBe(404);
  });
});
