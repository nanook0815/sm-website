// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/icon'],
  // Schriften werden lokal ausgeliefert (keine Anfrage an Google, DSGVO)
  css: [
    '@fontsource-variable/instrument-sans/wdth.css',
    '@fontsource/jetbrains-mono/400.css',
    '@fontsource/jetbrains-mono/500.css'
  ],
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
        {
          rel: 'icon',
          type: 'image/svg+xml',
          media: '(prefers-color-scheme: light)',
          href: '/images/brand/export/icon-fokusfeld-graphit.svg'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          media: '(prefers-color-scheme: dark)',
          href: '/images/brand/export/icon-fokusfeld-weiss.svg'
        },
        { rel: 'alternate icon', href: '/favicon.ico' }
      ]
    }
  }
})
