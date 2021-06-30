<template>
  <div>
    <button class="bg-white p-2 m-2" @click.prevent="wrongAnswer()">
      wrong answer
    </button>
    <button class="bg-white p-2 m-2" @click.prevent="correctAnswer()">
      correct
    </button>
    <div class="container">
      <CardStack
        :key="nextCardIndex"
        :nextCard="nextCard"
        :cardsRemaining="cardsRemaining"
        :maxDepth="10"
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
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ActiveCard from "../components/ActiveCard.vue";
import CardStack from "../components/CardStack.vue";

export default defineComponent({
  name: "Home",
  components: {
    CardStack,
    ActiveCard,
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
.container {
  padding-top: 300px;
  margin-left: 300px;
}
</style>
