// [Seqeulize Transaction Reference]
// https://runebook.dev/ko/docs/sequelize/manual/transactions
// https://www.ultimateakash.com/blog-details/IiwzPGAKYAo=/How-to-implement-Transactions-in-Sequelize-&-Node.Js-(Express)
import { dbConfig } from "../db/sequelize";
import { User } from "../model";
import { IUserCreate, IUserUpdate } from "../interface/request";

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
      await t.rollback();
      throw new Error(); //TODO: need to error handling
    }
  }

  public async update(obj: IUserUpdate) {
    const t = await dbConfig.transaction();
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

  public async softDelete(id: number) {
    const t = await dbConfig.transaction();
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

  public async hardDelete(id: number) {
    const t = await dbConfig.transaction();
    try {
      const result = await User.destroy({
        where: {
          id: id,
        },
      });
      t.commit();
      return result;
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

  public async getUserById(id: number) {
    try {
      const user = await User.findByPk(id);
      return user;
    } catch (error) {
      throw new Error();
    }
  }
}
export const userServiceInstance = UserService.getInstance();
