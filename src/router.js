import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants';
import { ref, useTemplateRef } from 'vue';
import { isValidPage } from './validators';

export const currentPage = ref(normalizerPageHash());
export const timelineRef = useTemplateRef('timeline');

function normalizerPageHash() {
  const page = window.location.hash.slice(1);

  if (isValidPage(page)) {
    return page;
  }

  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}

export function navigate(page) {
  if (page === PAGE_TIMELINE && currentPage.value === PAGE_TIMELINE)
    timelineRef.value.scrollToHour();

  if (page === PAGE_ACTIVITIES || page === PAGE_PROGRESS) document.body.scrollIntoView();

  currentPage.value = page;
}
