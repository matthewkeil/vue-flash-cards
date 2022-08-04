import { Arg, Query, Resolver } from "type-graphql";

import {} from "../../data"
import { SpanishVerb } from "../models";



@Resolver()
export class CardDeckResolver {
  @Query(() => SpanishVerb)
  listDecks() {}

  @Query(() => SpanishVerb)
  getDeck(@Arg("deckId") deckId: string) {}
}
