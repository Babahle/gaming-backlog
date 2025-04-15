<script setup lang="ts">

import Logo from "./Logo.vue";
import Button from "./Button.vue";
import {Colours} from "../enums/Colours";
import {ref} from "vue";
import GameCreationModal from "./GameCreationModal.vue";
import {AnimatePresence, MotionConfig} from "motion-v"


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

 <MotionConfig :transition="{ duration: 0.5 }">
   <AnimatePresence :mode="'wait'">
     <GameCreationModal :modalActive="modalActive" @closeModal="toggleModal"></GameCreationModal>
   </AnimatePresence>
 </MotionConfig>
</template>