<script setup lang="ts">
import {motion} from "motion-v"
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useGamesFilterStore} from "../stores/gamesFilter";

let isOpen = ref(false);
const root = ref<HTMLElement | null>(null);
const selectedOption = defineModel({required: true});
const filterStore = useGamesFilterStore();


const props = defineProps<{
  options: {
    options: Array<string>
  }
}>()

const emits = defineEmits<{
  (e: 'filterSelected', payload: { filter: string }): void;
}>();



function selectOption(selectedItem: string) {
  if(!selectedItem) return;
  isOpen.value = false;
  filterStore.setSelectedFilter(selectedItem);
  selectedOption.value = selectedItem;
  emits('filterSelected', { filter: selectedItem });
}

function toggleDropDown() {
  isOpen.value = !isOpen.value;
}

function closeDropDown() {
  isOpen.value = false;
}

// Click outside handler
/**
 * Handles the logic to detect and respond when a click event occurs outside a specified element.
 *
 * @param {MouseEvent} event - The mouse event triggered by clicking.
 * @return {void} Does not return a value.
 */
function onClickOutside(event: MouseEvent) {
  if (!isOpen.value) return;
  const target = event.target as Node | null;
  if (root.value && target && !root.value.contains(target)) {
    closeDropDown();
  }
}


// Register/unregister global listener
onMounted(() => {
  document.addEventListener('click', onClickOutside, {capture: true});
});
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside, {capture: true});
});


</script>

<template>
  <!-- Wrapper provides positioning context -->
  <div ref="root" class="relative inline-block text-left hover:cursor-pointer">
    <!-- Trigger Button -->
    <button
        class="bg-cardBackground p-4 rounded-md border border-primary"
        @click="toggleDropDown"
    >
      {{ selectedOption || 'Select Filter' }}
    </button>

    <!-- Dropdown Menu (appears below button) -->
    <motion.div
        v-if="isOpen"
        :initial="{ opacity: 0, scaleY: 0 }"
        :animate="{ opacity: 1, scaleY: 1 }"
        class="absolute left-0 top-12 mt-2 w-40 origin-top bg-cardBackground rounded-md shadow-lg z-50"
    >
      <ul class="flex flex-col items-start text-left cursor-pointer">
        <li
            v-for="option in props.options.options"
            :key="option"
            class="w-full px-4 py-2 hover:bg-background rounded-md"
            @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </motion.div>
  </div>
</template>

<style scoped>

</style>