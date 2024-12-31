<script setup lang="ts">
import { IExperience } from "~/utils/experiences";

defineProps({
  items: {
    type: Array as () => IExperience[],
    required: true,
  },
});
</script>

<template>
  <div class="relative flex flex-col space-y-8">
    <div v-for="(item, index) in items" :key="index" class="flex items-start" v-motion-roll-visible-left>
      <!-- Timeline Dot -->
      <div class="flex-shrink-0">
        <div class="relative z-10 h-4 w-4 rounded-full bg-primary" />

        <div v-if="index < items.length - 1" class="absolute left-2 top-0 h-full w-0.5 bg-tertiary" />
      </div>

      <!-- Content -->
      <div class="ml-8 text-left">
        <!-- Years -->
        <p class="text-sm text-icons">{{ item.years }}</p>

        <!-- Title and Company -->
        <h3 class="text-lg font-semibold">
          {{ item.title }} <span class="text-primary">at {{ item.company }}</span>
        </h3>

        <!-- Description -->
        <p class="mt-2 text-sm text-text">
          {{ item.description }}
        </p>

        <!-- Technologies -->
        <div v-if="item.technologies && item.technologies.length" class="mt-5">
          <p class="text-sm font-semibold text-icons">Technologies:</p>
          <ul class="mt-1 flex flex-wrap gap-2">
            <li
              v-for="(tech, techIndex) in item.technologies"
              :key="techIndex"
              class="rounded-lg bg-gray-200 px-2 py-1 text-xs text-secondary"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
