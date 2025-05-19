<script setup lang="ts">
import {ref} from "vue";
import {motion, AnimatePresence} from "motion-v"
import {Constants} from "../constants/Constants";
import Button from "./Button.vue";
import {Colours} from "../enums/Colours";

let name = ref("");
let imageURL = ref("");
let state = ref("notPlaying");
let platform = ref("");


const emits = defineEmits(['closeModal']);
const props = defineProps<{
  modalActive: boolean
}>();


function emitCloseModal() {
  emits('closeModal');
}

function submitForm() {
  console.log(`name - ${name.value}, imageURL - ${imageURL.value}, state - ${state.value}, platform - ${platform.value}`)
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
        <form class="modal-form">
          <div class="flex flex-col items-center justify-center w-full">
            <div class="flex flex-row items-center justify-center w-full">
              <div class="m-4">
                <label for="name" class="my-1 block text-sm font-medium text-gray-700 dark:text-gray-100">Name</label>
                <input id="name" v-model="name" class="bg-background border border-primary rounded-md p-2">
              </div>

              <div class="m-4">
                <label for="image"
                       class="my-1  block text-sm font-medium text-gray-700 dark:text-gray-100">Image Link</label>
                <input id="image" v-model="imageURL" class="bg-background border border-primary rounded-md p-2">
              </div>

            </div>
            <div class="flex flex-col items-center justify-between w-full">
              <div class="game-state-container m-4">
                <label class="mb-3 block text-base font-medium text-text">
                  State
                </label>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input type="radio" name="state" id="radioButton1" value="playing" class="h-5 w-5" v-model="state"/>
                    <label for="radioButton1" class="pl-3 text-base font-medium text-text">
                      Playing
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="state" id="radioButton2" value="notStarted" class="h-5 w-5" v-model="state"/>
                    <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                      Not Started
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="state" id="radioButton2" value="complete" class="h-5 w-5" v-model="state"/>
                    <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                      Complete
                    </label>
                  </div>
                </div>
              </div>


              <div class="game-platform-container m-4">
                <label class="mb-3 block text-base font-medium text-text">
                  Platform
                </label>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platformRadioButton1" class="h-5 w-5" v-model="platform"/>
                    <label for="radioButton1" class="pl-3 text-base font-medium text-text">
                      Playstation
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platformRadioButton2" class="h-5 w-5" v-model="platform"/>
                    <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                      Xbox
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platformRadioButton3" class="h-5 w-5" v-model="platform"/>
                    <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                      PC
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input type="radio" name="platform" id="platformRadioButton4" class="h-5 w-5" v-model="platform"/>
                    <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                      Nintendo
                    </label>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </form>

        <div>
          <Button :selected-colour="Colours.Primary" button-label="Save" @button-clicked="submitForm"/>
        </div>
      </motion.div>
    </AnimatePresence>
  </motion.div>

</template>

<style scoped>

</style>