<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'button',
  },
  isDisabled: {
    type: Boolean,
  },
  variant: {
    type: String,
    default: 'primary',
  },
});

defineEmits(['click']);
</script>

<template>
  <button
    :type="type"
    :class="[
      'rounded px-4 py-2',
      isDisabled ? 'cursor-not-allowed bg-gray-300 text-gray-500' : '',
      variantClasses,
    ]"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
const variantClasses = computed(() => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-500 text-white hover:bg-blue-600';
    case 'secondary':
      return 'bg-gray-500 text-white hover:bg-gray-600';
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600';
    default:
      return '';
  }
});
</script>
