import "reflect-metadata";
import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchemaSync } from "type-graphql";

import { CardDeckResolver, SpanishVerbResolver } from "./models";

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
