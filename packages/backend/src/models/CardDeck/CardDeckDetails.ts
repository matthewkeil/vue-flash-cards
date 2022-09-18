import { IsString, IsUUID } from "class-validator";
import { ID, Field, ObjectType } from "type-graphql";

@ObjectType()
export class CardDeckDetails {
  @Field(() => ID)
  @IsUUID()
  id!: string;

  @Field()
  @IsString()
  name!: string;
}