<script setup>
import TheHeaderTitle from './TheHeaderTitle.vue';
import TheHeaderProgress from './TheHeaderProgress.vue';

const emit = defineEmits(['goToPage']);
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheHeaderTitle @click="emit('goToPage', '#timiline')" />
    <TheHeaderProgress @click="emit('goToPage', '#progress')" />
  </header>
</template>
