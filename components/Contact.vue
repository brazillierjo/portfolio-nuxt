<script setup lang="ts">
import { Contact } from "~/utils/enums/Contact";
</script>

<template>
  <section
    id="Contact"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
    v-motion-fade
  >
    <h1 class="text-2xl font-bold">Let's work <span class="text-primary">together</span> !</h1>

    <a class="text-xl text-text" :href="`mailto:${Contact.Email}`">{{ Contact.Email }}</a>

    <p class="text-lg text-gray-600">Feel free to reach out to me via email for collaborations or inquiries.</p>

    <a
      :href="`mailto:${Contact.Email}`"
      class="hover:bg-primary-light flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-secondary shadow-md transition duration-300"
    >
      Contact me
      <Icon name="mdi:email-outline" class="h-5 w-5" />
    </a>
  </section>
</template>
