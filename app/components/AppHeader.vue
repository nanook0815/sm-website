<script setup lang="ts">
const navLinks = [
  { label: 'Startseite', to: '/' },
  { label: 'Über uns', to: '/about' },
  { label: 'Kontakt', to: '/contact' }
]
</script>

<template>
  <header class="border-b border-gray-200 bg-white">
    <div class="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
      <NuxtLink to="/" class="text-lg font-bold text-gray-900">
        Firmenname
      </NuxtLink>
      <nav class="flex gap-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          active-class="text-gray-900"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
