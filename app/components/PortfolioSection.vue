<script setup lang="ts">
import { portfolioItems, type PortfolioCategory } from '~/data/portfolio'

// Geteilter Zustand, damit der Hero (Foto · Video · Editing) den Filter setzen kann.
const activeCategory = useState<PortfolioCategory | 'Alle'>('portfolioCategory', () => 'Alle')

const portfolioCategories = computed<Array<PortfolioCategory | 'Alle'>>(() => [
  'Alle',
  ...new Set(portfolioItems.map((item) => item.category))
])

// Position des Playheads über dem aktiven Filter-Clip (gleiche Clip-Sprache wie die Hero-Timeline).
const activeIndex = computed(() => Math.max(0, portfolioCategories.value.indexOf(activeCategory.value)))

const filteredItems = computed(() => {
  if (activeCategory.value === 'Alle') return portfolioItems
  return portfolioItems.filter((item) => item.category === activeCategory.value)
})
</script>

<template>
  <section id="portfolio" class="py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
        Ausgewählte Arbeiten
      </h2>
      <p class="mt-4 max-w-2xl leading-[1.7] text-body">
        Weniger erzählen. Mehr zeigen.
      </p>

      <div
        class="portfolio-filter mt-8"
        role="group"
        aria-label="Portfolio filtern"
        :style="{ '--clip-count': portfolioCategories.length, '--active-index': activeIndex }"
      >
        <button
          v-for="category in portfolioCategories"
          :key="category"
          type="button"
          class="portfolio-filter-clip"
          :class="{ 'is-active': activeCategory === category }"
          :aria-pressed="activeCategory === category"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
        <span class="portfolio-filter-playhead" aria-hidden="true"></span>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, index) in filteredItems"
          :key="item.id"
          v-reveal
          class="group overflow-hidden rounded-xl bg-paper shadow-sm ring-1 ring-line"
          :style="{ transitionDelay: `${Math.min(index, 6) * 80}ms` }"
        >
          <div class="relative">
            <span
              class="absolute left-3 top-3 z-10 rounded-md border border-ink/15 bg-paper/95 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink"
            >
              {{ item.category }}
            </span>

            <PhotoStrip
              v-if="item.images"
              :images="item.images"
              :title="`${item.title} – ${item.client}`"
            />
            <a
              v-else-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="relative block aspect-video overflow-hidden"
            >
              <img
                v-if="item.thumbnail"
                :src="item.thumbnail"
                :alt="`${item.title} – ${item.client}`"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                v-else
                class="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink to-body font-mono text-sm font-medium uppercase tracking-widest text-paper/60"
              >
                {{ item.category }}
              </div>
              <div
                class="absolute inset-0 flex items-center justify-center bg-ink/0 text-sm font-medium text-paper opacity-0 transition-all duration-300 group-hover:bg-ink/50 group-hover:opacity-100"
              >
                Projekt ansehen →
              </div>
            </a>
            <template v-else>
              <img
                v-if="item.thumbnail"
                :src="item.thumbnail"
                :alt="`${item.title} – ${item.client}`"
                class="aspect-video w-full object-cover"
              />
              <div
                v-else
                class="flex aspect-video items-center justify-center bg-gradient-to-br from-ink to-body font-mono text-sm font-medium uppercase tracking-widest text-paper/60"
              >
                {{ item.category }}
              </div>
            </template>
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

<style scoped>
/* Filter als Clip-Spur wie die Hero-Timeline: Pseudo-Elemente und die
   berechnete Playhead-Position sind mit Tailwind-Utilities nicht sauber lösbar. */
.portfolio-filter {
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--clip-count), minmax(0, 1fr));
  gap: 3px;
  width: 100%;
  max-width: 28rem;
  padding-top: 12px;
}
.portfolio-filter-clip {
  position: relative;
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 10px 4px;
  overflow: hidden;
  border: 1px solid rgb(27 29 28 / 0.2);
  border-radius: 6px;
  color: #45483f;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: background-color 0.3s ease-out, color 0.3s ease-out, border-color 0.3s ease-out;
}
/* Wellenform-Streifen am Clip-Boden */
.portfolio-filter-clip::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 5px;
  background: repeating-linear-gradient(90deg, rgb(27 29 28 / 0.18) 0 1px, transparent 1px 4px);
  -webkit-mask-image: linear-gradient(to top, black, transparent);
  mask-image: linear-gradient(to top, black, transparent);
}
.portfolio-filter-clip:hover {
  border-color: rgb(27 29 28 / 0.45);
}
.portfolio-filter-clip:focus-visible {
  outline: 2px solid #9a6f3f;
  outline-offset: 2px;
}
.portfolio-filter-clip.is-active {
  border-color: #1b1d1c;
  background: #1b1d1c;
  color: #fdfbf7;
}
.portfolio-filter-clip.is-active::after {
  background: repeating-linear-gradient(90deg, rgb(192 142 82 / 0.55) 0 1px, transparent 1px 4px);
}
/* Playhead steht am Anfang des aktiven Clips und gleitet beim Filterwechsel weiter */
.portfolio-filter-playhead {
  position: absolute;
  top: 0;
  left: calc((100% + 3px) / var(--clip-count) * var(--active-index) + 10px);
  width: 1px;
  height: 22px;
  background: #c08e52;
  pointer-events: none;
  transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.portfolio-filter-playhead::before {
  content: '';
  position: absolute;
  top: 0;
  left: -5px;
  width: 11px;
  height: 9px;
  background: #c08e52;
  clip-path: polygon(0 0, 100% 0, 100% 55%, 50% 100%, 0 55%);
}
@media (prefers-reduced-motion: reduce) {
  .portfolio-filter-playhead {
    transition: none;
  }
}
</style>
