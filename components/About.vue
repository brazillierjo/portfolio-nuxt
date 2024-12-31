<script setup lang="ts">
import Tag from "~/components/ui/Tag.vue";
import { links } from "~/utils/links";

const introduceLink = links.find((link) => link.name === "About");

const paragraphs = [
  "📚 I initially stopped studying after completing a Technological Baccalaureate. From odd jobs to odd jobs, I quickly realized that this context would not be enough for me. So, at the age of 21, I decided to resume my studies and pursue a degree in e-commerce.",
  "🏋️ These studies allowed me to work as an SEO specialist for 6 years. This experience taught me about the functioning of the professional world, teamwork, the weight of responsibilities, as well as managing a back office and search engine optimization.",
  "🍀 As a SEO specialist, working closely with developers sparked my interest in this highly technical field. Therefore, I enrolled in a 6-month bootcamp training program to acquire the fundamentals of web programming and coding. Following that, I continued my learning journey through an apprenticeship program, pursuing a degree in Web and Mobile Applications Integration/Development with a specialization in React and Node.js.",
  "🍾 Since then, I have worked with several companies on complete integrations, provided assistance to deliver projects on time, made modifications, and added new features...",
  "👷 Today, drawing strength from my journey, I master the intricacies of the Agile methodology, the principles of Clean Code, and CI/CD pipelines, ensuring optimal scalability and maintainability for each web application I develop. My diverse experience, spanning from SEO to programming, enables me to bring a unique perspective to every project.",
  "🧘‍♂ As a Web Developer since 2020, I thoroughly enjoy working with Nuxt & NextJs in an Agile environment, adhering to clean code principles, and implementing CI/CD pipelines. I take pleasure in transforming mockups of various styles into dynamic and interactive websites to enhance the user experience.",
];
</script>

<template>
  <section
    id="About"
    class="flex flex-col items-center gap-6 xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12"
  >
    <Tag>
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ introduceLink?.name }}
    </Tag>

    <h1 class="text-2xl font-bold" v-motion-fade>my <span class="text-primary">path</span>.</h1>

    <div class="text-md flex flex-col gap-6">
      <p
        v-for="(text, index) in paragraphs"
        :key="index"
        class="text-justify xl:text-text"
        v-motion-slide-visible-right
      >
        {{ text }}
      </p>
    </div>

    <a
      href="#Experience"
      class="hidden w-fit items-center gap-2 rounded-full border-2 border-text px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:scale-105 hover:text-white lg:flex"
    >
      My experiences
      <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
    </a>
  </section>
</template>