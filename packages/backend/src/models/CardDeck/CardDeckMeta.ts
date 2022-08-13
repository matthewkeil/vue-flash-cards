import { IsString, IsUUID } from "class-validator";
import { ID, Field, ObjectType } from "type-graphql";

@ObjectType()
export class CardDeckMeta {
  @Field(() => ID)
  @IsUUID()
  id!: string;

  @Field()
  @IsString()
  name!: string;
}