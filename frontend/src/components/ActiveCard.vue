<template>
  <div class="absolute">
    <div
      class="container relative w-full h-full bg-transparent"
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
      <div
        class="
          card
          absolute
          justify-center
          items-center
          grid
          w-full
          h-full
          rounded-3xl
        "
        :class="{ flipped: isFlipped }"
      >
        <div
          class="
            front
            absolute
            justify-center
            items-center
            grid
            w-full
            h-full
            rounded-3xl
            bg-white
          "
        >
          {{ activeCard.frontText }}
        </div>
        <div
          class="
            back
            absolute
            justify-center
            items-center
            grid
            w-full
            h-full
            rounded-3xl
            bg-white
          "
        >
          {{ activeCard.backText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { Card } from "../store";

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
.container {
  z-index: 2;
  transition: all var(--stack-move-time);
  box-shadow: 0 5px 10px 0 rgba(78, 78, 78, 0.2),
    0 15px 20px 0 rgba(78, 78, 78, 0.1);
}

.card {
  transform-style: preserve-3d;
  transition: all 0.5s;
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
  animation-timing-function: ease-in-out;
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
  animation-timing-function: ease-out;
}
@keyframes flipDownAnimation {
  80% {
    opacity: 80%;
  }
  100% {
    transform: translate(10%, 150%) scale(1.3) rotateX(90deg) rotateY(-15deg);
    z-index: 1;
    opacity: 0;
  }
}
</style>
