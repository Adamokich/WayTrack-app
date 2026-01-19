import { MILLISECONDS_IN_SECOND, MINUTES_IN_HOUR, SECONDS_IN_MINUTES } from './constants';
import { isNumberOrNull } from './validators';

export function normalizerSelectValue(value) {
  return isNumberOrNull(value) || isNaN(value) ? value : +value;
}

export function currentHour() {
  return new Date().getHours();
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
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
