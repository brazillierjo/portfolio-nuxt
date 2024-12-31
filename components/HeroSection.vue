<script setup lang="ts">
import Tag from "~/components/ui/Tag.vue";
import { links } from "~/utils/links";

const introduceLink = links.find((link) => link.name === "Introduction");
</script>

<template>
  <section id="#Introduction" class="xl:flex xl:h-screen xl:flex-col xl:justify-center xl:-mt-6">
    <Tag classes="mb-8">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ introduceLink?.name }}
    </Tag>

    <h1 class="mb-16 text-[40px] font-bold" v-motion-fade>
      RINCON BRAZILLIER <span class="text-primary">Johan</span>.
    </h1>

    <div class="flex flex-col gap-4 text-lg text-icons" v-motion-slide-visible-right>
      <p>Hi there! 👋</p>
      <p>I'm Johan, a Software Engineer passionate about crafting user-friendly web apps. Check out my work below!</p>
    </div>

    <button
      class="mt-10 flex items-center gap-2 rounded-full text-sm w-fit uppercase border-2 border-primary px-4 py-2 text-text animate-pulse hover:scale-105 transition-all duration-300">
      Download my resume here
      <Icon name="mdi:download" class="h-4 w-4" />
    </button>

    <div class="mt-20 flex gap-20 items-center">
      <div class="flex flex-col gap-2 text-center">
        <p class="text-4xl font-bold text-primary">5+</p>
        <p class="text-icons text-sm uppercase">Years of <br /> experience</p>
      </div>
    </div>
  </section>
</template>
