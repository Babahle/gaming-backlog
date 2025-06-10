<script setup lang="ts">
const props = defineProps<{
  id: string,
  name: string,
  value: string,
  isChecked: boolean,
  label: string,
}>();

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
    <span class="ml-2 select-none inline-block px-2 py-2 cursor-pointer rounded-sm border-primary border"
          :class="isChecked ?'bg-primary' : 'bg-none' ">{{ label }}</span>
  </label>
</template>

<style scoped>

</style>