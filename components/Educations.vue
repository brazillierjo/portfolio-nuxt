<script setup lang="ts">
import { links } from "~/utils/links";
import Tag from "~/components/ui/Tag.vue";
import Timeline from "~/components/ui/Timeline.vue";
import { educations } from "~/utils/educations";

const introduceLink = links.find((link) => link.name === "Educations");
</script>

<template>
  <section
    id="Educations"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
  >
    <Tag>
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ introduceLink?.name }}
    </Tag>

    <h1 class="text-2xl font-bold" v-motion-fade>my <span class="text-primary">education</span>.</h1>

    <Timeline :items="educations" />

    <a
      href="#Projects"
      class="w-fit items-center gap-2 rounded-full border-2 border-text px-4 py-2 text-sm uppercase text-text transition-all duration-300 lg:flex hover:bg-text hover:text-secondary"
    >
      My projects
      <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
    </a>
  </section>
</template>
