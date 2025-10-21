<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import {computed, ComputedRef, onMounted, ref} from "vue";
import GameCard from "../components/GameCard.vue";
import {Game} from "../models/Game";
import DropDown from "../components/DropDown.vue";
import {useGamesStore} from "../stores/games";

const gamesStore = useGamesStore();
let selectedFilter = ref('');
const mappedGames: ComputedRef<Game[]> = computed(() => {
  const list = gamesStore.games;
  return list.map(game => new Game(game.name, game.platform, game.state, game.imageURL, game.id));
})

onMounted(() => {
  gamesStore.fetchGames();
});

function onFilterSelected(payload: { filter: string }) {
  gamesStore.setFilter(payload.filter);
}

</script>

<template>
  <div class="header flex flex-col items-center justify-center my-10 px-4">
    <h1 class="font-bold text-heading-3 text-center md:text-heading-1 md:my-4 text-primary">Own Your Gaming Journey</h1>
    <p class="text-center text-body md:text-heading-5">Track your progress, categorise your collection, and achieve
      more with every game</p>
  </div>


  <div class="flex flex-col items-center justify-between md:flex-row md:items-start h-screen">
    <SideBar @filter-selected="onFilterSelected" class="hidden md:block"/>
    <DropDown class="md:hidden" v-model="selectedFilter" :options="['Playing', 'Completed', 'Not Started']"/>

    <div class="games-container m-4 w-full" v-if="gamesStore.games.length > 0">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 auto-rows-auto">
        <GameCard v-for="game in mappedGames" :key="game.id" :game-object="game"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>