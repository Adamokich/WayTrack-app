<script setup>
import TimilineItem from '@/components/TimilineItem.vue';
import {
  isActivityValid,
  isTimeLineItemValid,
  validateActivities,
  validateSelectOptions,
  validateTimelineItems,
} from '@/validators';

const emit = defineEmits({
  setTimelineItemActivity(timelineItem, activity) {
    return [isTimeLineItemValid(timelineItem), isActivityValid(activity)].every(Boolean);
  },
});

const { timelineItems } = defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
});
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimilineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
        :activities="activities"
        @select-activity="emit('setTimelineItemActivity', timelineItem, $event)"
      />
    </ul>
  </div>
</template>
