<script setup lang="ts">
const navLinks = [
  { label: 'Leistungen', to: '/#leistungen' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Über mich', to: '/#ueber-mich' },
  { label: 'Kundenstimmen', to: '/#kundenstimmen' },
  { label: 'Kontakt', to: '/#kontakt' }
]

const contactEmail = 'info@steinertmedia.de'
const contactHref = `mailto:${contactEmail}?subject=Projektanfrage`

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-paper/10 bg-ink/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <a href="/#top" class="flex items-center">
        <img
          src="/images/brand/export/logo-horizontal-dunkel.svg"
          alt="SteinertMedia"
          class="h-7 w-auto"
        />
      </a>

      <nav class="hidden gap-8 lg:flex">
        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          class="text-sm font-medium text-paper/70 transition-colors hover:text-paper"
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        :href="contactHref"
        class="hidden rounded-md bg-bronze-light px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-110 lg:inline-block"
      >
        Kontakt aufnehmen
      </a>

      <button
        type="button"
        class="text-paper lg:hidden"
        aria-label="Menü öffnen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <nav v-if="isMenuOpen" class="border-t border-paper/10 bg-ink px-4 py-4 lg:hidden">
      <a
        v-for="link in navLinks"
        :key="link.to"
        :href="link.to"
        class="block py-2 text-sm font-medium text-paper/70 hover:text-paper"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a
        :href="contactHref"
        class="mt-2 block rounded-md bg-bronze-light px-4 py-2 text-center text-sm font-semibold text-ink"
        @click="closeMenu"
      >
        Kontakt aufnehmen
      </a>
    </nav>
  </header>
</template>
