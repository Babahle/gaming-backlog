<script setup lang="ts">

import {Colours} from "../enums/Colours.ts";
import {computed, ref} from "vue";
import {ButtonColour} from "../models/ButtonColour.ts";

const emits = defineEmits(['button-clicked']);
const props = defineProps<{
  selectedColour: Colours
  buttonLabel: string;
}>();

const buttonColourInstance = new ButtonColour(props.selectedColour);
const buttonClassList = computed(() => {
  return [
    buttonColourInstance.backgroundColour,
    buttonColourInstance.hoverColour,
    buttonColourInstance.textColour,
    "font-bold",
    "py-3",
    "px-6",
    "rounded-full",
    buttonColourInstance.hoverTextColour,
    "transform",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "hover:scale-110",
    "hover:brightness-110",
    "hover:animate-pulse",
    "active:animate-bounce",
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