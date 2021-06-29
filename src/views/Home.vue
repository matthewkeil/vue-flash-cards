<template>
  <div>
    <button class="bg-white p-2 m-2" @click.prevent="wrongAnswer()">
      wrong answer
    </button>
    <button class="bg-white p-2 m-2" @click.prevent="correctAnswer()">correct</button>
    <div class="container">
      <CardStack
        :key="nextCardIndex"
        :nextCard="nextCard"
        :cardsRemaining="cardsRemaining"
        :maxDepth="5"
        :stackMoveTime="moveTime"
        class="absolute"
        ref="cardStackRef"
      />
      <ActiveCard
        :key="activeCardIndex"
        :activeCard="activeCard"
        :frontToBackTime="moveTime"
        :flipDownTime="moveTime"
        class="absolute"
        ref="activeCardRef"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ActiveCard from "../components/ActiveCard.vue";
import CardStack, { Card } from "../components/CardStack.vue";

export default defineComponent({
  name: "Home",
  components: {
    CardStack,
    ActiveCard,
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

    const activeCardIndex = ref(0);
    const nextCardIndex = ref(1);
    const cardsRemaining = ref(cards.length - (nextCardIndex.value + 1));

    const activeCard = ref(cards[activeCardIndex.value]);
    const nextCard = ref(cards[nextCardIndex.value]);

    function updateCards() {
      activeCardIndex.value = nextCardIndex.value;
      activeCard.value = cards[activeCardIndex.value];
      nextCardIndex.value += 1;
      nextCard.value = cards[nextCardIndex.value];
      cardsRemaining.value = cards.length - (nextCardIndex.value + 1);
    }

    const moveTime = 800;
    const cardStackRef = ref<InstanceType<typeof CardStack>>(null as any);
    const activeCardRef = ref<InstanceType<typeof ActiveCard>>(null as any);
    function wrongAnswer() {
      activeCardRef.value.frontToBack();
      cardStackRef.value.shiftStack();
      setTimeout(() => {
        updateCards();
      }, moveTime);
    }

    function correctAnswer() {
      activeCardRef.value.flipDown();
      cardStackRef.value.shiftStack();
      setTimeout(() => {
        updateCards();
      }, moveTime);
    }



    return {
      activeCard,
      nextCardIndex,
      nextCard,
      wrongAnswer,
      correctAnswer,
      cardsRemaining,
      activeCardIndex,
      activeCardRef,
      cardStackRef,
      moveTime,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding-top: 300px;
  margin-left: 300px;
}
</style>
