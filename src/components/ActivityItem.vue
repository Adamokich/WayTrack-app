<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { BUTTON_TYPE_DANGER } from '@/constants';
import { isActivityValid } from '@/validators';
import { TrashIcon } from '@heroicons/vue/24/outline';
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue';
import { inject } from 'vue';

const { activityItem } = defineProps({
  activityItem: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
});

const deleteActivityItem = inject('deleteActivityItem');

const periodSelectOptions = inject('periodSelectOptions');
const setActivitySecondsToComplete = inject('setActivitySecondsToComplete');
</script>

<template>
  <li class="flex flex-col gap-2 p-4 font-mono">
    <div class="flex items-center gap-2">
      <BaseButton @click="deleteActivityItem(activityItem)" :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activityItem.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        placeholder="hh:mm"
        :selected="activityItem.secondsToComplete || null"
        :options="periodSelectOptions"
        @select="setActivitySecondsToComplete(activityItem, $event || 0)"
      />
      <ActivitySecondsToComplete v-if="activityItem.secondsToComplete" :activity="activityItem" />
    </div>
  </li>
</template>
