<script setup>
import { isValidPage } from '@/validators';
import NavItem from './NavItem.vue';
import { NAV_ITEMS } from '@/constants';

const { currentPage } = defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isValidPage,
  },
});

const emit = defineEmits({
  navigate: isValidPage,
});
</script>

<template>
  <nav class="sticky bottom-0 bg-white z-20 border-t">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
        ><component :is="icon" class="w-6 h-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
