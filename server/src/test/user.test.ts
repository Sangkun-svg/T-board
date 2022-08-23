import "regenerator-runtime";
import { faker } from "@faker-js/faker";
import { userServiceInstance } from "../service";
import { dbConfig } from "../db/sequelize";

faker.setLocale("ko");
const {
  internet: { userName, email },
  address: { cityName },
  phone: { number },
} = faker;

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

test("Get all Users", async () => {
  const users: any = await userServiceInstance.getUsers();
  // users.map((el: any) => console.log(el.dataValues));
  expect(!!users).toBe(true);
});

test("Get One User By UserId", async () => {
  const users: any = await userServiceInstance.getUserById(1);
  console.log(users.dataValues);
  // users.map((el: any) => console.log(el.dataValues));
  expect(!!users).toBe(true);
});

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

test("User soft delete", async () => {
  const userId = 1;
  const result = await userServiceInstance.softDelete(userId);
  console.log(result);
  expect(Number(result)).toBe(1);
});

test("User hard delete", async () => {
  const userId = 50;
  const result = await userServiceInstance.hardDelete(userId);
  console.log(result);
  expect(Number(result)).toBe(1);
});

afterAll(() => {
  dbConfig.close();
});
