<script setup>
import { isValidHour } from '@/validators';

const { hour } = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isValidHour,
  },
});

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',
  hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500',
];

const formattedHour = `${hour.toString().padStart(2, '0')}:00`;
</script>

<template>
  <a href="#" :class="classes">{{ formattedHour }}</a>
</template>
