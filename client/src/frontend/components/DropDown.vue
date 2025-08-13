<script setup lang="ts">
import {ref} from "vue";
import {motion} from "motion-v";

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
  <button class="bg-cardBackground p-4 rounded-md border border-primary mb-4" @click="toggleDropDown">Select Filter
  </button>

  <motion.div :initial="{ opacity: 0, scaleY: 0 }"
              :animate="{ opacity: 1, scaleY: 1  }"
              v-if="isOpen" class="dropdown-menu bg-cardBackground rounded-md w-32 px-3">
    <ul class="flex flex-col items-start text-left hover:cursor-pointer">
      <li class="w-full py-3 hover:bg-background"
          v-for="option in props.options"><p>{{
          option
        }}</p></li>
    </ul>
  </motion.div>
</template>

<style scoped>

</style>