<template>
  <div class="stack-container relative">
    <CardStack
      :key="nextCardIndex + renderTrigger"
      :cardsRemaining="cardsRemaining"
      :maxDepth="actualMaxDepth"
      :stackMoveTime="stackMoveTime"
      ref="cardStackRef"
      class="stack"
    >
      <template v-slot:next>
        <slot name="next" />
      </template>
    </CardStack>
    <ActiveCard
      :key="activeCardIndex"
      :frontToBackTime="frontToBackTime"
      :flipDownTime="flipDownTime"
      ref="activeCardRef"
      class="stack"
    >
      <template v-slot:front>
        <slot name="front" />
      </template>
      <template v-slot:back>
        <slot name="back" />
      </template>
    </ActiveCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, Ref, ref, watch } from "vue";
import { Breakpoint, Orientation } from "../../plugins/viewport";
import ActiveCard from "./ActiveCard.vue";
import CardStack from "./CardStack.vue";

export default defineComponent({
  components: {
    CardStack,
    ActiveCard,
  },
  props: {
    nextCardIndex: {
      type: Number,
      required: true,
    },
    activeCardIndex: {
      type: Number,
      required: true,
    },
    cardsRemaining: {
      type: Number,
      required: false,
    },
    maxDepth: {
      type: Number,
      required: false,
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
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const cardStackRef = ref<InstanceType<typeof CardStack>>(null as any);
    const activeCardRef = ref<InstanceType<typeof ActiveCard>>(null as any);
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const stackMoveTime = ref(props.frontToBackTime);

    const instance = getCurrentInstance();
    const actualMaxDepth = ref(5);
    const renderTrigger = ref(0);

    const breakpoint = instance?.appContext.config.globalProperties.$viewport
      .breakpoint as Ref<Breakpoint>;
    const orientation = instance?.appContext.app.config.globalProperties
      .$viewport.orientation as Ref<Orientation>;
    watch([breakpoint, orientation], () => {
      const deepest =
        breakpoint.value === "sm" && orientation.value === "landscape" ? 5 : 10;
      actualMaxDepth.value =
        !props.maxDepth || props.maxDepth > deepest ? deepest : props.maxDepth;
      renderTrigger.value += 1;
    });

    function frontToBack() {
      stackMoveTime.value = props.frontToBackTime;
      activeCardRef.value.frontToBack();
      cardStackRef.value.shiftStack();
    }

    function flipDown() {
      stackMoveTime.value = props.flipDownTime;
      activeCardRef.value.flipDown();
      cardStackRef.value.shiftStack();
    }

    return {
      activeCardRef,
      cardStackRef,
      frontToBack,
      flipDown,
      stackMoveTime,
      actualMaxDepth,
      renderTrigger,
    };
  },
});
</script>

<style lang="scss" scoped>
.stack-container {
  margin-top: 2.1rem;
  margin-right: auto;
  margin-left: auto;
  height: 80%;
  width: 100%;
}

.stack {
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 568px) {
  // .stack-container {
  //   margin: 2.2rem auto;
  //   padding-top: 2.2rem;
  //   height: 28.2rem;
  //   max-width: 40rem;
  // }

  // .stack {
  //   width: 40rem;
  //   height: 26rem;
  // }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
  .stack-container {
    margin: 2.2rem auto;
    padding-top: 2.2rem;
    height: 28.2rem;
    max-width: 40rem;
  }

  .stack {
    width: 40rem;
    height: 26rem;
  }
}

@media only screen and (min-width: 1200px) {
  .stack-container {
    margin: 2.2rem auto;
    padding-top: 2.2rem;
    height: 28.2rem;
    max-width: 40rem;
  }

  .stack {
    width: 40rem;
    height: 26rem;
  }
}
</style>
