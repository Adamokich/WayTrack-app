<script setup>
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '@/validators';
import BaseButton from './BaseButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue';
import { BUTTON_TYPE_NEUTRAL } from '@/constants';
import { normalizerSelectValue } from '@/functions';

const emit = defineEmits({
  select: isSelectValueValid,
});

const { options, placeholder, selected } = defineProps({
  placeholder: {
    required: true,
    type: String,
  },
  selected: [String, Number],
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
});

function select(value) {
  emit('select', normalizerSelectValue(value));
}

const isNotSelected = computed(() => isUndefinedOrNull(selected));
</script>

<template>
  <BaseButton @click="select(null)" :type="BUTTON_TYPE_NEUTRAL">
    <XMarkIcon class="h-8" />
  </BaseButton>
  <select
    class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
    @change="select($event.target.value)"
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
