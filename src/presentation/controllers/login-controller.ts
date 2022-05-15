import { Response, Request } from "express";
import { UserService } from "src/service/user-service";
import { Error, Success } from "../types/http";

export class LoginController {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  handle = async ({ body }: Request, res: Response) => {
    try {
      const user = await this.userService.login(body);

      return res.json(Success(user));
    } catch (error: any) {
      return res.json(Error(400, error.message));
    }
  };
}
