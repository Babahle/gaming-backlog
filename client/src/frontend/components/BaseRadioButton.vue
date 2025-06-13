<script setup lang="ts">
import {motion} from "motion-v"
import {computed, ComputedRef, ModelRef} from "vue";

const props = defineProps<{
	name: string,
	value: string,
}>();

const emit = defineEmits(['update:modelValue']);

const modelValue: ModelRef<string> = defineModel<string>();
const isChecked: ComputedRef<boolean> = computed((): boolean => {
	return modelValue.value === props.value.valueOf();
})

function handleChange() {
	if ( modelValue.value !== props.value ) {
		emit('update:modelValue', props.value);
	}
}
</script>

<template>
	<label
			:for="value"
	>
		<input
				:id="value"
				:name="name"
				:value="value"
				type="radio"
				:checked="isChecked"
				@change="handleChange"
				class="hidden"
		/>
		<motion.span @click="handleChange"
								 :initial="{scale : 1}"
								 :animate="{scale: isChecked ? 1.05 : 1, backgroundColor: isChecked ? '#EE4266' : 'transparent',}"
								 :transition="{duration: 0.2, type: 'spring'}"
								 class="ml-2 select-none inline-block px-2 py-2 cursor-pointer rounded-sm border-primary border"
								 :class="isChecked ?'bg-primary' : 'bg-none' ">{{ value }}
		</motion.span>
	</label>
</template>

<style scoped>

</style>