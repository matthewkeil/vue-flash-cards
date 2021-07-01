<template>
  <div class="container">
    <FlashCards ref="flashCardsRef" />
    <button
      class="bg-white p-2 m-2"
      @click.prevent="flashCardsRef.wrongAnswer()"
    >
      wrong answer
    </button>
    <button
      class="bg-white p-2 m-2"
      @click.prevent="flashCardsRef.correctAnswer()"
    >
      correct
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ActiveCard from "../components/ActiveCard.vue";
import CardStack from "../components/CardStack.vue";
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

    return {
      flashCardsRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  min-width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: gray;
  // display: grid;
  // justify-content: center;
  // align-items: center;
  // padding-top: 300px;
  // margin-left: 300px;
}
</style>
