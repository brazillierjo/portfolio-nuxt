// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts',
  ],
  i18n: {
    langDir: '../locales/',
    strategy: 'prefix_and_default',
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.json' },
    ],
    defaultLocale: 'en',
  },
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
})
