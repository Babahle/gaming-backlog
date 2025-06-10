<script setup lang="ts">
import {ref} from "vue";
import {motion, AnimatePresence} from "motion-v"
import {Constants} from "../constants/Constants";
import Button from "./Button.vue";
import {Colours} from "../enums/Colours";
import {GameStates} from "../enums/GameStates";
import {Platforms} from "../enums/Platforms";
import axios from "axios";

let name = ref("");
let imageURL = ref("");
let state = ref(GameStates.NotStarted);
let platform = ref(Platforms.Playstation);


const emits = defineEmits(['closeModal']);
const props = defineProps<{
  modalActive: boolean
}>();


function emitCloseModal() {
  emits('closeModal');
}

function submitForm() {
  const response = axios.post(Constants.API_URL, {
    name: name.value,
    platform: platform.value,
    imageURL: imageURL.value,
    state: state.value
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });

}

</script>

<template>

  <motion.div v-if="modalActive"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1  }"
              :exit="{ opacity: 0 }"
              class="absolute left-0 top-0 flex flex-col h-screen w-full bg-modalBackground items-center justify-center z-10">
    <AnimatePresence>
      <motion.div :initial="{ opacity: 0, y: -1000 }"
                  :animate="{ opacity: 1, y: 0  }"
                  class="flex flex-col items-center justify-center bg-cardBackground z-10 rounded-md p-4">
        <div class="flex flex-row items-center justify-end w-full">
          <img :src="Constants.CLOSE_CIRCLED_ICON_URL"
               alt=""
               class="w-8 h-8 hover:cursor-pointer"
               @click="emitCloseModal"/>
        </div>
        <form class="modal-form" @submit.prevent="submitForm">
          <div class="flex flex-col items-center justify-center w-full">
            <!-- Name and Image Link section -->
            <div class="flex flex-row items-center justify-center w-full">
              <div class="m-4">
                <label for="name" class="my-1 block text-sm font-medium text-gray-700 dark:text-gray-100">Name</label>
                <input id="name" v-model="name" class="bg-background border border-primary rounded-md p-2">
              </div>

              <div class="m-4">
                <label for="image" class="my-1 block text-sm font-medium text-gray-700 dark:text-gray-100">Image
                  Link</label>
                <input id="image" v-model="imageURL" class="bg-background border border-primary rounded-md p-2">
              </div>
            </div>

            <!-- Game State and Platform section -->

            <div class="flex flex-col items-center justify-between w-full">
              <!-- Game State selection -->
              <div class="game-state-container m-4">
                <label class="mb-3 block text-base font-medium text-text">State</label>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input type="radio" name="state" id="state-in-progress" :value="GameStates.InProgress"
                           class="h-5 w-5" v-model="state"/>
                    <label for="state-in-progress" class="pl-3 text-base font-medium text-text">Playing</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="state" id="state-not-started" :value="GameStates.NotStarted"
                           class="h-5 w-5" v-model="state"/>
                    <label for="state-not-started" class="pl-3 text-base font-medium text-text">Not Started</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="state" id="state-finished" :value="GameStates.Finished" class="h-5 w-5"
                           v-model="state"/>
                    <label for="state-finished" class="pl-3 text-base font-medium text-text">Complete</label>
                  </div>
                </div>
              </div>

              <!-- Platform selection -->
              <div class="game-platform-container m-4">
                <label class="mb-3 block text-base font-medium text-text">Platform</label>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platform-playstation" :value="Platforms.Playstation"
                           class="h-5 w-5" v-model="platform"/>
                    <label for="platform-playstation" class="pl-3 text-base font-medium text-text">Playstation</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platform-xbox" :value="Platforms.Xbox" class="h-5 w-5"
                           v-model="platform"/>
                    <label for="platform-xbox" class="pl-3 text-base font-medium text-text">Xbox</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platform-pc" :value="Platforms.PC" class="h-5 w-5"
                           v-model="platform"/>
                    <label for="platform-pc" class="pl-3 text-base font-medium text-text">PC</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platform-nintendo" :value="Platforms.Nintendo"
                           class="h-5 w-5" v-model="platform"/>
                    <label for="platform-nintendo" class="pl-3 text-base font-medium text-text">Nintendo</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Submit button -->
            <div class="mt-4">
              <Button :selected-colour="Colours.Primary" button-label="Save"/>
            </div>
          </div>
        </form>

      </motion.div>
    </AnimatePresence>
  </motion.div>

</template>

<style scoped>

</style>