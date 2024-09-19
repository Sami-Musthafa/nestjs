import { ObjectType, Field } from '@nestjs/graphql';
import { UserSetting } from './UserSetting';

@ObjectType()
export class UserDto {
  @Field()
  id: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  displayName: string;

  @Field({ nullable: true })
  settings?: UserSetting;
}
