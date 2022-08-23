//TODO: study : tsoa란? & tsoa를 활용한 restfut api
import {
  Body,
  Path,
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Route,
  SuccessResponse,
  Patch,
} from "tsoa";
import { userServiceInstance } from "../service";

@Route("member")
@SuccessResponse("200", "successfully")
export class UserController extends Controller {
  private static instance: UserController;
  private userService = userServiceInstance;

  public static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  @Get("/")
  public async getUsers(): Promise<any> {
    const result = await this.userService.getUsers();
    return result;
  }
  @Get("/{id}")
  public async getUserById(id: number): Promise<any> {
    const result = await this.userService.getUserById(id);
    return result;
  }
  @Post("/create")
  public async create(data: Object | any): Promise<any> {
    const result = await this.userService.create(data);
    return result;
  }
  @Put("/update")
  public async update(data: Object | any): Promise<any> {
    const result = await this.userService.update(data);
    return result;
  }
  @Patch("/softDelete")
  public async softDelete(id: number): Promise<any> {
    const result = await this.userService.softDelete(id);
    return result;
  }

  @Delete("/delete")
  public async deleteUser(id: number): Promise<any> {
    const result = await this.userService.hardDelete(id);
    return result;
  }
}
export const userController = UserController.getInstance();
