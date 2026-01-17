<script setup>
import { currentPage, navigate } from '@/router';
import { isNavItemValid } from '@/validators';
import { computed } from 'vue';

const { navItem } = defineProps({
  navItem: {
    required: true,
    type: Object,
    validator: isNavItemValid,
  },
});

const classes = computed(() => [
  'flex flex-col items-center text-xs p-2 capitalize',
  { 'bg-gray-200 pointer-events-none': navItem.page === currentPage.value },
]);
</script>

<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="navigate(navItem.page)">
      <component :is="navItem.icon" class="w-6 h-6" /> {{ navItem.page }}
    </a>
  </li>
</template>
