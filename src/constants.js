import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
import { generatePeriodSelectOptions } from './functions';

export const PAGE_TIMELINE = 'timeline';
export const PAGE_ACTIVITIES = 'activities';
export const PAGE_PROGRESS = 'progress';

export const MIDNIGHT_HOUR = 0;
export const HOURS_IN_DAY = 24;
export const SECONDS_IN_MINUTES = 60;
export const MINUTES_IN_HOUR = 60;
export const SECONDS_IN_HOUR = SECONDS_IN_MINUTES * MINUTES_IN_HOUR;

const PERIODS_IN_MINUTES = [15, 30, 45, 60, 90, 120, 150, 180, 210];

export const BUTTON_TYPE_DANGER = 'danger';
export const BUTTON_TYPE_NEUTRAL = 'neutral';
export const BUTTON_TYPE_PRIMARY = 'primary';

export const BUTTON_TYPES = [BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL, BUTTON_TYPE_PRIMARY];

export const NULLABLE_ACTIVITY = { id: null };

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
};

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIODS_IN_MINUTES);
