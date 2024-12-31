<script setup lang="ts">
import { links } from "~/utils/links";
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (linkName: string) => route.hash === `#${linkName}`;
</script>

<template>
  <div class="hidden xl:fixed xl:right-8 xl:top-1/2 xl:block xl:-translate-y-1/2">
    <nav
      class="flex w-fit min-w-[50px] flex-col items-center gap-5 rounded-full border border-tertiary bg-transparent py-6"
    >
      <div v-for="link in links" :key="link.name" class="group relative">
        <a :href="`#${link.name}`" class="p-2">
          <Icon
            :name="link.icon"
            :class="[
              'mx-auto h-5 w-5 text-icons transition-all duration-150 hover:text-primary',
              isActive(link.name) ? 'text-primary' : '',
            ]"
            size="24"
          />
        </a>
      </div>
    </nav>
  </div>
</template>
