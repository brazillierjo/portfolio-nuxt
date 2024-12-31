<script setup lang="ts">
import type { IProject } from '~/hooks/useTranslatedProjects'

defineProps({
  project: {
    type: Object as () => IProject,
    required: true,
  },
})
</script>

<template>
  <div
    v-motion-slide-visible-once-bottom
    class="rounded-xl border border-tertiary p-6"
  >
    <div>
      <h3 class="text-left text-lg font-semibold">{{ project.title }}</h3>

      <p class="mt-3 text-left text-sm text-text">{{ project.description }}</p>

      <ul class="mt-5 flex flex-wrap gap-2">
        <li
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-md bg-text px-2 py-1 text-xs text-secondary"
        >
          {{ tech }}
        </li>
      </ul>

      <div class="mt-4 flex items-center gap-4">
        <a
          v-if="project.appUrl !== ''"
          :href="project.appUrl"
          target="_blank"
          class="flex w-fit items-center justify-center gap-1 rounded-full border-2 border-primary bg-primary px-4 py-2 text-sm font-semibold text-secondary transition-all duration-150 hover:bg-transparent hover:text-primary lg:px-6"
        >
          Visit App
          <Icon name="mdi:open-in-new" class="h-4 w-4" />
        </a>

        <a
          v-if="project.codeUrl !== ''"
          :href="project.codeUrl"
          target="_blank"
          class="flex w-fit items-center justify-center gap-1 rounded-full border-2 border-primary bg-primary px-4 py-2 text-sm font-semibold text-secondary transition-all duration-150 hover:bg-transparent hover:text-primary lg:px-6"
        >
          View Code
          <Icon name="mdi:github" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
</template>
