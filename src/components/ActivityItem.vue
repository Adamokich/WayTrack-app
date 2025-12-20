<script setup>
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants';
import { isActivityValid } from '@/validators';
import { TrashIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const { activityItem } = defineProps({
  activityItem: {
    required: true,
    type: String,
    validator: isActivityValid,
  },
});

const secondsToComplete = ref(null);
</script>

<template>
  <li class="flex flex-col gap-2 p-4 font-mono">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activityItem }}</span>
    </div>
    <div>
      <BaseSelect
        placeholder="h:mmm"
        :selected="secondsToComplete"
        :options="PERIOD_SELECT_OPTIONS"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>
