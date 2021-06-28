<template>
  <div class="stack relative">
    <div
      v-if="showBackCard"
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
      :style="getStyle(0)"
    ></div>
    <div
      v-for="index in stackDepth"
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
    >
      {{ nextCard.frontText }}
    </div>
    <div
      v-if="showFrontCard"
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
      :style="getStyle(stackDepth + 1)"
      @click.prevent="shiftStack()"
    ></div>
    <!-- <div
      class="
        topCard
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
    </div> -->
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
    nextCard: {
      type: Object as PropType<Card>,
      required: true,
    },
    cardsRemaining: {
      type: Number,
      required: false,
      default: 5,
    },
    maxDepth: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  setup(props, { emit }) {
    const stackDepth = ref(
      props.cardsRemaining > props.maxDepth
        ? props.maxDepth
        : props.cardsRemaining
    );

    const stackMoveTime = 400;
    const showFrontCard = ref(true);
    const showBackCard = ref(false);

    function shiftStack() {
      showFrontCard.value = false;
      showBackCard.value = true;
      setTimeout(() => {
        emit("ready");
      }, stackMoveTime);
    }

    function getStyle(index: number) {
      const style = {
        "--stack-move-time": `${stackMoveTime}ms`,
      };
      if (!index) return style;

      return style;
    }
    // function buildStack(cards: Card[], maxDepth: number) {
    //   const stack = ref(cards.slice(0, stackDepth.value).reverse());
    //   return {
    //     stack,
    //     stackDepth,
    //   };
    // }

    // const { stack, stackDepth } = buildStack(props.cards, maxDepth);

    // const frontToBackTime = 800;
    // const topCard = ref(stack.value.pop());

    // const frontToBackActive = ref(false);

    // function frontToBack() {
    //   frontToBackActive.value = true;

    //   setTimeout(() => {
    //     frontToBackActive.value = false;
    //     stack.value.unshift(topCard.value!);
    //     topCard.value = stack.value.pop();
    //     // showTopCard.value = true;
    //   }, frontToBackTime);
    // }

    return {
      stackDepth,
      stackMoveTime,
      showFrontCard,
      showBackCard,
      shiftStack,
      getStyle,
      //   topCard,
      //   frontToBack,
      //   frontToBackTime,
      //   frontToBackActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.stack {
  width: 40rem;
  height: 26rem;
}
.card,
.topCard {
  z-index: 2;
  transition: all var(--stack-move-time);
  box-shadow: 0 5px 10px 0 rgba(78, 78, 78, 0.2),
    0 15px 20px 0 rgba(78, 78, 78, 0.1);
}
.card:nth-last-child(1) {
  transform: translateY(0px) scale(1);
  filter: brightness(1);
}
.card:nth-last-child(2) {
  transform: translateY(-9px) scale(0.98);
  filter: brightness(0.9);
}
.card:nth-last-child(3) {
  transform: translateY(-18px) scale(0.96);
  filter: brightness(0.8);
}
.card:nth-last-child(4) {
  transform: translateY(-27px) scale(0.94);
  filter: brightness(0.7);
}
.card:nth-last-child(5) {
  transform: translateY(-36px) scale(0.92);
  filter: brightness(0.6);
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
