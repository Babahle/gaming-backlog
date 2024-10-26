<script setup lang="ts">

import Logo from "./Logo.vue";
import Button from "./Button.vue";
import {Colours} from "../enums/Colours.ts";


function handleClick() {
  console.log("Button clocked")
}
</script>

<template>

  <div class="top-nav flex flex-row justify-between items-center px-3 py-1">
    <Logo/>
    <Button button-label="Add Game" :selectedColour="Colours.Secondary" @button-clicked="handleClick"/>
  </div>


</template>