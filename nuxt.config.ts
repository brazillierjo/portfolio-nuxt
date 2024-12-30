// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@vueuse/motion/nuxt"],

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "slide-bottom": {
            initial: {
              y: 50,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 0.2,
              },
            },
          },
        },
      },
    },
  },
});
