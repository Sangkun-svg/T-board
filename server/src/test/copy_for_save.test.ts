// import "regenerator-runtime";
// import { App } from "../app";
// import express from "express";
// import { dbConfig } from "../db/sequelize";
// import { User } from "../model";
// import { userService } from "../service";
// import { userController } from "../controller";
// import supertest from "supertest";
// import request from "supertest";

// // const app = new App();
// const app = App;
// const userPalyload = {
//   name: "Sangkun",
//   city: "Seoul , korea",
//   email: "Sangkun@github.com",
//   phone: "010-0000-0000",
// };

// beforeAll(async () => {
//   await dbConfig
//     .authenticate()
//     .then(() => console.info("connected to db"))
//     .catch((err) => {
//       console.error("Errordb ", err);
//       throw "error";
//     });
// });

// afterAll(async () => {
//   await dbConfig.close();
//   await app.close();
// });
// describe("User", () => {
//   describe("get user route", () => {
//     describe("given the user does not exist", () => {
//       it("should return a ERROR: 404 status", async () => {
//         const userId = "user-123";
//         const result = await request(app).get(`/api/user/${userId}`);
//         expect(result.statusCode).toBe(404);
//       });
//     });
//     describe("given the user does exist", () => {
//       it("should return a SUCCESS 200 status and User", async () => {
//         const userId = 1;
//         const result = await request(app).get(`/api/user/${userId}`);
//         console.log(result);
//         expect(result.statusCode).toBe(404);
//       });
//     });
//   });
// });

// describe("Test example", () => {
//   test.only("GET /", async () => {
//     await request(app)
//       .get("/")
//       .set("Accept", "application/json")
//       // .expect("Content-Type", /json/)
//       .expect(200)
//       .expect((res) => {
//         res.body.data.length = 1;
//         res.body.data[0].email = "test@example.com";
//       })
//       .end((err, res) => {
//         err ? console.error(err) : console.log(res);
//       });
//     // Even more logic goes here
//   });
//   // More things come here
// });
