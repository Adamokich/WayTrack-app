<script setup>
import TimilineItem from '@/components/TimilineItem.vue';
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constants';
import { isValidPage, validateTimelineItems } from '@/validators';
import { nextTick, useTemplateRef, watchPostEffect } from 'vue';

const { timelineItems, currentPage } = defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems,
  },
  currentPage: {
    required: true,
    type: String,
    validator: isValidPage,
  },
});

const timelineItemRefs = useTemplateRef('timelineItemRefs');

watchPostEffect(() => {
  if (currentPage === PAGE_TIMELINE) scrollToHour(null, false);
});

async function scrollToHour(hour = null, isSmooth = true) {
  await nextTick();

  hour ??= new Date().getHours();
  const options = { behavior: isSmooth ? 'smooth' : 'instant' };

  if (hour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView(options);
  } else {
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options);
  }
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
