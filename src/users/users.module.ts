import { Module } from '@nestjs/common';
import { UserResolver } from './UserResolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './UserService';
import { UserSchema } from 'src/graphql/models/User.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UserSchema, name: 'User' }])],
  providers: [UserService, UserResolver],
})
export class UsersModule {}
