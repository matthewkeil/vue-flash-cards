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
import { defineComponent, ref } from "vue";
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
  margin: 0 auto;
  width: 95%;
  height: 100vh;
  padding-top: 2%;
  overflow: hidden;
}
// min-width: 100%;
// display: grid;
// justify-content: center;
// align-items: center;
// padding-top: 300px;
// margin-left: 300px;

@media only screen and (min-width: 768px) {
  // .container {
  //   width: 90%;
  //   margin: 0 auto;
  // }
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
