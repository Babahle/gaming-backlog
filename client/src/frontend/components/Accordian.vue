<script setup lang="ts">

defineProps<{
  checked: boolean,
  title: string
}>();

const emit = defineEmits(['filterSelected']);

const updateSelectedFilter = (filter: string): void => {
  emit('filterSelected', { filter });
};

</script>

<template>

  <div @click="updateSelectedFilter(title)" class="accordion flex flex-row items-center bg-background py-2 px-6 my-1 rounded-md cursor-pointer">
    <label class="ml-[20] w-6 h-6 border border-primary rounded-full">
      <input type="radio" name="gameFilter" checked class="hidden">
      <span v-if="checked" class="checkmark inline-block w-full h-full bg-primary  rounded-full"></span>
    </label>
    <span class="text-text mx-4">{{ title }}</span>
  </div>
</template>

<style scoped>

</style>