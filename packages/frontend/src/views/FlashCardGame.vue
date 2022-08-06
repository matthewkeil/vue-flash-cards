<template>
  <div class="container">
    <FlashCards
      ref="flashCardsRef"
      :activeCardIndex="activeCardIndex"
      :nextCardIndex="nextCardIndex"
      :cardsRemaining="cardsRemaining"
      :frontToBackTime="moveTime"
      :flipDownTime="moveTime"
      :maxDepth="10"
    >
      <template v-slot:front>{{ activeCard.frontText }}</template>
      <template v-slot:back>{{ activeCard.backText }}</template>
      <template v-slot:next>{{ nextCard.frontText }}</template>
    </FlashCards>
    <button class="bg-white p-2 m-2" @click.prevent="wrongAnswer()">
      wrong answer
    </button>
    <button class="bg-white p-2 m-2" @click.prevent="correctAnswer()">
      correct
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "../store";
import FlashCards from "../components/FlashCards.vue";

export default defineComponent({
  name: "Home",
  components: {
    FlashCards,
  },
  setup() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const flashCardsRef = ref<InstanceType<typeof FlashCards>>(null as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const moveTime = 800;
    const store = useStore();
    const activeCardIndex = computed(() => store.state.activeCardIndex);
    const nextCardIndex = computed(() => store.state.nextCardIndex);
    const cardsRemaining = computed(() => store.getters.cardsRemaining);
    const activeCard = computed(() => store.getters.activeCard);
    const nextCard = computed(() => store.getters.nextCard);

    function wrongAnswer() {
      flashCardsRef.value.frontToBack();
      setTimeout(() => {
        store.commit("UPDATE_CARD_INDEXES");
      }, moveTime);
    }

    function correctAnswer() {
      flashCardsRef.value.flipDown();
      setTimeout(() => {
        store.commit("UPDATE_CARD_INDEXES");
      }, moveTime);
    }

    return {
      flashCardsRef,
      moveTime,
      activeCard,
      activeCardIndex,
      nextCard,
      nextCardIndex,
      cardsRemaining,
      wrongAnswer,
      correctAnswer,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 95%;
  height: 100vh;
  padding-top: 2%;
  overflow: hidden;
}
// min-width: 100%;
// display: grid;
// justify-content: center;
// align-items: center;
// padding-top: 300px;
// margin-left: 300px;

@media only screen and (min-width: 768px) {
  // .container {
  //   width: 90%;
  //   margin: 0 auto;
  // }
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
