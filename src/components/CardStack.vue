<template>
  <div class="stack relative">
    <div
      v-for="(card, index) of stack"
      :key="index"
      class="
        card
        absolute
        grid
        w-full
        h-full
        justify-center
        items-center
        rounded-3xl
        bg-white
      "
      :style="{
        '--front-to-back-time': `${frontToBackTime}ms`,
        '--stack-move-time': `${stackMoveTime}ms`,
      }"
    >
      {{ card.frontText }}
    </div>
    <div
      v-if="showTopCard"
      class="
        card
        absolute
        grid
        w-full
        h-full
        justify-center
        items-center
        rounded-3xl
        bg-white
      "
      :style="{
        '--front-to-back-time': `${frontToBackTime}ms`,
        '--stack-move-time': `${stackMoveTime}ms`,
      }"
      :class="{ frontToBackActive: frontToBackActive }"
      @click.prevent="frontToBack()"
    >
      {{ topCard.frontText }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
export interface Card {
  frontText: string;
  backText: string;
}

export default defineComponent({
  props: {
    cards: {
      type: Object as PropType<Card[]>,
      required: true,
    },
  },
  setup(props) {
    function buildStack(cards: Card[]) {
      const maxDepth = 5;
      const stackDepth = ref(cards.length > maxDepth ? maxDepth : cards.length);
      const stack = ref(cards.slice(0, stackDepth.value).reverse());
      return {
        stack,
        stackDepth,
      };
    }

    const { stack, stackDepth } = buildStack(props.cards);
    const topCard = ref(stack.value.pop());
    const showTopCard = ref(true);

    const frontToBackActive = ref(false);
    const frontToBackTime = 500;
    const stackMoveTime = 100;
    function frontToBack() {
      frontToBackActive.value = true;
      setTimeout(() => {
        frontToBackActive.value = false;
        showTopCard.value = false;
        setTimeout(() => {
          showTopCard.value = true;
          stack.value.unshift(topCard.value!);
          topCard.value = stack.value.pop();
        }, stackMoveTime);
      }, frontToBackTime);
    }

    return {
      topCard,
      showTopCard,
      stack,
      stackDepth,
      frontToBack,
      frontToBackTime,
      stackMoveTime,
      frontToBackActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.stack {
  width: 40rem;
  height: 26rem;
}
.card {
  z-index: 2;
  transition: all var(--stack-move-time);
  box-shadow: 0 5px 10px 0 rgba(78, 78, 78, 0.2),
    0 15px 20px 0 rgba(78, 78, 78, 0.1);
}
.card:nth-last-child(2) {
  transform: translateY(-9px) scale(0.98);
    filter: brightness(0.95);
}
.card:nth-last-child(3) {
  transform: translateY(-18px) scale(0.96);
  filter: brightness(0.9);
}
.card:nth-last-child(4) {
  transform: translateY(-27px) scale(0.94);
  filter: brightness(0.85);
}
.card:nth-last-child(5) {
  transform: translateY(-36px) scale(0.92);
  filter: brightness(0.8);
}

.frontToBackActive {
  animation: frontToBackAnimation var(--front-to-back-time) normal;
}

@keyframes frontToBackAnimation {
  50% {
    transform: translate(90%, -90%) scale(0.85) rotate(8deg);
    // animation-timing-function: ease;
  }
  100% {
    transform: translateY(-5%) scale(0.85);
    // animation-timing-function: ease;
    z-index: 1;
  }
}
</style>
