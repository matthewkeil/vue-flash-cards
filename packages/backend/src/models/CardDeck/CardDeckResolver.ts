import { Arg, Query, Resolver } from "type-graphql";

import { CardDeck } from "./CardDeck";

let allDeck: undefined | CardDeck[];
function getAllDecks(): CardDeck[] {
  return require("../../../data/cardDecks").allDecks;
}

@Resolver(() => CardDeck)
export class CardDeckResolver {
  @Query(() => [CardDeck])
  listDecks() {}

  @Query(() => CardDeck)
  getDeck(@Arg("deckId") deckId: string) {}
}
