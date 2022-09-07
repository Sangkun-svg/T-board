// [Seqeulize Transaction Reference]
// https://runebook.dev/ko/docs/sequelize/manual/transactions
// https://www.ultimateakash.com/blog-details/IiwzPGAKYAo=/How-to-implement-Transactions-in-Sequelize-&-Node.Js-(Express)
import { Sequelize } from "../db/sequelize";
import { User } from "../model";
import { IUserCreate, IUserUpdate } from "../interface/request";
import { IUser } from "../interface/response";
import _ from "lodash";

class UserService {
  private static instance: UserService;
  private contructor() {}
  public static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public async data_validate(data: any) {
    // TODO: Renaming
    // TODO: Create parameter interface
    Object.values(data).map((el: any) => {
      if (_.isUndefined(el) || _.isNull(el)) {
        throw new Error("Properies should be defined");
      }
    });
    return;
  }

  public async create(obj: IUserCreate | any) {
    const t = await Sequelize.transaction();
    try {
      this.data_validate(obj);
      const user = await User.create(obj);
      t.commit();
      return user;
    } catch (error) {
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }

  public async update(obj: IUserUpdate) {
    const t = await Sequelize.transaction();
    try {
      const result = await User.update(
        {
          name: obj.name,
          phone: obj.phone,
          email: obj.email,
          address: obj.address,
        },
        {
          where: {
            id: obj.id,
          },
        }
      );
      t.commit();
      return result;
    } catch (error) {
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }

  public async delete(id: number) {
    const t = await Sequelize.transaction();
    try {
      const result = await User.update(
        { isDeleted: true },
        {
          where: {
            id: id,
          },
        }
      );
      t.commit();
      return result;
    } catch (error) {
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }

  public async getUsers(): Promise<IUser[]> {
    try {
      const users: IUser[] | any = await User.findAll();
      return users;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  public async getUserById(id: number): Promise<IUser> {
    try {
      const user: IUser | any = await User.findByPk(id);
      if (_.isEmpty(user)) {
        throw new Error("User not exist");
      }
      return user;
    } catch (error) {
      throw new Error();
    }
  }
}
export const userService = UserService.getInstance();
