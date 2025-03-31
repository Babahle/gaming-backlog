<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import {ref, watchEffect} from "vue";
import GameCard from "../components/GameCard.vue";

let games = ref([]);
watchEffect(async () => {
  const response = await fetch("http://localhost:3000/games");
  games.value = await response.json();
});
</script>

<template>
  <div class="header flex flex-col items-center justify-center my-10">
    <h1 class="font-bold text-heading-1 my-4 text-primary">Own Your Gaming Journey</h1>
    <p class="">Track your progress, categorise your collection, and achieve more with every game</p>
  </div>

  <div class="flex flex-row items-start h-screen">
    <SideBar/>
    <div class="games-container" v-if="games.length > 0">
      <div class="grid grid-cols-5 gap-6 auto-rows-auto">
        <GameCard v-for="game in games" :game-object="game"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.games-container {
  margin: 1rem;
}
</style>