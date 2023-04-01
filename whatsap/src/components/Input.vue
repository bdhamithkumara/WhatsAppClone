<template>
    <div >
        <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div>
            <input
            :type="type"
            class="shadow-sm focus:ring-green-500 focus:border-green-500 black w-full sm:text-sm bordewr-gray-300 rounded-md"
            :placeholder="placeholder"
            v-bind="modelValue"
            @input="onUpdate"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  type: string;
  placeholder?: string;
  modelValue : string;
}

const emit = defineEmits(["update:modelValue"]);

function onUpdate(event:Event) {
    const target = event.target as HTMLInputElement;
    emit("update:modelValue",target.value); 
}

defineProps<Props>();


</script>