<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import {ref, watchEffect} from "vue";
import GameCard from "../components/GameCard.vue";
import {Game} from "../models/Game";
import {Constants} from "../constants/Constants";
import GameCreationModal from "../components/GameCreationModal.vue";

let games = ref([]);
watchEffect(async () => {
  const response = await fetch(Constants.API_URL);
  games.value = await response.json();
});
</script>

<template>
  <div class="header flex flex-col items-center justify-center my-10">
    <h1 class="font-bold text-heading-1 my-4 text-primary">Own Your Gaming Journey</h1>
    <p class="">Track your progress, categorise your collection, and achieve more with every game</p>
  </div>

  <GameCreationModal></GameCreationModal>

  <div class="flex flex-row items-start h-screen">
    <SideBar/>
    <div class="games-container m-4" v-if="games.length > 0">
      <div class="grid grid-cols-5 gap-6 auto-rows-auto">
        <GameCard v-for="game in games" :game-object="new Game(game.name, game.platform, game.state, game.imageURL)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>