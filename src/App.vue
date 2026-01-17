<script setup>
import { PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import TheTimeLine from './pages/TheTimeLine.vue';
import { computed, provide, ref } from 'vue';
import {
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
  generatePeriodSelectOptions,
} from './functions';
import { currentPage } from './router';

const activities = ref(generateActivities());
const timelineItems = ref(generateTimelineItems(activities.value));
const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value));

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
  <TheHeader />
  <main class="grow flex flex-col">
    <TheTimeLine
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNavigation />
</template>
