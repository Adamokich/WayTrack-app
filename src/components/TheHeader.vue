<script setup>
import TheHeaderTitle from './TheHeaderTitle.vue';
import TheProgress from './TheHeaderProgress.vue';
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheHeaderTitle />
    <TheProgress />
  </header>
</template>
