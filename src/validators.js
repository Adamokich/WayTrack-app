import { HOURS_IN_DAY, MIDNIGHT_HOUR, NAV_ITEMS } from './constants';

export function isValidPage(currentPage) {
  return Object.keys(NAV_ITEMS).includes(currentPage);
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every((item) => isTimeLineItemValid(item));
}

export function isTimeLineItemValid({ hour }) {
  return isValidHour(hour);
}

export function isValidHour(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY);
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid);
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value);
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label);
}

function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return value === undefined;
}

function isNumber(value) {
  return typeof value === 'number';
}

function isString(value) {
  return typeof value === 'string';
}

function isBetween(value, start, end) {
  return value >= start && value <= end;
}
