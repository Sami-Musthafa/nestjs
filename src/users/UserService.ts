import { Injectable } from '@nestjs/common';
import { User } from '../graphql/models/User.schema';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'typeorm/driver/mongodb/typings';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userService: Model<User>) {}
  async getUsers() {
    return await this.userService.find();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userService.findOne({ id });
  }

  async createUser(createUserData: CreateUserInput): Promise<User | null> {
    // const { username, displayName, id } = createUserData;
    const newUser = new this.userService(createUserData);
    return await newUser.save();
  }

  async deleteUserById(id: string): Promise<DeleteResult | null> {
    return await this.userService.deleteOne({ id });
  }
}
