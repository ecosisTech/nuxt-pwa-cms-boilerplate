import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
    if (to.hash) {
      return {
        top: 30,
        el: to.hash,
        behavior: 'smooth',
      }
    }
  };
})
