<template>
  <div class="card card-front relative w-40 h-40" @click="flipCard">
    <transition name="flip">
      <div v-show="!isFlipped" class="card-text card-front-text green">
        <div class="pretext">Question</div>
        <h2>
          {{ frontText }}
        </h2>

        <button class="button-white button-clear button-large">
          FLIP
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </transition>
    <transition name="flip">
      <div v-show="isFlipped" class="card-text card-back-text blue">
        <div class="pretext">Answer</div>
        <h2>
          {{ backText }}
        </h2>

        <button class="button-white button-clear button-large">
          FLIP
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </transition>
    <!-- <div class="card absolute w-full h-full" :class="{ flipped: isFlipped }">
      <div class="front absolute w-full h-full bg-gray-300">front</div>
      <div class="flipped absolute w-full h-full bg-gray-300">back</div>
    </div> -->
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
h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #4e4e4e;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.green {
  background-color: #084c61;
}

.red {
  background-color: #db4d52;
}

.yellow {
  background-color: #f9cf3b;
}

.blue {
  background-color: #49b0e4;
}

.purple {
  background-color: #996ce2;
}

/* Custom */

.button-white {
  background-color: white;
}

.button-white.button-clear {
  color: #000000;
  opacity: 0.2;
}

.button-large {
  font-size: 1.4rem;
  height: 4.5rem;
  line-height: 4.5rem;
  padding: 0 2rem;
}

ul.unstyled {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card {
  transition: transform 0.5s;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 300px;
  padding: 4rem;
  border-radius: 5px;
  margin: 0 1rem;
}

.pretext {
  color: #000000;
  opacity: 0.2;
}

.card:hover {
  transform: scale(1.1);
}

.flex-grid-thirds {
  display: flex;
  justify-content: space-between;
}

.flex-grid-thirds .col {
  width: 32%;
}

.card-text h2 {
  color: #000000;
  opacity: 0.5;
  font-size: 2.2rem;
}

.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-enter {
  transform: rotateY(180deg);
  opacity: 0;
}

.flip-leave {
  display: none;
}

@media (max-width: 600px) {
  .flex-grid-thirds {
    display: block;
  }
  .flex-grid-thirds .col {
    width: 100%;
    margin: 0 0 10px 0;
  }
}
</style>
