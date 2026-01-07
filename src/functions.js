import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  MINUTES_IN_HOUR,
  PAGE_TIMELINE,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTES,
} from './constants';
import { isNumberOrNull, isValidPage } from './validators';

export function normalizerPageHash() {
  const page = window.location.hash.slice(1);

  if (isValidPage(page)) {
    return page;
  }

  window.location.hash = PAGE_TIMELINE;

  return PAGE_TIMELINE;
}

export function normalizerSelectValue(value) {
  return isNumberOrNull(value) || isNaN(value) ? value : +value;
}

export function generateTimelineItems() {
  const timelineItems = [];

  for (let hour = MIDNIGHT_HOUR; hour <= HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: null,
    });
  }

  return timelineItems;
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }));
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR,
  }));
}

export function generatePeriodSelectOptions(periodsInMinutes) {
  return periodsInMinutes.map((periodMinutes) => ({
    value: periodMinutes * SECONDS_IN_MINUTES,
    label: generatePeriodSelectOptionsLabel(periodMinutes),
  }));
}

function generatePeriodSelectOptionsLabel(periodMinutes) {
  const hours = Math.floor(periodMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0);

  const minutes = (periodMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0);

  return `${hours}:${minutes}`;
}
