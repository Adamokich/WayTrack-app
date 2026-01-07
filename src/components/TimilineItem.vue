<script setup>
import BaseSelect from './BaseSelect.vue';
import {
  isActivityValid,
  isTimeLineItemValid,
  validateActivities,
  validateSelectOptions,
} from '@/validators';
import TimelineHour from './TimelineHour.vue';
import { NULLABLE_ACTIVITY } from '@/constants';

const emit = defineEmits({
  selectActivity: isActivityValid,
});

const { timelineItem, activities } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
});

function selectActivity(id) {
  emit('selectActivity', findActivityById(id));
}

function findActivityById(id) {
  return activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY;
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <div class="flex gap-2">
      <BaseSelect
        :selected="timelineItem.activityId"
        :options="activitySelectOptions"
        placeholder="Rest"
        @select="selectActivity"
      />
    </div>
  </li>
</template>
