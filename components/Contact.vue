<script setup lang="ts">
import { Contact } from "~/utils/enums/Contact";
</script>

<template>
  <section
    id="Contact"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
    v-motion-fade
  >
    <h1 class="text-2xl font-bold">
      Let's work <span class="text-primary">together</span> !
    </h1>

    <a class="text-text text-xl" :href="`mailto:${Contact.Email}`">{{ Contact.Email }}</a>

    <p class="text-gray-600 text-lg">
      Feel free to reach out to me via email for collaborations or inquiries.
    </p>

    <a
      :href="`mailto:${Contact.Email}`"
      class="px-6 py-3 bg-primary text-secondary flex items-center gap-2 font-semibold rounded-md shadow-md hover:bg-primary-light transition duration-300"
    >
      Contact me
      <Icon name="mdi:email-outline" class="h-5 w-5" />
    </a>
  </section>
</template>