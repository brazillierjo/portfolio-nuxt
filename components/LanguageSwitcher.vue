<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value)

const currentLocaleName = computed(() => {
  const currentLocale = locales.value.find(l => l.code === locale.value)
  return currentLocale ? currentLocale.name : ''
})
</script>

<template>
  <div class="absolute left-5 top-6 w-fit xl:left-10 xl:top-12">
    <div
      class="relative w-full cursor-pointer rounded-full bg-tertiary px-3 py-1.5 pr-8 text-sm font-medium text-text transition"
    >
      {{ currentLocaleName }}

      <Icon
        name="mdi:chevron-down"
        class="absolute right-3 top-1/2 -translate-y-1/2"
        size="20"
      />
    </div>

    <select
      class="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
      :value="locale.value"
      @change="setLocale($event.target.value)"
    >
      <option
        v-for="locale in availableLocales"
        :key="locale.code"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>
