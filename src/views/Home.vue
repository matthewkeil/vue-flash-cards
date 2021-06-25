<template>
  <FlashCard frontText="front" backText="back" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FlashCard from "../components/FlashCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    FlashCard,
  },
});
</script>
