import { Injectable } from '@nestjs/common';
import { User } from '../graphql/models/User.schema';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userService) {}
  async getUsers() {
    return await this.userService.find();
  }

  async getUserById(id: string) {
    return await this.userService.findOne({ id });
  }

  async createUser(createUserData: CreateUserInput) {
    // const { username, displayName, id } = createUserData;
    const newUser = new this.userService(createUserData);
    return await newUser.save();
  }

  async deleteUserById(id: string) {
    return await this.userService.deleteOne(id);
  }
}
