<script setup>
import { PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import TheTimeLine from './pages/TheTimeLine.vue';
import { ref } from 'vue';
import { normalizerPageHash, generateTimelineItems } from './functions';

const currentPage = ref(normalizerPageHash());
const timelineItems = generateTimelineItems();

function goToPage(page) {
  currentPage.value = page;
}
</script>

<template>
  <TheHeader @navigate="goToPage" />
  <main class="grow flex flex-col">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNavigation :current-page="currentPage" @navigate="goToPage" />
</template>
