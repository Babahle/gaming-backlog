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

  <div class="top-nav flex flex-row justify-between m-2 items-center  md:px-3 md:py-1">
    <Logo/>
    <Button class="hidden md:block" button-label="Add Game" :selectedColour="Colours.Secondary"
						@button-clicked="toggleModal"/>
    <Button class="block md:hidden" button-label="+" :selectedColour="Colours.Secondary" @button-clicked="toggleModal"/>
  </div>

 <MotionConfig :transition="{ duration: 0.5 }">
   <AnimatePresence :mode="'wait'">
     <GameCreationModal :modalActive="modalActive" @closeModal="toggleModal"></GameCreationModal>
   </AnimatePresence>
 </MotionConfig>
</template>