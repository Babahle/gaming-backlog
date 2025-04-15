<script setup lang="ts">

import {Colours} from "../enums/Colours";
import {computed} from "vue";
import {ButtonColour} from "../models/ButtonColour";
import {animate} from "motion";

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
    "px-10",
    "rounded-md",
    buttonColourInstance.hoverTextColour,
  ];
});

function emitButtonClick() {
  emits('button-clicked');
}

async function onEnter(el, onComplete) {
  console.log("onEnter")
  await animate(el, {opacity: 1, duration: 1000});
  onComplete();
  console.log("onComplete")
}


</script>

<template>
  <button @click="emitButtonClick" :class="buttonClassList">
    {{ buttonLabel }}
  </button>
</template>

<style scoped>
</style>