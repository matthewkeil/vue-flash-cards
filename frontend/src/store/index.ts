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
export interface Card {
  frontText: string;
  backText: string;
}

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

type Commit = (
  key: Mutation,
  payload?: MutationPayload,
  options?: CommitOptions
) => void;

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

type Dispatch = (
  key: Action,
  payload?: ActionPayload,
  options?: DispatchOptions
) => void;
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
    return state.cards.length - (state.nextCardIndex + 1);
  },
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
  getters: {
    [L in keyof typeof getters]: ReturnType<typeof getters[L]>;
  };
};

export const store = createStore({
  state,
  mutations,
  getters,
  actions,
});

export const key: InjectionKey<Store> = Symbol();

export function useStore(): Store {
  return USE_STORE(key);
}
