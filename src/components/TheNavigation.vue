<script setup>
import NavItem from './NavItem.vue';
import { PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants';
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

const { currentPage } = defineProps({
  currentPage: String,
});

const emit = defineEmits(['page']);

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
};
</script>

<template>
  <nav class="sticky bottom-0 bg-white z-20 border-t">
    <ul class="flex items-center justify-around">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('page', page)"
        ><component :is="icon" class="w-6 h-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
