<script setup>
import ActivityItem from '@/components/ActivityItem.vue';
import TheActivityForm from '@/components/TheActivityForm.vue';
import { isActivityValid, validateActivities } from '@/validators';

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

    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
