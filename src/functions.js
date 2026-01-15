import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  MILLISECONDS_IN_SECOND,
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

export function generateTimelineItems(activities) {
  const timelineItems = [];

  for (let hour = MIDNIGHT_HOUR; hour <= HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: [0, 1, 2, 3, 4].includes(hour) ? activities[hour % 3].id : null,
      activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0,
    });
  }

  return timelineItems;
}

export function getTotalActivitySeconds(activity, timelineItems) {
  return timelineItems
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds),
      0,
    );
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

export function generatePeriodSelectOptions() {
  const periodInMinutes = [15, 30, 45, 60, 90, 120, 150, 180, 210];
  return periodInMinutes.map((periodMinutes) => ({
    value: periodMinutes * SECONDS_IN_MINUTES,
    label: generatePeriodSelectOptionsLabel(periodMinutes),
  }));
}

export function formatSeconds(seconds) {
  const date = new Date();

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND);

  const utc = date.toUTCString();

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf('G') - 1);
}

function generatePeriodSelectOptionsLabel(periodMinutes) {
  const hours = Math.floor(periodMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, 0);

  const minutes = (periodMinutes % MINUTES_IN_HOUR).toString().padStart(2, 0);

  return `${hours}:${minutes}`;
}
