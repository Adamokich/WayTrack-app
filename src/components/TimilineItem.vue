<script setup>
import { ref } from 'vue';
import BaseSelect from './BaseSelect.vue';
import { isTimeLineItemValid, validateSelectOptions } from '@/validators';
import TimelineHour from './TimelineHour.vue';

const { timelineItem, activitySelectOptions } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
});

const selectedActivityId = ref(0);
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <div class="flex gap-2">
      <BaseSelect
        :selected="selectedActivityId"
        :options="activitySelectOptions"
        placeholder="Rest"
        @select="selectedActivityId = $event"
      />
    </div>
  </li>
</template>
