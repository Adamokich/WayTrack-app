<script setup>
import TimilineItem from '@/components/TimilineItem.vue';
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constants';
import { currentHour } from '@/functions';
import { currentPage } from '@/router';
import { timelineItems } from '@/timeline-items';
import { nextTick, useTemplateRef, watchPostEffect } from 'vue';

const timelineItemRefs = useTemplateRef('timelineItemRefs');

watchPostEffect(() => {
  if (currentPage.value === PAGE_TIMELINE) scrollToHour(null, false);
});

async function scrollToHour(hour = null, isSmooth = true) {
  await nextTick();

  hour ??= currentHour();

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
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
