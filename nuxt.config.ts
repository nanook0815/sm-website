// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      titleTemplate: '%s | Steinertmedia',
      meta: [
        {
          name: 'description',
          content:
            'Steinertmedia – freiberuflicher Videoeditor, Videograf und Fotograf. Video-Editing, Videoproduktion und Fotografie für Unternehmen und Privatkunden.'
        }
      ]
    }
  }
})
