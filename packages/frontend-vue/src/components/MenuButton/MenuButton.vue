<template>
  <button
    id="dropdownDividerButton"
    data-dropdown-toggle="dropdownDivider"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    {{ tense }}
    <svg
      class="ml-2 w-4 h-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div
    id="dropdownDivider"
    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDividerButton"
    >
      <li v-for="item in items" :key="item.text">
        <a
        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        @click.prevent="select(item.value)"
          >{{ item.text }}</a
        >
      </li>
    </ul>
    <div class="py-1">
      <a
        href="#"
        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >Separated link</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { MenuButtonItem } from "./MenuButton.types";

export interface Props {
  items: MenuButtonItem[];
}

defineProps<Props>();

const tense = "Present";

function select(value: string) {
  console.log(value);
}
</script>

<!-- <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      tense: "Present",
    };
  },
});
</script> -->

<style lang="scss" scoped></style>
>
