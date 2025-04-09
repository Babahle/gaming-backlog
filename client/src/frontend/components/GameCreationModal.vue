<script setup lang="ts">
import {ref} from "vue";

let name = ref("");
let imageURL = ref("");
let state = ref("");
let platform = ref("");
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full">
    <form action="" class="">
      <div class="flex flex-col items-center justify-center w-full">
        <div class="flex flex-row items-center justify-center w-full">
          <div class="m-4">
            <label for="name" class="my-1 block text-sm font-medium text-gray-700 dark:text-gray-100">Name</label>
            <input id="name" v-model="name" class="bg-background border border-primary rounded-md p-2">
          </div>

          <div class="m-4">
            <label for="image" class="my-1  block text-sm font-medium text-gray-700 dark:text-gray-100">Image</label>
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
                <input type="radio" name="radio1" id="radioButton1" class="h-5 w-5" v-model="state"/>
                <label for="radioButton1" class="pl-3 text-base font-medium text-text">
                  Playing
                </label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" v-model="state"/>
                <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                  Not Started
                </label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" v-model="state"/>
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
                <input type="radio" name="radio1" id="radioButton1" class="h-5 w-5" v-model="platform"/>
                <label for="radioButton1" class="pl-3 text-base font-medium text-text">
                  Playstation
                </label>
              </div>
              <div class="flex items-center">
                <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" v-model="platform"/>
                <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                  Xbox
                </label>
              </div>

              <div class="flex items-center">
                <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" v-model="platform"/>
                <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                  PC
                </label>
              </div>

              <div class="flex items-center">
                <input type="radio" name="radio1" id="radioButton2" class="h-5 w-5" v-model="platform"/>
                <label for="radioButton2" class="pl-3 text-base font-medium text-text">
                  Nintendo
                </label>
              </div>
            </div>
          </div>

        </div>

      </div>
    </form>
  </div>
</template>

<style scoped>

</style>