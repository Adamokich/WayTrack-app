<script setup>
import TimilineItem from '@/components/TimilineItem.vue';
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constants';
import { currentPage } from '@/router';
import { validateTimelineItems } from '@/validators';
import { nextTick, useTemplateRef, watchPostEffect } from 'vue';

const { timelineItems } = defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems,
  },
});

const timelineItemRefs = useTemplateRef('timelineItemRefs');

watchPostEffect(() => {
  if (currentPage.value === PAGE_TIMELINE) scrollToHour(null, false);
});

async function scrollToHour(hour = null, isSmooth = true) {
  await nextTick();

  hour ??= new Date().getHours();

  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el;

  el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' });
}

defineExpose({ scrollToHour });
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimilineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        @scroll-to-hour="scrollToHour"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
