import "reflect-metadata";
import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchemaSync } from "type-graphql";

import { SpanishVerbResolver } from "../models/SpanishVerb/SpanishVerbResolver";
import { CardDeckResolver } from "../models/CardDeck/CardDeckResolver";

const schema = buildSchemaSync({
  resolvers: [SpanishVerbResolver, CardDeckResolver],
});

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

exports.handler = server.createHandler();
