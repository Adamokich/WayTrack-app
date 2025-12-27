<script setup>
import BaseButton from '@/components/BaseButton.vue';
import { BUTTON_TYPE_PRIMARY } from '@/constants';
import { isActivityValid } from '@/validators';
import { PlusCircleIcon } from '@heroicons/vue/24/outline';
import { nextTick, ref } from 'vue';

const emit = defineEmits({
  submit: isActivityValid,
});

async function submit() {
  emit('submit', activity.value);

  activity.value = '';

  await nextTick();
  window.scrollTo(0, document.body.scrollHeight);
}

let activity = ref('');
</script>

<template>
  <form class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4" @submit.prevent="submit">
    <input
      class="w-full rounded border px-4 text-xl"
      type="text"
      placeholder="ActivityName"
      v-model="activity"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="activity.trim() === ''">
      <PlusCircleIcon class="h-8" />
    </BaseButton>
  </form>
</template>
