<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants';
import { isActivityValid, isNumber, isUndefined } from '@/validators';
import { TrashIcon } from '@heroicons/vue/24/outline';

const emit = defineEmits({
  delete: isUndefined,
  setSecondsToComplete: isNumber,
});

const { activityItem } = defineProps({
  activityItem: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
});
</script>

<template>
  <li class="flex flex-col gap-2 p-4 font-mono">
    <div class="flex items-center gap-2">
      <BaseButton @click="emit('delete')" :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activityItem.name }}</span>
    </div>
    <div>
      <BaseSelect
        placeholder="hh:mm"
        :selected="activityItem.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="emit('setSecondsToComplete', $event || 0)"
      />
    </div>
  </li>
</template>
