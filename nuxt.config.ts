// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './app',
  ssr: false,
  modules: [
    '@vite-pwa/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    'nuxt-lucide-icons',
  ],
  plugins: [
    { src: '~/plugins/markdown.ts', mode: 'client' }
  ],
  auth: {
    globalAppMiddleware: true,
    enableSessionRefreshPeriodically: 5000,
    enableSessionRefreshOnWindowFocus: true,
    globalMiddlewareOptions: {
      allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
      addDefaultCallbackUrl: '/' // Where authenticated user will be redirected to by default
    }
  },
  tailwindcss: { exposeConfig: true },
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },
  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  pwa: {
    /* your pwa options */
  }
})
