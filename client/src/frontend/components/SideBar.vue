<script setup lang="ts">
/**
 * SideBar component
 * Renders an accordion item for each GameState and updates the games filter store when a filter is chosen.
 */

import Accordian from "./Accordian.vue";
import { GameStates } from "../enums/GameStates";
import { useGamesFilterStore } from "../stores/gamesFilter";

const filterStore = useGamesFilterStore();

/**
 * Immutable list of game state labels derived from the GameStates enum.
 */
const states = Object.values(GameStates) as readonly string[];

/**
 * Shape of the payload emitted by the Accordian component when a filter is selected.
 */
type FilterPayload = { filter: string };

/**
 * Handle filter selection emitted by child Accordian components.
 * Validates payload before updating the store.
 *
 * @param payload - object containing `filter` string
 */
function filterSelected(payload: FilterPayload): void {
  if (!payload || typeof payload.filter !== "string") return;
  filterStore.setSelectedFilter(payload.filter);
}
</script>

<template>
  <!-- Navigation list of filters derived from GameStates -->
  <div
    class="accordion-container h-1/2 w-[13.6rem] p-3 m-4 flex flex-col bg-cardBackground"
    role="navigation"
    aria-label="Game state filters"
  >
    <div v-for="state in states" :key="state" class="mb-2">
      <Accordian
        :title="state"
        :checked="filterStore.selectedFilter === state"
        @filterSelected="filterSelected"
      />
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for SideBar component (add styles as needed) */
</style>