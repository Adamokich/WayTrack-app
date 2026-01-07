<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { BUTTON_TYPE_PRIMARY } from '@/constants';
import { id } from '@/functions';
import { isActivityValid } from '@/validators';
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { nextTick, ref } from 'vue';

const emit = defineEmits({
  submit: isActivityValid,
});

async function submit() {
  emit('submit', {
    name: activityName.value,
    id: id(),
    secondsToComplete: 0,
  });

  activityName.value = '';

  await nextTick();
  window.scrollTo(0, document.body.scrollHeight);
}

let activityName = ref('');
</script>

<template>
  <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4" @submit.prevent="submit">
    <input
      class="w-full rounded border px-4 text-xl"
      type="text"
      placeholder="ActivityName"
      v-model="activityName"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="activityName.trim() === ''">
      <PlusCircleIcon class="h-8" />
    </BaseButton>
  </form>
</template>
