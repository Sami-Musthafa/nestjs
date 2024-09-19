import { Resolver, Query, Args, Mutation, ResolveField } from '@nestjs/graphql';
import { CreateUserInput } from '../graphql/utils/CreateUserInput';
import { UserService } from './UserService';
import { User } from 'src/graphql/models/User.schema';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => User, { nullable: true })
  async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  async getUsers(): Promise<User[] | null> {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }

  @ResolveField((returns) => UserSetting, { name: 'settings', nullable: true })
  getUserSettings(@Parent() user: User) {
    return this.userSettingService.getUserSettingById(user.id);
  }

  @Mutation(() => User)
  async deleteUserById(@Args('id') id: string) {
    return await this.userService.deleteUserById(id);
  }
}
