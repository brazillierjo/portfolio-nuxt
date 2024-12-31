<script setup lang="ts">
import { links } from "~/utils/links";
import Tag from "~/components/ui/Tag.vue";
import { experiences } from "~/utils/experiences";
import Timeline from "~/components/ui/Timeline.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const introduceLink = links.find((link) => link.id === "experiences");
</script>

<template>
  <section
    id="experiences"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
  >
    <Tag v-if="introduceLink">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ t(introduceLink.name) }}
    </Tag>

    <h1 class="text-2xl font-bold" v-motion-fade>my <span class="text-primary">experiences</span>.</h1>

    <Timeline :items="experiences" />

    <a
      href="#educations"
      class="w-fit items-center gap-2 rounded-full border-2 border-text px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:bg-text hover:text-secondary lg:flex"
    >
      My education
      <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
    </a>
  </section>
</template>
