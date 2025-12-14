<script setup>
import { PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import TheTimeLine from './pages/TheTimeLine.vue';
import { ref } from 'vue';

const currentPage = ref(normalizerPageHash());

function normalizerPageHash() {
  const hash = window.location.hash.slice(1);

  if ([PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS].includes(hash)) {
    return hash;
  }

  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}
</script>

<template>
  <TheHeader />
  <main class="grow flex flex-col">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNavigation :current-page="currentPage" @page="currentPage = $event" />
</template>
