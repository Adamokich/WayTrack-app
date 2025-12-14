<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="flex flex-col items-center text-xs p-2 capitalize">
      <slot></slot>
    </a>
  </li>
</template>
