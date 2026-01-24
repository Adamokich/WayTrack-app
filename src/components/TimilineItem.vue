<script setup>
import BaseSelect from './BaseSelect.vue';
import { isTimeLineItemValid, isUndefined } from '@/validators';
import TimelineHour from './TimelineHour.vue';
import TimelineStopwatch from './TimelineStopwatch.vue';
import { setTimelineItemActivity } from '@/timeline-items';
import { activitySelectOptions } from '@/activities';

const emit = defineEmits({
  scrollToHour: isUndefined,
});

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
});
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" @click.prevent="emit('scrollToHour')" />
    <div class="flex gap-2">
      <BaseSelect
        :selected="timelineItem.activityId"
        :options="activitySelectOptions"
        placeholder="Rest"
        @select="setTimelineItemActivity(timelineItem, $event)"
      />
    </div>
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
