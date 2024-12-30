<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
import { Contact } from "~/types/enums/Contact";
import { motionShake } from "~/components/ui/motions/motionShake";
</script>

<template>
  <div
    class="relative mx-auto w-full rounded-3xl border border-dark-text-secondary px-4 py-6 lg:fixed lg:left-10 lg:top-1/2 lg:max-w-sm lg:-translate-y-1/2 lg:px-8 lg:py-10 dark:border-light-text-secondary"
  >
    <div class="mb-8 flex items-center justify-between">
      <h1 class="flex items-center gap-1 text-2xl font-bold">R. B. Johan</h1>
      <p class="text-xl">Developer.</p>
    </div>

    <div class="mb-4 flex justify-center">
      <img
        src="~/assets/pngs/avatar.png"
        alt="Profile"
        class="h-[200px] w-[200px] rounded-full border-4 border-dark-text-secondary dark:border-light-text-secondary"
      />
    </div>

    <div class="flex flex-col gap-3 text-center">
      <a :href="`mailto:${Contact.Email}`" class="text-lg font-semibold">{{ Contact.Email }}</a>
      <p class="text-gray-400">Based in Annecy, France 🇫🇷</p>
    </div>

    <div class="my-6 flex justify-center gap-4">
      <a
        :href="Contact.GitHub"
        target="_blank"
        class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dark-text-secondary"
      >
        <Icon name="mdi:github" class="h-6 w-6 text-gray-400 transition-all duration-150 hover:text-white" />
      </a>

      <a
        :href="Contact.LinkedIn"
        target="_blank"
        class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dark-text-secondary"
      >
        <Icon name="mdi:linkedin" class="h-6 w-6 text-gray-400 transition-all duration-150 hover:text-white" />
      </a>
    </div>

    <a :href="`mailto:${Contact.Email}`">
      <Button type="button" classes="w-full md:w-fit md:mx-auto md:min-w-[200px]" v-motion="motionShake">
        <span class="flex items-center gap-2">
          <Icon name="mdi:email-outline" class="h-5 w-5" />

          HIRE ME!
        </span>
      </Button>
    </a>
  </div>
</template>
