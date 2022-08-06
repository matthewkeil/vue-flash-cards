import "reflect-metadata";
import http from "http";
import { resolve } from "path";
import express from "express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { SpanishVerbResolver } from "./models/SpanishVerb/SpanishVerbResolver";
import { CardDeckResolver } from "./models/CardDeck/CardDeckResolver";

(async function startServer() {
  const schema = await buildSchema({
    resolvers: [SpanishVerbResolver, CardDeckResolver],
    emitSchemaFile: resolve(
      __dirname,
      "..",
      "dist",
      "src",
      "graphql",
      "schema.graphql"
    ),
  });

  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})();
