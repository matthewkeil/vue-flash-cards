import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CardDeck = {
  __typename?: 'CardDeck';
  cards: Array<SpanishVerb>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getDeck: CardDeck;
  getVerb: SpanishVerb;
  listDecks: Array<CardDeck>;
  searchEnglish: Array<TranslationPair>;
  searchSpanish: Array<TranslationPair>;
};


export type QueryGetDeckArgs = {
  deckId: Scalars['String'];
};


export type QueryGetVerbArgs = {
  infinitive: Scalars['String'];
};


export type QuerySearchEnglishArgs = {
  match: Scalars['String'];
};


export type QuerySearchSpanishArgs = {
  match: Scalars['String'];
};

export type SpanishVerb = {
  __typename?: 'SpanishVerb';
  en: Array<Scalars['String']>;
  related?: Maybe<Array<Scalars['String']>>;
  sp: Scalars['String'];
  usage?: Maybe<Array<TranslationPair>>;
};

export type TranslationPair = {
  __typename?: 'TranslationPair';
  en: Array<Scalars['String']>;
  sp: Scalars['String'];
};

export type GetDeckQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDeckQuery = { __typename?: 'Query', getDeck: { __typename?: 'CardDeck', id: string, name: string, cards: Array<{ __typename?: 'SpanishVerb', en: Array<string>, sp: string, related?: Array<string> | null, usage?: Array<{ __typename?: 'TranslationPair', en: Array<string>, sp: string }> | null }> } };

export type ListDecksQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDecksQuery = { __typename?: 'Query', listDecks: Array<{ __typename?: 'CardDeck', id: string, name: string }> };


export const GetDeckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDeck"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDeck"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deckId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"sp"}},{"kind":"Field","name":{"kind":"Name","value":"related"}},{"kind":"Field","name":{"kind":"Name","value":"usage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"en"}},{"kind":"Field","name":{"kind":"Name","value":"sp"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDeckQuery, GetDeckQueryVariables>;
export const ListDecksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listDecks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listDecks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ListDecksQuery, ListDecksQueryVariables>;