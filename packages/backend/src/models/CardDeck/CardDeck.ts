import { Type } from "class-transformer";
import { IsString, IsUUID, ValidateNested } from "class-validator";
import { ID, Field, ObjectType } from "type-graphql";

import { SpanishVerb } from "../SpanishVerb/SpanishVerb";

@ObjectType()
export class CardDeck {
  @Field(() => ID)
  @IsUUID()
  id!: string;

  @Field()
  @IsString()
  name!: string;

  @Field(() => [SpanishVerb])
  @Type(() => SpanishVerb)
  @ValidateNested({ each: true })
  cards?: SpanishVerb[];
}
