<script setup lang="ts">
import {ref} from "vue";

let isOpen = ref(false);


const props = defineProps<{
  options: {
    type: Array<any>,
    required: true,
  },
  modelValue: {
    type: string
  },
}>()


function selectOption() {
}

function toggleDropDown() {
  isOpen.value = !isOpen.value;
}

function closeDropDown() {
}

</script>

<template>
  <!-- Wrapper provides positioning context -->
  <div class="relative inline-block text-left">
    <!-- Trigger Button -->
    <button
        class="bg-cardBackground p-4 rounded-md border border-primary"
        @click="toggleDropDown"
    >
      Select Filter
    </button>

    <!-- Dropdown Menu (appears below button) -->
    <motion.div
        v-if="isOpen"
        :initial="{ opacity: 0, scaleY: 0 }"
        :animate="{ opacity: 1, scaleY: 1 }"
        class="absolute left-0 top-12 mt-2 w-40 origin-top bg-cardBackground rounded-md shadow-lg z-50"
    >
      <ul class="flex flex-col items-start text-left cursor-pointer">
        <li
            v-for="option in props.options"
            :key="option"
            class="w-full px-4 py-2 hover:bg-background rounded-md"
        >
          {{ option }}
        </li>
      </ul>
    </motion.div>
  </div>
</template>

<style scoped>

</style>