import { UserService } from "src/service/user-service";
import { Error, Success } from "../types/http";
import { Request, Response } from "express";

export class UpdateUserController {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  handle = async ({ body }: Request, res: Response) => {
    try {
      const user = await this.userService.updateUser(body);

      return res.json(Success(user));
    } catch (error: any) {
      return res.json(Error(400, error.message));
    }
  };
}
