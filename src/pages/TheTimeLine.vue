<script setup>
import TimilineItem from '@/components/TimilineItem.vue';

const { timelineItems } = defineProps({
  timelineItems: Object,
});
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimilineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
      />
    </ul>
  </div>
</template>
