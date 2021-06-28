<template>
  <div class="container">
    <CardStack
      :key="nextCardIndex"
      :nextCard="nextCard"
      :cardsRemaining="cardsRemaining"
      :maxDepth="5"
      @ready="getNextCard"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
      {
        frontText: "11",
        backText: "back",
      },
      {
        frontText: "12",
        backText: "back",
      },
      {
        frontText: "13",
        backText: "back",
      },
      {
        frontText: "14",
        backText: "back",
      },
      {
        frontText: "15",
        backText: "back",
      },
    ];

    const currentCardIndex = ref(0);
    const nextCardIndex = ref(1);
    const cardsRemaining = ref(cards.length - (nextCardIndex.value + 1));

    const currentCard = ref(cards[currentCardIndex.value]);
    const nextCard = ref(cards[nextCardIndex.value]);

    function getNextCard() {
      currentCardIndex.value = nextCardIndex.value;
      currentCard.value = cards[currentCardIndex.value];
      nextCardIndex.value += 1;
      nextCard.value = cards[nextCardIndex.value];
      cardsRemaining.value = cards.length - (nextCardIndex.value + 1);
    }

    return {
      currentCardIndex,
      currentCard,
      nextCardIndex,
      nextCard,
      getNextCard,
      cardsRemaining,
    };
  },
});
</script>
