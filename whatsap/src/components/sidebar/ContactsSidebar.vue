<template>
    <header class="w-full bg-gray-100 h-16 flex items-center justify-between px-2">
        <Avatar/>
        <section class="flex items-center space-x-4 text-gray-500">
                <ClockIcon class="w-6 h-6 cursor-pointer"/>
                <PlusIcon class="w-6 h-6 cursor-pointer"/>
                <EllipsisHorizontalIcon class="w-6 h-6 cursor-pointer"/>
        </section>
    </header>
    <section class=" p-2 border-b border-b-gray-300">
        <input type="text" placeholder="Search or start new chat"/>
    </section>
</template>
<script setup lang="ts">
import Avatar from './Avatar.vue';
import { ClockIcon, PlusIcon , EllipsisHorizontalIcon } from '@heroicons/vue/24/solid';



</script>