<script setup lang="ts">
import Button from "./Button.vue";
import {Colours} from "../enums/Colours";
import {Game} from "../models/Game";
import {useGamesStore} from "../stores/games";


const gamesStore = useGamesStore();

const props = defineProps<{
  gameObject: Game
}>();

function getImageUrl(): string {
  return props.gameObject.imageURL;
}

function deleteGame(gameId: string) {
  if (!gameId) return;
  console.log(`Deleting game: ${gameId}`);
  gamesStore.deleteGame(gameId);
}

</script>

<template>
  <div
      class="flex flex-col card bg-cardBackground w-[16.5rem] h-fit rounded-md hover:border hover:border-primary hover:cursor-pointer items-center">
    <div class="card_aside w-full rounded-md">
      <img class="rounded-t-md w-full h-[12rem]"
           :src="getImageUrl()"/>
    </div>

    <div class="card_body w-full">
      <div class="card_title text-text text-heading-5 font-bold text-left px-4">
        <p> {{ gameObject.name }}</p>
      </div>

      <div class="card_subtitle-5 text-body text-text text-left px-4">
        {{ gameObject.platform }}
      </div>
    </div>

    <div class="flex flex-row items-center justify-between px-4 my-2 w-full ">
      <p class="text-body text-accent">{{ gameObject.state.valueOf() }}</p>
      <Button  v-if="gameObject.id" @button-clicked="deleteGame(gameObject.id)" :selected-colour="Colours.Primary" button-label="Delete"/>
    </div>
  </div>
</template>

<style scoped>
</style>