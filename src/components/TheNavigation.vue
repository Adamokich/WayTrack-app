<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

const navItems = ['timeline', 'activities', 'progress'];
</script>

<template>
  <nav class="sticky bottom-0 bg-white z-20 border-t">
    <ul class="flex items-center justify-around">
      <li v-for="page in navItems" :key="page" class="flex-1">
        <a :href="`#${page}`" class="flex flex-col items-center text-xs p-2 capitalize">
          <ClockIcon v-if="page === 'timeline'" class="w-6 h-6" />
          <ListBulletIcon v-else-if="page === 'activities'" class="w-6 h-6" />
          <ChartBarIcon v-else class="w-6 h-6" />
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
