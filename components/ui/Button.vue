<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  onClick: {
    type: Function,
  },
  classes: {
    type: String,
  },
});
</script>

<template>
  <button
    :type="type"
    :class="[
      'flex items-center justify-center rounded-full border-2 border-primary bg-primary px-4 py-2 font-semibold text-secondary transition-all duration-150 hover:bg-transparent hover:text-primary lg:px-6 lg:py-3',
      classes,
    ]"
    @click="onClick"
  >
    <slot />
  </button>
</template>
