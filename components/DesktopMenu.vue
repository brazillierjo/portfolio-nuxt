<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VerticalMenu",
  data() {
    return {
      links: [
        { name: "introduce", icon: "mdi:home" },
        { name: "about", icon: "mdi:account" },
        { name: "experience", icon: "mdi:briefcase" },
        { name: "education", icon: "mdi:school" },
      ],
    };
  },
});
</script>

<template>
  <div class="fixed hidden lg:right-8 lg:top-1/2 lg:block lg:-translate-y-1/2">
    <nav
      class="flex w-fit min-w-[50px] flex-col items-center gap-5 rounded-full border border-tertiary bg-transparent py-6"
    >
      <a v-for="link in links" :key="link.name" :href="`#${link.name}`">
        <Icon
          :name="link.icon"
          class="mx-auto h-5 w-5 text-tertiary transition-all duration-150 hover:text-white"
          size="24"
        />
      </a>
    </nav>
  </div>
</template>
