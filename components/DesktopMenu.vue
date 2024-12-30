<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VerticalMenu",
  data() {
    return {
      links: [
        { name: "Introduce", icon: "mdi:home" },
        { name: "About", icon: "mdi:account" },
        { name: "Experience", icon: "mdi:briefcase" },
        { name: "Education", icon: "mdi:school" },
      ],
    };
  },
});
</script>

<template>
  <div class="hidden lg:fixed lg:right-8 lg:top-1/2 lg:block lg:-translate-y-1/2">
    <nav
      class="flex w-fit min-w-[50px] flex-col items-center gap-5 rounded-full border border-tertiary bg-transparent py-6"
    >
      <div v-for="link in links" :key="link.name" class="group relative">
        <a :href="`#${link.name}`" class="p-2">
          <Icon
            :name="link.icon"
            class="mx-auto h-5 w-5 text-tertiary transition-all duration-150 hover:text-white"
            size="24"
          />
        </a>

        <div
          class="absolute right-10 top-0 z-10 mb-3 hidden w-max items-center justify-center rounded-xl bg-white/80 px-3 py-1 text-sm text-gray-900 shadow-lg backdrop-blur-md transition-opacity duration-300 group-hover:flex"
        >
          {{ link.name }}
        </div>
      </div>
    </nav>
  </div>
</template>
