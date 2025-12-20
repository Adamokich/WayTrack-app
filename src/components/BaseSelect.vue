<script setup>
import { validateSelectOptions, isUndefinedOrNull, isNumberOrNull } from '@/validators';
import BaseButton from './BaseButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';

const emit = defineEmits({
  select: isNumberOrNull,
});

const { options, placeholder, selected } = defineProps({
  placeholder: {
    required: true,
    type: String,
  },
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
});

const isNotSelected = computed(() => isUndefinedOrNull(selected));
</script>

<template>
  <BaseButton @click="emit('select', null)">
    <XMarkIcon class="h-8" />
  </BaseButton>
  <select
    class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
    @change="emit('select', +$event.target.value)"
  >
    <option :selected="isNotSelected" disabled value="">
      {{ placeholder }}
    </option>
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
