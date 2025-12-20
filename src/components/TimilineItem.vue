<script setup>
import { ref } from 'vue';
import BaseSelect from './BaseSelect.vue';
import { isTimeLineItemValid } from '@/validators';
import TimelineHour from './TimelineHour.vue';

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
});

const options = [
  {
    value: 1,
    label: 'Reading',
  },
  {
    value: 2,
    label: 'Training',
  },
  {
    value: 3,
    label: 'Coding',
  },
];

const selectedActivityId = ref(2);
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <div class="flex gap-2">
      <BaseSelect
        :selected="selectedActivityId"
        :options="options"
        placeholder="Rest"
        @select="selectedActivityId = $event"
      />
    </div>
  </li>
</template>
