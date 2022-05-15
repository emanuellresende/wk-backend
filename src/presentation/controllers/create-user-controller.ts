import { Request, Response } from "express";
import { UserService } from "src/service/user-service";
import { Error, Success } from "../types/http";

export class CreateUserController {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  handle = async ({ body }: Request, res: Response) => {
    try {
      const user = await this.userService.createUser(body);

      return res.json(Success(user));
    } catch (error: any) {
      return res.json(Error(400, error.message));
    }
  };
}
