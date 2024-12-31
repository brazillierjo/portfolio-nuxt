<script setup lang="ts">
import Tag from "~/components/ui/Tag.vue";
import { links } from "~/utils/links";

const introduceLink = links.find((link) => link.name === "About");
</script>

<template>
  <section id="About" class="xl:-mt-6 xl:flex xl:h-screen xl:flex-col xl:justify-center">
    <Tag classes="mb-8">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ introduceLink?.name }}
    </Tag>

    <h1 class="mb-4 text-[40px] font-bold xl:mb-16" v-motion-fade>
      RINCON BRAZILLIER <span class="text-primary">Johan</span>.
    </h1>

    <div class="flex flex-col gap-4 text-lg text-icons" v-motion-slide-visible-right>
      <p>Hi there! 👋</p>
      <p>I'm Johan, a Software Engineer passionate about crafting user-friendly web apps. Check out my work below!</p>
    </div>

    <button
      class="mt-10 flex w-fit animate-pulse items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:scale-105"
    >
      Download my resume here
      <Icon name="mdi:download" class="h-4 w-4" />
    </button>

    <div class="mt-20 flex items-center gap-20">
      <div class="flex flex-col gap-2 text-center">
        <p class="text-4xl font-bold text-primary">5+</p>
        <p class="text-sm uppercase text-icons">
          Years of <br />
          experience
        </p>
      </div>
    </div>
  </section>
</template>
