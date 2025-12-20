<script>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from '@/constants';

const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enable:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: 'bg-red-500 enable:hover:bg-red-600 text-white',
};
</script>

<script setup>
import { isButtonTypeValid } from '@/validators';

defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validator: isButtonTypeValid,
  },
});
</script>

<template>
  <button
    :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer`"
  >
    <slot></slot>
  </button>
</template>
