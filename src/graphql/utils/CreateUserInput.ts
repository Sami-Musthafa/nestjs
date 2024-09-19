import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  displayName: string;
}
