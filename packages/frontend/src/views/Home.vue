<template>
  <div class="home">
    <h1>Welcome to the Flash Card Game!</h1>
    <label>Deck Name</label>
    <input type="text" v-model="deckName" />
    <button>Start Playing</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { ListDecksDocument } from "../graphql";

export default {
  name: "Home",
  setup() {
    const { result: decks, error, loading } = useQuery(ListDecksDocument);
    const deckName = ref("Select a deck");

    return {
      deckName,
      // decks,
      // loading,
      // error,
    };
  },
};
</script>
