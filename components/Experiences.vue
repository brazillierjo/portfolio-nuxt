<script setup lang="ts">
import { links } from "~/utils/links";
import Tag from "~/components/ui/Tag.vue";
import { experiences } from "~/utils/experiences";
import Timeline from "~/components/ui/Timeline.vue";

const introduceLink = links.find((link) => link.name === "Experiences");
</script>

<template>
  <section
    id="Experiences"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
  >
    <Tag>
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ introduceLink?.name }}
    </Tag>

    <h1 class="text-2xl font-bold" v-motion-fade>my <span class="text-primary">experiences</span>.</h1>

    <Timeline :items="experiences" />
  </section>
</template>
