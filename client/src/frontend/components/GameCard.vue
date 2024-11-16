<script setup lang="ts">
import Button from "./Button.vue";
import {Colours} from "../enums/Colours.ts";
import {Game} from "../models/Game.ts";

defineProps<{
  gameObject: Game
}>();


</script>

<template>
  <div class="flex flex-col card bg-cardBackground w-[16.5rem] h-fit rounded-md hover:border hover:border-primary hover:cursor-pointer">
    <div class="card_aside w-full rounded-md">
      <img class="rounded-t-md"
           src="https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png">
    </div>

    <div class="card_body p-4">
      <div class="card_title text-text text-heading-5 font-bold">
        {{ gameObject.name }}
      </div>

      <div class="card_subtitle-5 text-body text-text">
        {{ gameObject.platform }}
      </div>
    </div>

    <div class="card__footer flex flex-row items-center justify-between px-4 my-2">
      <p class="text-body text-accent">{{ gameObject.state.valueOf() }}</p>
      <Button :selected-colour="Colours.Primary" button-label="More"/>
    </div>
  </div>
</template>

<style scoped>
</style>