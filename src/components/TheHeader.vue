<script setup>
import TheHeaderTitle from './TheHeaderTitle.vue';
import TheHeaderProgress from './TheHeaderProgress.vue';
import { isValidPage } from '@/validators';
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants';

const emit = defineEmits({
  navigate: isValidPage,
});
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheHeaderTitle @click="emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
