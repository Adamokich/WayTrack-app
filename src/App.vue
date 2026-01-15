<script setup>
import { PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import TheTimeLine from './pages/TheTimeLine.vue';
import { computed, provide, ref, useTemplateRef } from 'vue';
import {
  normalizerPageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions,
} from './functions';

const currentPage = ref(normalizerPageHash());
const activities = ref(generateActivities());
const timelineItems = ref(generateTimelineItems(activities.value));
const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value));

const timeline = useTemplateRef('timeline');

function deleteActivityItem(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null;
    }
  });

  activities.value.splice(activities.value.indexOf(activity), 1);
}

function createActivityItem(activity) {
  activities.value.push(activity);
}

function goToPage(page) {
  if (page === PAGE_TIMELINE && currentPage.value === PAGE_TIMELINE) timeline.value.scrollToHour();

  if (page === PAGE_ACTIVITIES || page === PAGE_PROGRESS) document.body.scrollIntoView();

  currentPage.value = page;
}

function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId;
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete;
}

function updateTimelineActivitySeconds(seconds, timelineItem) {
  timelineItem.activitySeconds += seconds;
}

provide('updateTimelineItemActivitySeconds', updateTimelineActivitySeconds);
provide('timelineItems', timelineItems.value);
provide('activitySelectOptions', activitySelectOptions.value);
provide('periodSelectOptions', generatePeriodSelectOptions());
provide('setTimelineItemActivity', setTimelineItemActivity);
provide('setActivitySecondsToComplete', setActivitySecondsToComplete);
provide('createActivityItem', createActivityItem);
provide('deleteActivityItem', deleteActivityItem);
</script>

<template>
  <TheHeader @navigate="goToPage" />
  <main class="grow flex flex-col">
    <TheTimeLine
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :current-page="currentPage"
      ref="timeline"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNavigation :current-page="currentPage" @navigate="goToPage" />
</template>
