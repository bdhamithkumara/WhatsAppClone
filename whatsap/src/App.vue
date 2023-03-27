

<template>
  <main class="w-screen h-screen bg-gray-100 flex">
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { account  } from './api';


onMounted(() => {
  // Register User
// account.create(
//     'unique()',
//     'me12@example.com',
//     'pas1sword',
//     'Jane2 Doe'
// ).then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// });
})

</script>

