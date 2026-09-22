<script setup lang="ts">
import { portfolioItems, type PortfolioCategory } from '~/data/portfolio'

const activeCategory = ref<PortfolioCategory | 'Alle'>('Alle')

const portfolioCategories = computed<Array<PortfolioCategory | 'Alle'>>(() => [
  'Alle',
  ...new Set(portfolioItems.map((item) => item.category))
])

const filteredItems = computed(() => {
  if (activeCategory.value === 'Alle') return portfolioItems
  return portfolioItems.filter((item) => item.category === activeCategory.value)
})
</script>

<template>
  <section id="portfolio" class="border-t border-line bg-paper py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
        Portfolio
      </h2>
      <p class="mt-4 max-w-2xl leading-[1.7] text-body">
        Eine Auswahl aktueller Projekte aus Video, Foto und Editing.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <button
          v-for="category in portfolioCategories"
          :key="category"
          type="button"
          class="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
          :class="
            activeCategory === category
              ? 'border-ink bg-ink text-paper'
              : 'border-line text-body hover:border-ink/40'
          "
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in filteredItems"
          :key="item.id"
          class="group overflow-hidden rounded-xl bg-paper shadow-sm ring-1 ring-line"
        >
          <div
            class="flex aspect-video items-center justify-center bg-gradient-to-br from-ink to-body font-mono text-sm font-medium uppercase tracking-widest text-paper/60"
          >
            {{ item.category }}
          </div>
          <div class="p-5">
            <h3 class="font-semibold tracking-[-0.01em] text-ink">
              {{ item.title }}
            </h3>
            <p class="text-sm text-grey">{{ item.client }}</p>
            <p class="mt-2 text-sm leading-relaxed text-body">
              {{ item.description }}
            </p>
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-block text-sm font-medium text-bronze hover:underline"
            >
              Projekt ansehen →
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
