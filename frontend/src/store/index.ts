import { createStore } from "vuex";

export interface Card {
  frontText: string;
  backText: string;
}

export default createStore({
  state: {
    cards: [
      {
        frontText: "1",
        backText: "back",
      },
      {
        frontText: "2",
        backText: "back",
      },
      {
        frontText: "3",
        backText: "back",
      },
      {
        frontText: "4",
        backText: "back",
      },
      {
        frontText: "5",
        backText: "back",
      },
      {
        frontText: "6",
        backText: "back",
      },
      {
        frontText: "7",
        backText: "back",
      },
      {
        frontText: "8",
        backText: "back",
      },
      {
        frontText: "9",
        backText: "back",
      },
      {
        frontText: "10",
        backText: "back",
      },
    ] as Card[],
    activeCardIndex: 0,
    nextCardIndex: 1,
  },
  mutations: {
    UPDATE_CARD_INDEXES(state, nextCardIndex?: number) {
      state.activeCardIndex = state.nextCardIndex;
      state.nextCardIndex = nextCardIndex
        ? nextCardIndex
        : state.nextCardIndex + 1;
    },
    UPDATE_CARDS(state, cards: Card[]) {
      state.cards = cards;
    },
  },
  getters: {
    activeCard(state) {
      return state.cards[state.activeCardIndex];
    },
    nextCard(state) {
      return state.cards[state.nextCardIndex];
    },
    cardsRemaining(state) {
      return state.cards.length - (state.nextCardIndex + 1);
    },
  },
  actions: {},
});
