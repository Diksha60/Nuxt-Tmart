// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-swiper',
    'nuxt-quasar-ui',
    '@pinia/nuxt'
  ],
  css: ['~/assets/css/tailwind.css']
})