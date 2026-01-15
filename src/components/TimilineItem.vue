<script setup>
import BaseSelect from './BaseSelect.vue';
import { isTimeLineItemValid, isValidHour } from '@/validators';
import TimelineHour from './TimelineHour.vue';
import TimelineStopwatch from './TimelineStopwatch.vue';
import { inject } from 'vue';

const emit = defineEmits({
  scrollToHour: isValidHour,
});

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
});

const setTimelineItemActivity = inject('setTimelineItemActivity');
const activitySelectOptions = inject('activitySelectOptions');
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
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
