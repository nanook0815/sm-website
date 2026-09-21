<script setup lang="ts">
const year = new Date().getFullYear()

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
  { label: 'Vimeo', href: 'https://vimeo.com/' }
]
</script>

<template>
  <footer class="border-t border-gray-800 bg-gray-950">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-400 sm:flex-row sm:px-6">
      <p>© {{ year }} Steinertmedia. Alle Rechte vorbehalten.</p>
      <div class="flex flex-wrap items-center justify-center gap-6">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-white"
        >
          {{ link.label }}
        </a>
        <NuxtLink to="/impressum" class="transition-colors hover:text-white">
          Impressum
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
