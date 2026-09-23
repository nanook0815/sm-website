// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/icon'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      titleTemplate: 'Steinertmedia | %s',
      meta: [
        {
          name: 'description',
          content:
            'Steinertmedia – Videoeditor, Videograf und Fotograf. Video-Editing, Videoproduktion und Fotografie für Unternehmen und Privatkunden.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.steinertmedia.de/' },
        { property: 'og:title', content: 'Steinertmedia | Video, Foto & Editing' },
        {
          property: 'og:description',
          content:
            'Steinertmedia – Videoeditor, Videograf und Fotograf. Video-Editing, Videoproduktion und Fotografie für Unternehmen und Privatkunden.'
        },
        { property: 'og:image', content: 'https://www.steinertmedia.de/images/og/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'de_DE' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Steinertmedia | Video, Foto & Editing' },
        {
          name: 'twitter:description',
          content:
            'Steinertmedia – Videoeditor, Videograf und Fotograf. Video-Editing, Videoproduktion und Fotografie für Unternehmen und Privatkunden.'
        },
        { name: 'twitter:image', content: 'https://www.steinertmedia.de/images/og/og-image.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/images/brand/export/icon-fokusfeld-graphit.svg'
        },
        { rel: 'alternate icon', href: '/favicon.ico' }
      ]
    }
  }
})
