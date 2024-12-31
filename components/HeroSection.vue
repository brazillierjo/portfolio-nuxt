<script setup lang="ts">
import Tag from "~/components/ui/Tag.vue";

const introduceLink = links.find((link) => link.name === "Introduction");
</script>

<template>
  <section
    id="Introduction"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
  >
    <Tag>
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ introduceLink?.name }}
    </Tag>

    <h1 class="text-[40px] font-bold" v-motion-fade>RINCON BRAZILLIER <span class="text-primary">Johan</span>.</h1>

    <div class="flex flex-col gap-2 text-lg text-icons xl:gap-4" v-motion-slide-visible-right>
      <p>Hi there! 👋</p>
      <p>I'm Johan, a Software Engineer passionate about crafting user-friendly web apps. Check out my work below!</p>
    </div>

    <div class="flex flex-col lg:flex-row items-center gap-4">
      <button
        class="flex w-fit animate-pulse items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:bg-primary hover:text-secondary"
      >
        Download my resume here
        <Icon name="mdi:download" class="h-4 w-4" />
      </button>

      <a
        href="#About"
        class="w-fit items-center gap-2 rounded-full border-2 border-text px-4 py-2 text-sm uppercase text-text transition-all duration-300 lg:flex hover:bg-text hover:text-secondary"
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

    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <a
        v-for="(stack, index) in stacks"
        :key="stack.name"
        :href="stack.link"
        target="_blank"
        class="stack-icon flex items-center justify-center rounded-full border bg-white p-3 transition-all duration-300 hover:border-primary"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <img :src="stack.icon" :alt="stack.name" class="h-8 w-8" />
        <span class="sr-only">{{ stack.name }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.stack-icon {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}
</style>
