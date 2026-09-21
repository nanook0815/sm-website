<script setup lang="ts">
import { portfolioItems, portfolioCategories, type PortfolioCategory } from '~/data/portfolio'

const activeCategory = ref<PortfolioCategory | 'Alle'>('Alle')

const filteredItems = computed(() => {
  if (activeCategory.value === 'Alle') return portfolioItems
  return portfolioItems.filter((item) => item.category === activeCategory.value)
})
</script>

<template>
  <section id="portfolio" class="bg-gray-50 py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        Portfolio
      </h2>
      <p class="mt-4 max-w-2xl text-gray-600">
        Eine Auswahl aktueller Projekte aus Video, Foto und Editing.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <button
          v-for="category in portfolioCategories"
          :key="category"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
          :class="activeCategory === category
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-100'"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in filteredItems"
          :key="item.id"
          class="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200"
        >
          <div
            class="flex aspect-video items-center justify-center bg-gradient-to-br from-gray-800 to-gray-950 text-sm font-medium uppercase tracking-widest text-gray-400"
          >
            {{ item.category }}
          </div>
          <div class="p-5">
            <h3 class="font-semibold text-gray-900">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-500">{{ item.client }}</p>
            <p class="mt-2 text-sm text-gray-600">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
