//TODO: study : tsoa란? & tsoa를 활용한 restfut api
import {
  Body,
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Path,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";

export class UserController extends Controller {
  private static instance: UserController;

  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  @Get("/users")
  public async getUsers(): Promise<any> {
    return null;
  }
  @Get("/user/:id")
  public async getUserById(id: Number): Promise<any> {
    return null;
  }
  @Post("/create")
  public async create(): Promise<any> {
    return null;
  }
  @Put("/update")
  public async update(): Promise<any> {
    return null;
  }
  @Delete("/delete")
  public async deleteUser(id: Number): Promise<any> {
    return null;
  }
}
export const userControllerInstance = UserController.getInstance();
