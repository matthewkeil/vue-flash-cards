<template>
  <div class="stack-container relative">
    <CardStack
      :key="nextCardIndex"
      :nextCard="nextCard"
      :cardsRemaining="cardsRemaining"
      :maxDepth="10"
      :stackMoveTime="moveTime"
      ref="cardStackRef"
      class="stack"
    />
    <ActiveCard
      :key="activeCardIndex"
      :activeCard="activeCard"
      :frontToBackTime="moveTime"
      :flipDownTime="moveTime"
      ref="activeCardRef"
      class="stack"
    />
    {{ getMaxDepth() }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "../store";
import ActiveCard from "./ActiveCard.vue";
import CardStack from "./CardStack.vue";

export default defineComponent({
  name: "Home",
  components: {
    CardStack,
    ActiveCard,
  },
  methods: {
    getMaxDepth() {
      this.$viewport.getOrientation();
    },
  },
  setup() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const cardStackRef = ref<InstanceType<typeof CardStack>>(null as any);
    const activeCardRef = ref<InstanceType<typeof ActiveCard>>(null as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const store = useStore();
    const activeCardIndex = computed(() => store.state.activeCardIndex);
    const activeCard = computed(() => store.getters.activeCard);
    const nextCardIndex = computed(() => store.state.nextCardIndex);
    const nextCard = computed(() => store.getters.nextCard);
    const cardsRemaining = computed(() => store.getters.cardsRemaining);

    const moveTime = 800;

    function wrongAnswer() {
      activeCardRef.value.frontToBack();
      cardStackRef.value.shiftStack();
      setTimeout(() => {
        store.commit("UPDATE_CARD_INDEXES");
      }, moveTime);
    }

    function correctAnswer() {
      activeCardRef.value.flipDown();
      cardStackRef.value.shiftStack();
      setTimeout(() => {
        store.commit("UPDATE_CARD_INDEXES");
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
.stack-container {
  margin-top: 2.1rem;
  margin-right: auto;
  margin-left: auto;
  height: 80%;
  width: 100%;
}

.stack {
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 568px) {
  // .stack-container {
  //   margin: 2.2rem auto;
  //   padding-top: 2.2rem;
  //   height: 28.2rem;
  //   max-width: 40rem;
  // }

  // .stack {
  //   width: 40rem;
  //   height: 26rem;
  // }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
  .stack-container {
    margin: 2.2rem auto;
    padding-top: 2.2rem;
    height: 28.2rem;
    max-width: 40rem;
  }

  .stack {
    width: 40rem;
    height: 26rem;
  }
}

@media only screen and (min-width: 1200px) {
  .stack-container {
    margin: 2.2rem auto;
    padding-top: 2.2rem;
    height: 28.2rem;
    max-width: 40rem;
  }

  .stack {
    width: 40rem;
    height: 26rem;
  }
}
</style>
