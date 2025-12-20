import { HOURS_IN_DAY, MIDNIGHT_HOUR, PAGE_TIMELINE } from './constants';
import { isValidPage } from './validators';

export function normalizerPageHash() {
  const page = window.location.hash.slice(1);

  if (isValidPage(page)) {
    return page;
  }

  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}

export function generateTimelineItems() {
  const timelineItems = [];

  for (let hour = MIDNIGHT_HOUR; hour <= HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour });
  }

  return timelineItems;
}
