<script setup>
import { PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import TheTimeLine from './pages/TheTimeLine.vue';
import { ref } from 'vue';
import { normalizerPageHash } from './functions';

const currentPage = ref(normalizerPageHash());
</script>

<template>
  <TheHeader
    @go-to-timeline="currentPage = PAGE_TIMELINE"
    @go-to-progress="currentPage = PAGE_PROGRESS"
  />
  <main class="grow flex flex-col">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNavigation :current-page="currentPage" @page="currentPage = $event" />
</template>
