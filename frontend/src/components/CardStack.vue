<template>
  <div class="absolute">
    <div class="relative w-full h-full">
      <div
        v-if="showBackCard"
        class="bg-white"
        :class="getClasses()"
        :style="{ '--stack-move-time': `${stackMoveTime}ms` }"
      ></div>
      <div
        v-for="index in stackDepth"
        :key="index"
        class="bg-white"
        :class="getClasses()"
        :style="{ '--stack-move-time': `${stackMoveTime}ms` }"
      >
        {{ nextCard.frontText }}
      </div>
      <div
        v-if="showFrontCard"
        class="bg-transparent"
        :class="getClasses()"
        :style="{ '--stack-move-time': `${stackMoveTime}ms` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { Card } from "../store";

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
    stackMoveTime: {
      type: Number,
      default: 400,
    },
  },
  setup(props) {
    const MAX_STACK = 10;
    const maxDepth = props.maxDepth > MAX_STACK ? MAX_STACK : props.maxDepth;
    let stackDepth =
      props.cardsRemaining > maxDepth ? maxDepth : props.cardsRemaining;

    if (stackDepth > 1) {
      stackDepth -= 1;
    }

    const showFrontCard = ref(true);
    const showBackCard = ref(false);

    if (stackDepth === 0) {
      showFrontCard.value = false;
    }

    function shiftStack() {
      if (stackDepth === 0) return;
      showFrontCard.value = false;
      showBackCard.value = true;
    }

    function getClasses() {
      return "card absolute grid w-full h-full justify-center items-center rounded-3xl";
    }

    return {
      stackDepth,
      showFrontCard,
      showBackCard,
      shiftStack,
      getClasses,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
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
.card:nth-last-child(6) {
  transform: translateY(-45px) scale(0.9);
  filter: brightness(0.75);
}
.card:nth-last-child(7) {
  transform: translateY(-54px) scale(0.88);
  filter: brightness(0.7);
}
.card:nth-last-child(8) {
  transform: translateY(-63px) scale(0.86);
  filter: brightness(0.65);
}
.card:nth-last-child(9) {
  transform: translateY(-72px) scale(0.84);
  filter: brightness(0.6);
}
.card:nth-last-child(10) {
  transform: translateY(-81px) scale(0.82);
  filter: brightness(0.55);
}
</style>
