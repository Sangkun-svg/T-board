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

  public validation(data: any): Boolean {
    // TODO: Renaming
    // TODO: Create parameter interface
    let isValidate = true; // .. 흠 boolean 초기값에 대해 고민해봐야할듯
    if (!!_.isEmpty(data)) {
      isValidate = false;
    }
    Object.values(data).map((el: any) => {
      if (_.isUndefined(el) || _.isNull(el)) {
        isValidate = false;
      }
    });
    return isValidate;
  }

  public async create(obj: IUserCreate) {
    const t = await Sequelize.transaction();
    try {
      const isValidate = await this.validation(obj);
      if (!isValidate) {
        throw new Error("Data must be pass validation");
      }
      const user = await User.create(obj as any);
      t.commit();
      return user;
    } catch (error) {
      console.log(error);
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }

  public async update(obj: IUserUpdate) {
    const t = await Sequelize.transaction();
    try {
      const isValidate = await this.validation(obj);
      if (!isValidate) {
        throw new Error("Data must be pass validation");
      }
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
      if ((result as unknown as number) === 0) {
        throw new Error("Update fail");
      }
      t.commit();
      return result;
    } catch (error) {
      console.log(error);
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }

  public async delete(id: number) {
    const t = await Sequelize.transaction();
    try {
      if (_.isNaN(id) || typeof id !== "number") {
        throw new Error("can not use argument");
      }
      const target = await User.findByPk(id);
      if (this.validation(target) === false) {
        throw new Error("User is not define");
      }
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
      console.error(error);
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
