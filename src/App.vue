<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

const navItems = ['timeline', 'activities', 'progress'];
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#" class="font-bold text-2xl">WayTrack</a>
    <a href="#" class="text-sm">
      <div v-if="true" class="flex items-center gap-1">
        Day complete
        <CheckCircleIcon class="w-7 h-7 text-green-500" />
      </div>

      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
  <main class="grow flex flex-col"></main>
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

<style scoped></style>
