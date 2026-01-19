<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants';
import { isActivityValid } from '@/validators';
import { TrashIcon } from '@heroicons/vue/24/outline';
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue';
import { deleteActivityItem, setActivitySecondsToComplete } from '@/activities';
import { resetTimelineItemActivities } from '@/timeline-items';

const { activityItem } = defineProps({
  activityItem: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
});

function deleteAndResetActivityItem(activity) {
  resetTimelineItemActivities(activity);
  deleteActivityItem(activity);
}
</script>

<template>
  <li class="flex flex-col gap-2 p-4 font-mono">
    <div class="flex items-center gap-2">
      <BaseButton @click="deleteAndResetActivityItem(activityItem)" :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activityItem.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        placeholder="hh:mm"
        :selected="activityItem.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="setActivitySecondsToComplete(activityItem, $event)"
      />
      <ActivitySecondsToComplete v-if="activityItem.secondsToComplete" :activity="activityItem" />
    </div>
  </li>
</template>
