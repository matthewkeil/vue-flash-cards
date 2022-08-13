import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { Field, ObjectType } from "type-graphql";

import { SpanishVerb } from "../SpanishVerb/SpanishVerb";
import { CardDeckMeta } from "./CardDeckMeta";

@ObjectType()
export class CardDeck extends CardDeckMeta {
  @Field(() => [SpanishVerb])
  @Type(() => SpanishVerb)
  @ValidateNested({ each: true })
  cards?: SpanishVerb[];
}
