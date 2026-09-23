<script setup lang="ts">
import type { PortfolioImage } from '~/data/portfolio'

// Große Vollbild-Ansicht für Fotos. Blättern per Pfeil-Buttons,
// Pfeiltasten oder Wischen; schließen per X, Esc oder Klick daneben.
const props = defineProps<{
  images: PortfolioImage[]
  startIndex: number
  title: string
}>()

const emit = defineEmits<{ close: [] }>()

const index = ref(props.startIndex)
const current = computed(() => props.images[index.value]!)
const loaded = ref(false)
const closeButton = ref<HTMLButtonElement>()

function show(step: number) {
  const count = props.images.length
  index.value = (index.value + step + count) % count
}

// Beim Wechsel erst die kleine Version zeigen, bis die große geladen ist.
// Die Nachbarbilder werden schon mal vorgeladen, damit das Blättern flüssig ist.
watch(
  index,
  () => {
    loaded.value = false
    if (!import.meta.client) return
    for (const step of [1, -1]) {
      const count = props.images.length
      new Image().src = props.images[(index.value + step + count) % count]!.src
    }
  },
  { immediate: true }
)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
  if (event.key === 'ArrowRight') show(1)
  if (event.key === 'ArrowLeft') show(-1)
}

let touchStartX = 0

function onTouchStart(event: TouchEvent) {
  touchStartX = event.touches[0]!.clientX
}

function onTouchEnd(event: TouchEvent) {
  const distance = event.changedTouches[0]!.clientX - touchStartX
  if (distance > 50) show(-1)
  if (distance < -50) show(1)
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
  closeButton.value?.focus()
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      role="dialog"
      aria-modal="true"
      :aria-label="props.title"
      class="fixed inset-0 z-[100] flex flex-col bg-ink text-paper"
      @touchstart.passive="onTouchStart"
      @touchend="onTouchEnd"
    >
      <div class="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p class="truncate text-sm font-medium">{{ props.title }}</p>
        <button
          ref="closeButton"
          type="button"
          aria-label="Schließen"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-paper/10"
          @click="emit('close')"
        >
          <Icon name="lucide:x" class="h-6 w-6" />
        </button>
      </div>

      <div class="relative min-h-0 flex-1 px-4 sm:px-20" @click.self="emit('close')">
        <div class="relative h-full w-full">
          <img
            :src="current.thumb"
            alt=""
            class="absolute inset-0 h-full w-full object-contain blur-sm"
            :class="loaded ? 'opacity-0' : 'opacity-100'"
          />
          <img
            :key="current.src"
            :src="current.src"
            :alt="`${props.title} – Foto ${index + 1} von ${props.images.length}`"
            class="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
            :class="loaded ? 'opacity-100' : 'opacity-0'"
            @load="loaded = true"
          />
        </div>

        <button
          type="button"
          aria-label="Vorheriges Foto"
          class="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 transition-colors hover:bg-paper/20 sm:flex"
          @click="show(-1)"
        >
          <Icon name="lucide:chevron-left" class="h-7 w-7" />
        </button>
        <button
          type="button"
          aria-label="Nächstes Foto"
          class="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 transition-colors hover:bg-paper/20 sm:flex"
          @click="show(1)"
        >
          <Icon name="lucide:chevron-right" class="h-7 w-7" />
        </button>
      </div>

      <p class="py-4 text-center font-mono text-xs text-paper/70">
        {{ index + 1 }} / {{ props.images.length }}
      </p>
    </div>
  </Teleport>
</template>
