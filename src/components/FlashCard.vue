<template>
  <div class="container relative w-40 h-40 bg-green" @click="flipCard">
    <div class="card absolute w-full h-full" :class="{ flipped: isFlipped }">
      <div class="front absolute w-full h-full bg-gray-300">
        {{ frontText }}
      </div>
      <div class="back absolute w-full h-full bg-gray-300">{{ backText }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isFlipped = ref(false);
    function flipCard() {
      isFlipped.value = !isFlipped.value;
    }
    return {
      isFlipped,
      flipCard,
    };
  },
  props: {
    frontText: {
      type: String,
      required: true,
    },
    backText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  transform: scale(1);
  transition: transform 0.3s;
}
.container:hover {
  transform: scale(1.1);
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
</style>
