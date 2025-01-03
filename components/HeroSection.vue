<script setup lang="ts">
import Tag from '~/components/ui/Tag.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const introduceLink = links.find(link => link.id === 'introduction')

const { locale } = useI18n()

const getCVFilename = (locale: string) => {
  const baseName = 'CV-RINCON_BRAZILLIER_Johan'

  const cvMap: Record<string, string> = {
    'fr-CH': `${baseName}-ch.pdf`,
    'fr-FR': `${baseName}-fr.pdf`,
    'en-US': `${baseName}-en.pdf`,
  }

  return cvMap[locale] || `${baseName}-en.pdf`
}

const cvFilename = getCVFilename(locale.value)
</script>

<template>
  <section
    id="introduction"
    class="flex flex-col items-center gap-6 text-center xl:-mt-6 xl:min-h-screen xl:items-start xl:justify-center xl:gap-12 xl:text-left"
  >
    <Tag v-if="introduceLink">
      <Icon :name="introduceLink?.icon ?? ''" class="h-4 w-4" />
      {{ t(introduceLink.name) }}
    </Tag>

    <h1 class="text-[40px] font-bold" v-motion-fade>
      RINCON BRAZILLIER <span class="text-primary">Johan</span>.
    </h1>

    <div
      class="flex flex-col gap-2 text-lg text-icons xl:gap-4"
      v-motion-slide-visible-right
    >
      <p>{{ t('heroSection.line1') }} 👋</p>
      <p>{{ t('heroSection.line2') }}</p>
    </div>

    <div class="flex flex-col items-center gap-4 lg:flex-row">
      <a :href="`./${cvFilename}`" download="CV-RINCON-BRAZILLIER-Johan.pdf">
        <button
          class="flex w-fit animate-pulse items-center gap-2 rounded-full border-2 border-primary px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:bg-primary hover:text-secondary"
        >
          {{ t('heroSection.resume') }}
          <Icon name="mdi:download" class="h-4 w-4" />
        </button>
      </a>

      <a
        href="#about"
        class="w-fit items-center gap-2 rounded-full border-2 border-text px-4 py-2 text-sm uppercase text-text transition-all duration-300 hover:bg-text hover:text-secondary lg:flex"
      >
        {{ t('heroSection.about_me') }}
        <Icon name="mdi:arrow-down" class="h-4 w-4 animate-bounce" />
      </a>
    </div>

    <div class="flex items-center gap-20">
      <div class="flex flex-col gap-2 text-center">
        <p class="text-4xl font-bold text-primary">5+</p>
        <p class="text-sm uppercase text-icons">
          {{ t('heroSection.years_of') }} <br />
          {{ t('heroSection.experience') }}
        </p>
      </div>
    </div>

    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <a
        v-for="(stack, index) in stacks"
        :key="stack.name"
        :href="stack.link"
        target="_blank"
        class="group flex flex-col items-center transition-all duration-300"
      >
        <div
          class="stack-icon flex items-center justify-center rounded-full border-4 border-transparent bg-white p-3 transition-all duration-300 group-hover:border-primary"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <img :src="stack.icon" :alt="stack.name" class="h-8 w-8" />
        </div>

        <span
          class="mt-2 text-sm text-text transition-colors duration-300 group-hover:text-primary"
        >
          {{ stack.name }}
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.stack-icon {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}
</style>
