<script setup lang="ts">

import Logo from "./Logo.vue";
import Button from "./Button.vue";
import {Colours} from "../enums/Colours";
import {ref} from "vue";
import GameCreationModal from "./GameCreationModal.vue";

const modalActive = ref(false);

function toggleModal() {
  modalActive.value = !modalActive.value;
}
</script>

<template>

  <div class="top-nav flex flex-row justify-between items-center px-3 py-1">
    <Logo/>
    <Button button-label="Add Game" :selectedColour="Colours.Secondary" @button-clicked="toggleModal"/>
  </div>

    <GameCreationModal :modalActive="modalActive"></GameCreationModal>
</template>