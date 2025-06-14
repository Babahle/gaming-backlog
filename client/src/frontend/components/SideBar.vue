<script setup lang="ts">
import Accordian from "./Accordian.vue";
</script>

<template>
  <div class="accordion-container h-1/2 w-[13.6rem] p-3 m-4 flex flex-col bg-cardBackground">
    <Accordian :checked='true' :title="'In progress'"/>
    <Accordian :checked='true' :title="'In progress'"/>
    <Accordian :checked='true' :title="'In progress'"/>
    <Accordian :checked='true' :title="'In progress'"/>
    <Accordian :checked='true' :title="'In progress'"/>
  </div>
</template>

<style scoped>

</style>