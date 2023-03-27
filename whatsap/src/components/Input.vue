<template>
    <div >
        <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div>
            <input
            :type="type"
            class="shadow-sm focus:ring-green-500 focus:border-green-500 black w-full sm:text-sm bordewr-gray-300 rounded-md"
            :placeholder="placeholder"
            v-model="model"
            @input="$emit('update:modelValue', model)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  label?: string;
  type: string;
  placeholder?: string;
}
defineProps<Props>();
const model = ref();

</script>