<script setup lang="ts">
import ActivityItem from '@/components/ActivityItem.vue';
import { validateActivities } from '@/validators';

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
      <ActivityItem v-for="activity in activities" :key="activity" :activity-item="activity" />
    </ul>
  </div>
</template>
