import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { Field, ObjectType } from "type-graphql";

import { SpanishVerb } from "../SpanishVerb/SpanishVerb";
import { CardDeckDetails } from "./CardDeckDetails";

@ObjectType()
export class CardDeck extends CardDeckDetails {
  @Field(() => [SpanishVerb])
  @Type(() => SpanishVerb)
  @ValidateNested({ each: true })
  cards?: SpanishVerb[];
}
