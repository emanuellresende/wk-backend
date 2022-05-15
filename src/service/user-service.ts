import userModel from "src/infra/database/repository/user";
import { v4 as uuid } from "uuid";

export class UserService {
  async createUser(params: any): Promise<any> {
    const accessToken = uuid();
    const createdUser = await userModel.create({ ...params, accessToken });

    return {
      id: createdUser.id,
      accessToken,
    };
  }

  async login(params: any): Promise<any> {
    const newAccessToken = uuid();

    const user = await userModel.findOneAndUpdate(
      {
        email: params.email,
        accessToken: params.accessToken,
      },
      {
        accessToken: newAccessToken,
      }
    );

    if (!user) {
      throw new Error("INVALID_EMAIL_OR_TOKEN");
    }

    return {
      id: user.id,
      newAccessToken,
    };
  }

  async updateUser(params: any): Promise<any> {
    const user = await userModel.findOneAndUpdate(
      {
        email: params.email,
      },
      {
        name: params.name,
      }
    );

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    user.name = params.name;

    return user;
  }

  async deleteUser(params: any): Promise<any> {
    const user = await userModel.findOneAndDelete({

      email: params.email,
    });

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }

    return user;
  }
}