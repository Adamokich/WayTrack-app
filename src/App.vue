<script setup>
import { PAGE_ACTIVITIES, PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants';
import TheHeader from './components/TheHeader.vue';
import TheNavigation from './components/TheNavigation.vue';
import TheActivities from './pages/TheActivities.vue';
import TheProgress from './pages/TheProgress.vue';
import TheTimeLine from './pages/TheTimeLine.vue';
import { computed, ref } from 'vue';
import {
  normalizerPageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
} from './functions';

const currentPage = ref(normalizerPageHash());
const timelineItems = ref(generateTimelineItems());
const activities = ref(generateActivities());
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

function goToPage(page) {
  currentPage.value = page;
}

function setTimelineItemActivity(timelineItem, activity) {
  timelineItem.activityId = activity.id;
}

function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete;
}
</script>

<template>
  <TheHeader @navigate="goToPage" />
  <main class="grow flex flex-col">
    <TheTimeLine
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivityItem"
      @create-activity="createActivityItem"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNavigation :current-page="currentPage" @navigate="goToPage" />
</template>
