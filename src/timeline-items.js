import { ref } from 'vue';
import { activities } from './activities';
import { HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants';

export const timelineItems = ref(generateTimelineItems());

export function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId;
}

export function updateTimelineActivitySeconds(seconds, timelineItem) {
  timelineItem.activitySeconds = seconds;
}

export function resetTimelineItemActivities(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null;
    }
  });
}

function generateTimelineItems() {
  const timelineItems = [];

  for (let hour = MIDNIGHT_HOUR; hour <= HOURS_IN_DAY; hour++) {
    timelineItems.push({
      hour,
      activityId: [0, 1, 2, 3, 4].includes(hour) ? activities.value[hour % 3].id : null,
      activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0,
    });
  }

  return timelineItems;
}

export function getTotalActivitySeconds(activity) {
  return timelineItems.value
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) => Math.round(timelineItem.activitySeconds + totalSeconds),
      0,
    );
}
