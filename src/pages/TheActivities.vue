<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import { TrashIcon } from '@heroicons/vue/24/outline';

const activities = ['Coding', 'Reading', 'Training'];

const periodSelecOptions = [
  {
    value: 15,
    label: '0:15',
  },
  {
    value: 20,
    label: '0:20',
  },
  {
    value: 25,
    label: '0:25',
  },
  {
    value: 30,
    label: '0:30',
  },
];
</script>

<template>
  <div>
    <ul class="divide-y">
      <li v-for="activity in activities" :key="activity" class="flex flex-col gap-2 p-4 font-mono">
        <div class="flex items-center gap-2">
          <BaseButton>
            <TrashIcon class="h-8" />
          </BaseButton>
          <span class="truncate text-xl">{{ activity }}</span>
        </div>
        <div>
          <BaseSelect placeholder="h:mmm" :options="periodSelecOptions" />
        </div>
      </li>
    </ul>
  </div>
</template>
