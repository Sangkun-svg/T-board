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
import { userService } from "../service";
import { IUserCreate } from "../interface/request";

@Route("member")
@SuccessResponse("200", "successfully")
export class UserController extends Controller {
  private static instance: UserController;
  private userService = userService;

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
  public async create(data: IUserCreate): Promise<any> {
    const result = await this.userService.create(data);
    return result;
  }
  @Put("/update")
  public async update(data: Object | any): Promise<any> {
    const result = await this.userService.update(data);
    return result;
  }
  @Patch("/delete")
  public async delete(id: number): Promise<any> {
    const result = await this.userService.delete(id);
    return result;
  }
}
export const userController = UserController.getInstance();
