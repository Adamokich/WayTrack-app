<script>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
} from '@/constants';
import { computed } from 'vue';

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enable:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enable:hover:bg-red-600 text-white',
  [BUTTON_TYPE_PRIMARY]: 'bg-purple-500 enable:hover:bg-purple-200 text-white',
  [BUTTON_TYPE_SUCCESS]: 'bg-green-500 enable:hover:bg-green-200 text-white',
  [BUTTON_TYPE_WARNING]: 'bg-yellow-500 enable:hover:bg-green-200 text-white',
};
</script>

<script setup>
import { isButtonTypeValid } from '@/validators';

const { type } = defineProps({
  type: {
    default: BUTTON_TYPE_PRIMARY,
    type: String,
    validator: isButtonTypeValid,
  },
});

const classes = computed(
  () =>
    `${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer`,
);
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
