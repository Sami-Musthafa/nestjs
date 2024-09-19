import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class User {
  @Field()
  id: string;

  @Field()
  @Prop({ unique: true })
  username: string;

  @Field()
  @Prop()
  displayName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
