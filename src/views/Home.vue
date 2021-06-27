<template>
  <div class="container">
    <CardStack :cards="cards" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import FlashCard from "../components/FlashCard.vue";
import CardStack, { Card } from "../components/CardStack.vue";

export default defineComponent({
  name: "Home",
  components: {
    CardStack,
  },
  setup() {
    const cards: Card[] = [
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
    ];
    return {
      cards,
    };
  },
});
</script>
