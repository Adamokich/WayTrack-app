<script setup>
import { HOURS_IN_DAY } from '@/constants';
import BaseSelect from './BaseSelect.vue';

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator({ hour }) {
      return typeof hour === 'number' && hour >= 0 && hour <= HOURS_IN_DAY;
    },
  },
});

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',
  timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500',
];

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

const selectedActivityId = 2;
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <div class="flex gap-2">
      <BaseSelect :selected="selectedActivityId" :options="options" placeholder="Rest" />
    </div>
  </li>
</template>
