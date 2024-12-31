<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { locale } = useI18n();
const router = useRouter();

const currentLang = locale.value;

const toggleLanguage = () => {
  const newLang = currentLang === "en" ? "fr" : "en";
  locale.value = newLang;

  router.push({ path: `/${newLang}` });
};
</script>

<template>
  <div class="absolute top-5 left-5 flex items-center gap-4">
    <div class="flex gap-3">
      <span
        class="text-sm font-semibold transition-colors duration-300"
        :class="{ 'text-text': currentLang === 'en', 'text-icons': currentLang !== 'en' }"
      >
        EN
      </span>
    </div>

    <div
      class="relative w-[52px] h-6 bg-tertiary rounded-full cursor-pointer flex items-center px-1.5 shadow-inner"
      @click="toggleLanguage"
    >
      <div
        class="absolute w-5 h-5 bg-primary rounded-full shadow-md transition-transform duration-300"
        :class="{ 'translate-x-5': currentLang === 'fr', 'translate-x-0': currentLang === 'en' }"
        aria-label="Toggle Language"
      />
    </div>

    <div class="flex gap-3">
      <span
        class="text-sm font-semibold transition-colors duration-300"
        :class="{ 'text-text': currentLang === 'fr', 'text-icons': currentLang !== 'fr' }"
      >
        FR
      </span>
    </div>
  </div>
</template>