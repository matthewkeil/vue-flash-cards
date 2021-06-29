<template>
  <div
    class="
      card
      relative
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
      '--flip-down-time': `${flipDownTime}ms`,
    }"
    :class="{
      frontToBackActive: frontToBackActive,
      flipDownActive: flipDownActive,
    }"
    @click.prevent="flipCard()"
  >
    {{ activeCard.frontText }}
    <!-- <div
      :class="{ flipped: isFlipped }"
      class="front absolute w-full h-full bg-gray-300"
    >
      {{ activeCard.frontText }}
    </div>
    <div class="back absolute w-full h-full bg-gray-300">
      {{ activeCard.backText }}
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
    activeCard: {
      type: Object as PropType<Card>,
      required: true,
    },
    frontToBackTime: {
      type: Number,
      default: 800,
    },
    flipDownTime: {
      type: Number,
      default: 800,
    },
  },
  setup(props) {
    const isFlipped = ref(false);
    function flipCard() {
      isFlipped.value = !isFlipped.value;
    }

    const frontToBackActive = ref(false);
    function frontToBack() {
      frontToBackActive.value = true;
      setTimeout(() => {
        frontToBackActive.value = false;
      }, props.frontToBackTime);
    }

    const flipDownActive = ref(false);
    function flipDown() {
      flipDownActive.value = true;
      setTimeout(() => {
        flipDownActive.value = false;
      }, props.flipDownTime);
    }

    return {
      isFlipped,
      flipCard,
      frontToBack,
      frontToBackActive,
      flipDown,
      flipDownActive,
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 40rem;
  height: 26rem;
  z-index: 2;
  transition: all var(--stack-move-time);
  box-shadow: 0 5px 10px 0 rgba(78, 78, 78, 0.2),
    0 15px 20px 0 rgba(78, 78, 78, 0.1);
}

.cardface {
  transform-style: preserve-3d;
}

.front,
.back {
  backface-visibility: hidden;
}

.back,
.flipped {
  transform: rotateY(180deg);
}

.frontToBackActive {
  animation-name: frontToBackAnimation;
  animation-direction: normal;
  animation-duration: var(--front-to-back-time);
  animation-timing-function: ease;
}
@keyframes frontToBackAnimation {
  50% {
    transform: translate(90%, -90%) scale(0.85) rotate(8deg);
  }
  100% {
    transform: translateY(-5%) scale(0.85);
    z-index: 1;
  }
}

.flipDownActive {
  animation-name: flipDownAnimation;
  animation-direction: normal;
  animation-duration: var(--flip-down-time);
  animation-timing-function: ease;
}
@keyframes flipDownAnimation {
  100% {
    transform: translate(10%, 200%) scale(1.3) rotateX(-130deg) rotateY(15deg);
    z-index: 1;
  }
}
</style>
