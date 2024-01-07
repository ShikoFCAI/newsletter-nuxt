// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device'
  ],
  googleFonts: {
    families: {
      Roboto: [400, 700],
    }
  },
  devtools: { enabled: true }
})
