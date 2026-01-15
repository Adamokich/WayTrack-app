<script setup>
import { formatSeconds, getTotalActivitySeconds } from '@/functions';
import { isActivityValid } from '@/validators';
import { computed, inject } from 'vue';

const { activity } = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
});

const timelineItems = inject('timelineItems');

const classes = computed(
  () => `flex items-center rounded px-2 font-mono text-neutral-100 ${colorClasses.value}`,
);
const colorClasses = computed(() => (secondsDiff.value >= 0 ? 'bg-green-400' : 'bg-red-400'));
const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'));
const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`);

const secondsDiff = computed(
  () => getTotalActivitySeconds(activity, timelineItems) - activity.secondsToComplete,
);
</script>

<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>
