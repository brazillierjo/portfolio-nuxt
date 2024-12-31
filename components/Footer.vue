<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const currentYear = new Date().getFullYear()

const { t } = useI18n()
</script>

<template>
  <footer class="relative py-6 text-center">
    <div class="relative flex justify-center">
      <div class="absolute h-[2px] w-1/2 rounded-full bg-tertiary"></div>
    </div>

    <p class="mt-6 text-sm">{{ t('footer.built_with') }}</p>

    <p class="mt-2 text-xs">&copy; {{ currentYear }}</p>
  </footer>
</template>
