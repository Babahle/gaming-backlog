<script setup lang="ts">

import {Colours} from "../enums/Colours.ts";
import {computed, ref} from "vue";
import {ButtonColour} from "../models/ButtonColour.ts";

const emits = defineEmits(['button-clicked']);
const props = defineProps<{
  selectedColour: Colours
  buttonLabel: string;
}>();

const buttonColourInstance = ref(new ButtonColour(props.selectedColour));
const buttonClassList = computed(() => {
  return [
    'px-6',
    'py-2',
    'font-medium',
    'tracking-wide',
    'text-text',
    'capitalize',
    'transition-colors',
    'duration-300',
    'transform',
    buttonColourInstance.value.backgroundColor,
    'rounded-lg',
    buttonColourInstance.value.hoverColor,
    'focus:outline-none',
    'focus:ring',
    buttonColourInstance.value.focusColor,
    'focus:ring-opacity-80',
  ];
});

function emitButtonClick() {
  emits('button-clicked');
}


</script>

<template>
  <button @click="emitButtonClick" :class="buttonClassList">
    {{ buttonLabel }}
  </button>
</template>

<style scoped></style>