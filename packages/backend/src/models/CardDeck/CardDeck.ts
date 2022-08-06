import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { Field, ObjectType } from "type-graphql";

import { SpanishVerb } from "../SpanishVerb/SpanishVerb";
import { TranslationPair } from "../SpanishVerb/TranslationPair";

@ObjectType()
export class CardDeck {
  @Field()
  @IsString()
  name!: string;

  @Field(() => [SpanishVerb])
  @Type(() => SpanishVerb)
  @ValidateNested({ each: true })
  cards?: SpanishVerb[];
}
