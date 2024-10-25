<script setup lang="ts">

import Logo from "./Logo.vue";
import Button from "./Button.vue";
import {Colours} from "../enums/Colours.ts";


function handleClick() {
  console.log("Button clocked")
}
</script>

<template>
  <Logo/>
  <Button button-label="Add Game" :selectedColour="Colours.Secondary" @button-clicked="handleClick"/>
</template>