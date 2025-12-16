<script setup>
import BaseButton from './BaseButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const { options, placeholder } = defineProps({
  placeholder: String,
  selected: Number,
  options: Object,
});
</script>

<template>
  <BaseButton>
    <component :is="XMarkIcon" />
  </BaseButton>
  <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
    <option selected disabled value="">{{ placeholder }}</option>
    <option
      v-for="{ value, label } in options"
      :key="value"
      :value="value"
      :selected="value === selected"
    >
      {{ label }}
    </option>
  </select>
</template>
