// [Seqeulize Transaction Reference]
// https://runebook.dev/ko/docs/sequelize/manual/transactions
// https://www.ultimateakash.com/blog-details/IiwzPGAKYAo=/How-to-implement-Transactions-in-Sequelize-&-Node.Js-(Express)
import { dbConfig } from "../db/sequelize";
import { User } from "../model";
import { faker } from "@faker-js/faker";

faker.setLocale("ko");
const {
  internet: { userName, email },
  address: { cityName },
  phone: { number },
} = faker;

interface IUserCreate {
  name: string;
  email: string;
  address: string;
  phone: string;
}
interface IUserUpdate {}
interface IUserDelete {}

class UserService {
  private static instance: UserService;
  private contructor() {}
  public static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public async create(obj: IUserCreate | any) {
    const t = await dbConfig.transaction();
    try {
      const user = await User.create(obj);
      t.commit();
      return user;
    } catch (error) {
      //   await t.rollback();
      console.error("Error : ", error);
      //   throw new Error(); //TODO: need to error handling
    }
  }
  public async update(obj: IUserUpdate) {
    const t = await dbConfig.transaction();
    try {
      t.commit();
    } catch (error) {
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }
  public async delete(obj: IUserDelete) {
    const t = await dbConfig.transaction();
    try {
      t.commit();
    } catch (error) {
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }
  public async getUsers() {
    try {
      const user = await User.findAll();
      return user;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
  public async getUserById() {
    try {
    } catch (error) {
      throw new Error();
    }
  }
}
export const userServiceInstance = UserService.getInstance();
