<script setup lang="ts">
import { ref } from 'vue'
import Panel from '~/components/ui/Panel.vue'
import { links } from '~/utils/links'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const isMenuOpen = ref(false)
const isActive = (linkName: string) => route.hash === `#${linkName}`

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
</script>

<template>
  <div>
    <!-- Burger Menu Button -->
    <button
      :class="[
        'fixed z-50 flex h-10 w-10 items-center justify-center rounded-full bg-transparent',
        isMenuOpen ? 'right-14 top-14' : 'right-5 top-5 xl:right-14 xl:top-14',
      ]"
      @click="toggleMenu"
    >
      <Icon
        :name="isMenuOpen ? 'mdi:close' : 'mdi:menu'"
        class="text-white transition-all duration-300 hover:text-primary"
        size="24"
      />
    </button>

    <!-- Panel -->
    <Panel :isOpen="isMenuOpen" @close="toggleMenu">
      <nav class="flex flex-col items-start space-y-6">
        <a
          v-for="link in links"
          :key="link.name"
          :href="`#${link.id}`"
          class="group flex items-center gap-4 text-lg transition-colors duration-150"
          @click="toggleMenu"
        >
          <Icon
            :name="link.icon"
            :class="[
              'h-5 w-5 text-icons transition-colors duration-150 group-hover:text-primary',
              isActive(link.id) ? 'text-primary' : '',
            ]"
          />

          <span
            :class="[
              'text-sm text-tertiary transition-colors duration-150 group-hover:text-white',
              isActive(link.id) ? 'text-white' : '',
            ]"
          >
            {{ t(link.name) }}
          </span>
        </a>
      </nav>
    </Panel>
  </div>
</template>
