<script setup lang="ts">
const props = defineProps<{
  id: string,
  name: string,
  value: string,
  isChecked: boolean,
  disabled: boolean,
  label: string,
}>();

function handleChange() {

}
</script>

<template>
  <label
      :for="id"
      class="flex items-center cursor-pointer text-gray-700 dark:text-gray-300 mb-2"
      :class="{ 'opacity-50 cursor-not-allowed': disabled }"
  >
    <input
        :id="id"
        :name="name"
        :value="value"
        type="radio"
        :checked="isChecked"
        @change="handleChange"
        :disabled="disabled"
        class="
        form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out
        focus:ring-indigo-500 focus:ring-2 focus:ring-opacity-50
        rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700
        checked:bg-indigo-600 checked:border-transparent
      "
    />
    <span class="ml-2 select-none">{{ label }}</span>
  </label>
</template>

<style scoped>

</style>