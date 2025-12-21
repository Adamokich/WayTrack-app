<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import BaseButton from '@/components/BaseButton.vue';
import { BUTTON_TYPE_PRIMARY } from '@/constants';
import { isActivityValid, validateActivities } from '@/validators';
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
});

const { activities } = defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
});

let newActivity = ref('');
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity-item="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>

    <form
      class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
      @submit.prevent="emit('createActivity', newActivity)"
    >
      <input
        class="w-full rounded border px-4 text-xl"
        type="text"
        placeholder="ActivityName"
        :value="newActivity"
        @input="newActivity = $event.target.value"
      />
      <BaseButton :type="BUTTON_TYPE_PRIMARY">
        <PlusCircleIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>
