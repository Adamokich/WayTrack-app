<script setup>
import { PAGE_TIMELINE } from '@/constants';
import { navigate } from '@/router';
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" class="font-bold text-2xl" @click="navigate(PAGE_TIMELINE)"
    >WayTrack
  </a>
</template>
