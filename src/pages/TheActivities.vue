<script setup>
import { activities } from '@/activities';
import ActivityItem from '@/components/ActivityItem.vue';
import TheActivityForm from '@/components/TheActivityForm.vue';
</script>

<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem v-for="activity in activities" :key="activity.id" :activity-item="activity" />
    </ul>

    <div v-else class="text-5xl text-gray-600 grow flex items-center justify-center">
      У вас пока нет активностей:(
    </div>
    <TheActivityForm />
  </div>
</template>
