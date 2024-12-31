<script setup lang="ts">
import { links } from '~/utils/links'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const isActive = (linkName: string) => route.hash === `#${linkName}`
</script>

<template>
  <div
    class="hidden xl:fixed xl:right-8 xl:top-1/2 xl:block xl:-translate-y-1/2"
  >
    <nav
      class="flex w-fit min-w-[50px] flex-col items-center gap-5 rounded-full border border-tertiary bg-transparent py-6"
    >
      <div v-for="link in links" :key="link.name" class="group relative">
        <a :href="`#${link.id}`" class="relative p-2">
          <!-- Icon -->
          <Icon
            :name="link.icon"
            :class="[
              'mx-auto h-5 w-5 text-icons transition-all duration-150 hover:text-primary',
              isActive(link.id) ? 'text-primary' : '',
            ]"
            size="24"
          />

          <!-- Tooltip -->
          <span
            class="absolute right-full top-1/2 ml-3 hidden min-w-max -translate-y-1/2 whitespace-nowrap rounded-lg bg-black bg-opacity-80 px-4 py-2 text-sm text-white shadow-lg transition-opacity duration-300 ease-out group-hover:block"
          >
            {{ t(link.name) }}
          </span>
        </a>
      </div>
    </nav>
  </div>
</template>
