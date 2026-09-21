<script setup lang="ts">
const navLinks = [
  { label: 'Leistungen', to: '#leistungen' },
  { label: 'Portfolio', to: '#portfolio' },
  { label: 'Über mich', to: '#ueber-mich' },
  { label: 'Kontakt', to: '#kontakt' }
]

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <a href="#top" class="text-lg font-bold tracking-tight text-white">
        Steinertmedia
      </a>

      <nav class="hidden gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          class="text-sm font-medium text-gray-300 transition-colors hover:text-white"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        href="#kontakt"
        class="hidden rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-400 md:inline-block"
      >
        Projekt anfragen
      </a>

      <button
        type="button"
        class="text-gray-200 md:hidden"
        aria-label="Menü öffnen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav v-if="isMenuOpen" class="border-t border-gray-800 bg-gray-950 px-4 py-4 md:hidden">
      <a
        v-for="link in navLinks"
        :key="link.to"
        :href="link.to"
        class="block py-2 text-sm font-medium text-gray-300 hover:text-white"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a
        href="#kontakt"
        class="mt-2 block rounded-md bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white"
        @click="closeMenu"
      >
        Projekt anfragen
      </a>
    </nav>
  </header>
</template>
