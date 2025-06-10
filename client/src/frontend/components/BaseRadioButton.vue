<script setup lang="ts">
import {useMotionValue, motion, useAnimate} from "motion-v"
import {MotionValue} from "motion";
const props = defineProps<{
  id: string,
  name: string,
  value: string,
  isChecked: boolean,
  label: string,
}>();
const [scope, animate] = useAnimate();
const buttonColour: MotionValue<string> = useMotionValue('#EE4266');

//TODO: add animation handling for buttons when the click event handler is called

function handleChange() {

}
</script>

<template>
  <label
      :for="id"
  >
    <input
        :id="id"
        :name="name"
        :value="value"
        type="radio"
        :checked="isChecked"
        @change="handleChange"
        class="hidden"
    />
    <motion.span class="ml-2 select-none inline-block px-2 py-2 cursor-pointer rounded-sm border-primary border"
          :class="isChecked ?'bg-primary' : 'bg-none' ">{{ label }}</motion.span>
  </label>
</template>

<style scoped>

</style>