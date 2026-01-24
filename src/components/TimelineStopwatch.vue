<script setup>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECOND,
} from '@/constants';
import BaseButton from './BaseButton.vue';
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline';
import { isTimeLineItemValid } from '@/validators';
import { ref, watch } from 'vue';
import { currentHour, formatSeconds } from '@/functions';
import { updateTimelineActivitySeconds } from '@/timeline-items';

const { timelineItem } = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
});

const seconds = ref(timelineItem.activitySeconds);
const isRunning = ref(false);
const isStartButtonDisabled = timelineItem.hour !== currentHour();

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineActivitySeconds(timelineItem.activitySeconds + 1, timelineItem);
    seconds.value++;
  }, MILLISECONDS_IN_SECOND);
}

function stop() {
  updateTimelineActivitySeconds(-seconds.value, timelineItem);
  clearInterval(isRunning.value);
  isRunning.value = false;
}

function reset() {
  stop();

  updateTimelineActivitySeconds(timelineItem.activitySeconds - seconds.value, timelineItem);
  seconds.value = 0;
}

watch(
  () => timelineItem.activityId,
  () => {
    updateTimelineActivitySeconds(timelineItem, seconds.value);
  },
);
</script>

<template>
  <div class="flex w-full items-center gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" @click="reset" :disabled="!seconds">
      <ArrowPathIcon class="h-5" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-show="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <PauseIcon class="h-5" />
    </BaseButton>
    <BaseButton
      v-show="!isRunning"
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="isStartButtonDisabled"
    >
      <PlayIcon class="h-5" />
    </BaseButton>
  </div>
</template>
