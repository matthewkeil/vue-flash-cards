import { InjectionKey } from "vue";
import {
  createStore,
  Store as BaseStore,
  useStore as USE_STORE,
  ActionContext as BaseActionContext,
  CommitOptions,
  DispatchOptions,
} from "vuex";

/**
 *
 *
 * State
 *
 *
 */
const state = {
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
};
export interface Card {
  frontText: string;
  backText: string;
}
type State = typeof state;

/**
 *
 *
 * Mutations
 *
 *
 */
const mutations = {
  UPDATE_CARD_INDEXES(state: State, nextCardIndex?: number) {
    state.activeCardIndex = state.nextCardIndex;
    state.nextCardIndex = nextCardIndex
      ? nextCardIndex
      : state.nextCardIndex + 1;
  },
  UPDATE_CARDS(state: State, cards: Card[]) {
    state.cards = cards;
  },
};

type Mutation = keyof typeof mutations;
type MutationPayload<K extends Mutation = Mutation> = Parameters<
  typeof mutations[K]
>[1];
type Commit = <K extends Mutation = Mutation>(
  key: K,
  payload?: MutationPayload,
  options?: CommitOptions
) => ReturnType<typeof mutations[K]>;

/**
 *
 *
 * Actions
 *
 *
 */
const actions = {
  EMPTY_DECK({ commit }: ActionContext) {
    commit("UPDATE_CARDS", []);
  },
};

type ActionContext = {
  commit(key: Mutation, payload: MutationPayload): void;
} & Omit<BaseActionContext<State, State>, "commit">;
type Action = keyof typeof actions;
type ActionPayload<K extends Action = Action> = Parameters<
  typeof actions[K]
>[1];
type Dispatch = <K extends Action = Action>(
  key: K,
  payload?: ActionPayload,
  options?: DispatchOptions
) => ReturnType<typeof actions[K]>;

/**
 *
 *
 * Getters
 *
 *
 */
const getters = {
  activeCard(state: State) {
    return state.cards[state.activeCardIndex];
  },
  nextCard(state: State) {
    return state.cards[state.nextCardIndex];
  },
  cardsRemaining(state: State) {
    const remaining = state.cards.length - state.nextCardIndex;
    console.log(state.cards.length, state.nextCardIndex, remaining);
    return remaining;
  },
};
type Getters = {
  [L in keyof typeof getters]: ReturnType<typeof getters[L]>;
};

/**
 *
 *
 * Store
 *
 *
 */
export type Store = Omit<
  BaseStore<State>,
  "commit" | "getters" | "dispatch"
> & {
  commit: Commit;
  dispatch: Dispatch;
  getters: Getters;
};
export const key: InjectionKey<Store> = Symbol();
export const store = createStore({
  state,
  mutations,
  getters,
  actions,
});
export function useStore(): Store {
  return USE_STORE(key);
}
