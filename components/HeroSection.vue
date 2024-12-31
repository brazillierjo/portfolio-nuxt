<script setup lang="ts">
import Tag from "~/components/ui/Tag.vue";
import { links } from "~/utils/links";

const introduceLink = links.find((link) => link.name === "Introduction");
</script>

<template>
  <section id="Introduction" class="flex flex-col gap-6 xl:-mt-6 xl:min-h-screen xl:justify-center xl:gap-12">
    <Tag>
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ introduceLink?.name }}
    </Tag>

    <h1 class="text-[40px] font-bold" v-motion-fade>RINCON BRAZILLIER <span class="text-primary">Johan</span>.</h1>

    <div class="flex flex-col gap-2 text-lg text-icons xl:gap-4" v-motion-slide-visible-right>
      <p>Hi there! 👋</p>
      <p>I'm Johan, a Software Engineer passionate about crafting user-friendly web apps. Check out my work below!</p>
    </div>

    <div class="flex items-center gap-4">
      <button
        class="flex w-fit animate-pulse items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:scale-105"
      >
        Download my resume here
        <Icon name="mdi:download" class="h-4 w-4" />
      </button>

      <a
        href="#About"
        class="hidden w-fit items-center gap-2 rounded-full border-2 border-text px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:scale-105 hover:text-white lg:flex"
      >
        About me
        <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
      </a>
    </div>

    <div class="flex items-center gap-20">
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
