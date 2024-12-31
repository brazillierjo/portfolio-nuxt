<script setup lang="ts">
import { links } from "~/utils/links";
import Tag from "~/components/ui/Tag.vue";
import ProjectCard from "~/components/ui/ProjectCard.vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n();

const introduceLink = links.find((link) => link.id === "projects");
</script>

<template>
  <section
    id="projects"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
  >
    <Tag v-if="introduceLink">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ t(introduceLink.name) }}
    </Tag>

    <h1 class="text-2xl font-bold" v-motion-fade>my <span class="text-primary">projects</span>.</h1>

    <div class="grid grid-cols-1 gap-20">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>

    <a
      href="#contact"
      class="w-fit items-center gap-2 rounded-full border-2 border-text px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:bg-text hover:text-secondary lg:flex"
    >
      Contact me
      <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
    </a>
  </section>
</template>
