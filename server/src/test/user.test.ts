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
      return dbConfig.drop();
    })
    .catch((err) => {
      console.error("Errordb ", err);
      throw "error";
    });
});

test("User create test", async () => {
  const mockData = {
    name: userName(),
    email: email(),
    address: cityName(),
    phone: number("010-####-####"),
  };
  const users = await userServiceInstance.create(mockData);
  expect(!!users).toBe(true);
});

test("findAll users test", async () => {
  const users: any = await userServiceInstance.getUsers();
  console.log(Boolean(users));
  console.log(users);
  expect(!!users).toBe(true);
});

afterAll(() => {
  dbConfig.close();
});
