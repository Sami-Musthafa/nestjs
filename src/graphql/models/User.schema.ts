import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
export class User {
  @Field()
  @Prop()
  id: string;

  @Field()
  @Prop()
  username: string;

  @Field()
  @Prop()
  displayName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
