import { Arg, Query, Resolver } from "type-graphql";

import { CardDeck } from "./CardDeck";
import { CardDeckMeta } from "./CardDeckMeta";
import { allDecks } from "../../data/cardDecks";

@Resolver()
export class CardDeckResolver {
  @Query(() => [CardDeckMeta])
  listDecks() {
    return allDecks.map(({ id, name }) => ({ id, name }));
  }

  @Query(() => CardDeck)
  getDeck(@Arg("deckId") deckId: string) {
    const deck = allDecks.find(({ id }) => id === deckId);
    if (!deck) {
      throw new Error(`unknown deckId ${deckId}`);
    }
    return deck;
  }
}
