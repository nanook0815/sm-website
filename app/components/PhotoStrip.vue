<script setup lang="ts">
import type { PortfolioImage } from '~/data/portfolio'

// Bilderstreifen für Foto-Projekte im Portfolio: Die Fotos stehen in ihrem
// echten Format (hoch oder quer) nebeneinander, man kann per Pfeil oder
// Wischen blättern und per Klick die große Ansicht öffnen.
const props = defineProps<{
  images: PortfolioImage[]
  title: string
}>()

const strip = ref<HTMLElement>()
const atStart = ref(true)
const atEnd = ref(false)
const openIndex = ref<number | null>(null)

function updateArrows() {
  const el = strip.value
  if (!el) return
  atStart.value = el.scrollLeft <= 4
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
}

function scrollStrip(direction: 1 | -1) {
  const el = strip.value
  if (!el) return
  el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
}

onMounted(updateArrows)
</script>

<template>
  <div class="relative aspect-video overflow-hidden bg-ink">
    <div
      ref="strip"
      class="flex h-full snap-x snap-mandatory gap-1 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      @scroll.passive="updateArrows"
    >
      <button
        v-for="(image, index) in props.images"
        :key="image.src"
        type="button"
        class="h-full shrink-0 snap-start overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-bronze-light"
        :aria-label="`${props.title} – Foto ${index + 1} von ${props.images.length} groß ansehen`"
        @click="openIndex = index"
      >
        <img
          :src="image.thumb"
          :width="image.width"
          :height="image.height"
          alt=""
          loading="lazy"
          decoding="async"
          class="h-full w-auto max-w-none transition-transform duration-300 hover:scale-105"
        />
      </button>
    </div>

    <button
      v-if="!atStart"
      type="button"
      aria-label="Vorherige Fotos"
      class="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm transition-opacity duration-200 hover:bg-paper md:opacity-0 md:focus-visible:opacity-100 md:group-hover:opacity-100"
      @click="scrollStrip(-1)"
    >
      <Icon name="lucide:chevron-left" class="h-5 w-5" />
    </button>
    <button
      v-if="!atEnd"
      type="button"
      aria-label="Weitere Fotos"
      class="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm transition-opacity duration-200 hover:bg-paper md:opacity-0 md:focus-visible:opacity-100 md:group-hover:opacity-100"
      @click="scrollStrip(1)"
    >
      <Icon name="lucide:chevron-right" class="h-5 w-5" />
    </button>

    <span
      class="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 font-mono text-xs text-paper"
    >
      <Icon name="lucide:images" class="h-3.5 w-3.5" />
      {{ props.images.length }} Fotos
    </span>

    <PhotoLightbox
      v-if="openIndex !== null"
      :images="props.images"
      :start-index="openIndex"
      :title="props.title"
      @close="openIndex = null"
    />
  </div>
</template>
