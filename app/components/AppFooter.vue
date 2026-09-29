<script setup lang="ts">
const year = new Date().getFullYear()

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/chris.steinert.media/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@SteinertMedia' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christoph-steinert-media' }
]
</script>

<template>
  <footer class="border-t border-paper/10 bg-ink">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-paper/60 sm:flex-row sm:px-6"
    >
      <p>© {{ year }} Steinertmedia. Alle Rechte vorbehalten.</p>
      <div class="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center px-2 sm:px-3 transition-colors hover:text-paper"
        >
          {{ link.label }}
        </a>
        <NuxtLink to="/impressum" class="inline-flex min-h-11 items-center px-2 sm:px-3 transition-colors hover:text-paper"> Impressum </NuxtLink>
      </div>
    </div>
  </footer>
</template>
