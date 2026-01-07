<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import TheActivityForm from '@/components/TheActivityForm.vue';
import { isActivityValid, isNumber, validateActivities } from '@/validators';

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
  setActivitySecondsToComplete(activity, secondsToComplete) {
    return [isActivityValid(activity), isNumber(secondsToComplete)].every(Boolean);
  },
});

const { activities } = defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
});

function setSecondsToComplete(activity, secondsToComplete) {
  emit('setActivitySecondsToComplete', activity, secondsToComplete);
}
</script>

<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity-item="activity"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>

    <div v-else class="text-5xl text-gray-600 grow flex items-center justify-center">
      У вас пока нет активностей:(
    </div>
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
