<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()

const currentLang = locale.value

const toggleLanguage = () => {
  const newLang = currentLang === 'en' ? 'fr' : 'en'
  locale.value = newLang

  router.push({ path: `/${newLang}` })
}
</script>

<template>
  <div class="absolute left-5 top-7 flex items-center gap-4 xl:top-5">
    <div class="flex gap-3">
      <span
        class="text-sm font-semibold transition-colors duration-300"
        :class="{
          'text-text': currentLang === 'en',
          'text-icons': currentLang !== 'en',
        }"
      >
        EN
      </span>
    </div>

    <div
      class="relative flex h-6 w-[52px] cursor-pointer items-center rounded-full bg-tertiary px-1.5 shadow-inner"
      @click="toggleLanguage"
    >
      <div
        class="absolute h-5 w-5 rounded-full bg-primary shadow-md transition-transform duration-300"
        :class="{
          'translate-x-5': currentLang === 'fr',
          'translate-x-0': currentLang === 'en',
        }"
        aria-label="Toggle Language"
      />
    </div>

    <div class="flex gap-3">
      <span
        class="text-sm font-semibold transition-colors duration-300"
        :class="{
          'text-text': currentLang === 'fr',
          'text-icons': currentLang !== 'fr',
        }"
      >
        FR
      </span>
    </div>
  </div>
</template>
