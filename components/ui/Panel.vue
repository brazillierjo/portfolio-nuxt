<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Panel",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const closePanel = () => {
      emit("close");
    };

    return {
      closePanel,
    };
  },
});
</script>

<template>
  <div>
    <!-- Background Overlay -->
    <div v-if="isOpen" class="fixed inset-0 z-30 bg-black/50 transition-opacity duration-300" @click="closePanel" />

    <!-- Sliding Panel -->
    <Transition name="slide">
      <div
        v-if="isOpen"
        class="fixed right-0 top-0 z-40 h-full w-3/4 max-w-sm translate-x-0 bg-light-bg text-white transition-transform duration-200 dark:bg-dark-bg"
      >
        <div class="px-10 pt-28">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
