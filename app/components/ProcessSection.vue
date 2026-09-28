<script setup lang="ts">
import { processSteps } from '~/data/process'

const stepPhotos: Partial<Record<string, { src: string; alt: string }>> = {
  konzept: {
    src: '/images/process/konzept-planung.svg',
    alt: 'Illustration: Storyboard-Karten für die Konzept- und Planungsphase (Platzhalter)'
  },
  feedback: {
    src: '/images/process/feedback.svg',
    alt: 'Illustration: Bildschirm mit Feedback-Markierung im Schnitt-Review (Platzhalter)'
  }
}

// Desktop-Kontur: im Ruhezustand liegen alle Kacheln auf derselben Höhe.
// Beim Hovern wächst ausschließlich die Kachel unter der Maus – Nachbarn
// bleiben unverändert auf Ruhehöhe stehen, nichts wird kleiner als in Ruhe.
const REST_HEIGHT = 410
const PEAK_HEIGHT = 460

const hoveredIndex = ref<number | null>(null)

function tileHeight(index: number) {
  return hoveredIndex.value === index ? PEAK_HEIGHT : REST_HEIGHT
}

// Mobile-Karussell: zeigt per Punkt-Indikator an, welche Karte gerade im
// Scroll-Snap-Streifen sichtbar ist, und macht die horizontale Scrollbarkeit
// so erkennbar, auch ohne den seitlichen Bild-Peek.
const mobileActiveIndex = ref(0)
const mobileScrollRef = ref<HTMLElement | null>(null)
const mobileCardRefs = ref<HTMLElement[]>([])

function setMobileCardRef(el: Element | null, index: number) {
  if (el) mobileCardRefs.value[index] = el as HTMLElement
}

function scrollToMobileCard(index: number) {
  mobileCardRefs.value[index]?.scrollIntoView({
    behavior: 'smooth',
    inline: 'start',
    block: 'nearest'
  })
}

let mobileObserver: IntersectionObserver | null = null

onMounted(() => {
  mobileObserver = new IntersectionObserver(
    (entries) => {
      const mostVisible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (!mostVisible) return
      const index = mobileCardRefs.value.indexOf(mostVisible.target as HTMLElement)
      if (index !== -1) mobileActiveIndex.value = index
    },
    { root: mobileScrollRef.value, threshold: 0.6 }
  )
  mobileCardRefs.value.forEach((card) => mobileObserver?.observe(card))
})

onUnmounted(() => mobileObserver?.disconnect())
</script>

<template>
  <section id="ablauf" class="py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
        So läuft die Zusammenarbeit ab
      </h2>
      <p class="mt-4 max-w-2xl leading-[1.7] text-body">
        Ein klarer Ablauf, direkte Kommunikation und jederzeit wissen, wie es mit deinem Projekt weitergeht.
      </p>

      <!-- Mobile & Tablet: Karussell mit Scroll-Snap, abwechselnd solide/Foto
           wie am Desktop, plus Punkt-Indikator darunter. Gilt bis zur
           Desktop-Breakpoint (lg), weil ohne Maus kein Hover funktioniert –
           die Kacheln wachsen breakpoint-abhängig mit, damit auf Tablet
           nicht eine einzelne überdimensionierte Handy-Karte zu sehen ist. -->
      <div
        ref="mobileScrollRef"
        class="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        <div
          v-for="(step, index) in processSteps"
          :key="step.id"
          :ref="(el) => setMobileCardRef(el as Element | null, index)"
          class="w-[78%] shrink-0 snap-start overflow-hidden rounded-xl shadow-sm ring-1 ring-line sm:w-[45%]"
          :class="stepPhotos[step.id] ? 'relative' : 'bg-ink'"
        >
          <template v-if="stepPhotos[step.id]">
            <img
              :src="stepPhotos[step.id]!.src"
              :alt="stepPhotos[step.id]!.alt"
              loading="lazy"
              class="aspect-[4/3] w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
              aria-hidden="true"
            ></div>
            <span
              class="absolute left-4 top-4 rounded-full bg-paper/95 px-2.5 py-1 font-mono text-xs font-medium tracking-widest text-ink"
            >
              {{ step.index }}
            </span>
            <div class="absolute inset-x-0 bottom-0 p-5">
              <h3 class="text-base font-semibold tracking-[-0.01em] text-paper">
                {{ step.title }}
              </h3>
              <p class="mt-1.5 text-sm leading-relaxed text-paper">{{ step.description }}</p>
            </div>
          </template>
          <div v-else class="p-6">
            <span
              class="inline-block w-fit rounded-full bg-paper/95 px-2.5 py-1 font-mono text-xs font-medium tracking-widest text-ink"
            >
              {{ step.index }}
            </span>
            <h3 class="mt-3 text-base font-semibold tracking-[-0.01em] text-paper">
              {{ step.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-paper">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <div
        class="mt-4 flex justify-center gap-2 lg:hidden"
        role="tablist"
        aria-label="Ablauf-Schritte"
      >
        <button
          v-for="(step, index) in processSteps"
          :key="step.id"
          type="button"
          class="h-2 rounded-full transition-[width,background-color] duration-300"
          :class="index === mobileActiveIndex ? 'w-5 bg-bronze' : 'w-2 bg-line'"
          :aria-label="`Zu Schritt ${step.index} springen`"
          :aria-current="index === mobileActiveIndex ? 'true' : undefined"
          @click="scrollToMobileCard(index)"
        ></button>
      </div>

      <!-- Desktop: "Konturbogen" – fünf gleich hohe Kacheln in Ruhe; beim
           Hovern wächst nur die Kachel unter der Maus, alle anderen bleiben
           auf Ruhehöhe stehen. Unterhalb der Reihe hellt sich eine Linie auf
           und ein einzelner Punkt wandert unter die gehoverte Kachel. Die
           Kachelreihe hat eine feste Höhe (Scheitelpunkt-Maß), damit kein
           Nachbarinhalt der Seite beim Hovern mitspringt. Ungerade Schritte
           (01/03/05) bleiben solide Bronze-Kacheln, gerade Schritte (02/04)
           sind Foto-Kacheln. Direction contract:
           .impeccable/surfaces/app-components-processsection-vue.md -->
      <div class="hidden lg:mt-14 lg:block" @mouseleave="hoveredIndex = null">
        <div
          class="flex items-end gap-4"
          :style="{ height: `${PEAK_HEIGHT}px` }"
        >
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            class="relative z-10 flex-1 overflow-hidden rounded-xl shadow-sm ring-1 ring-line transition-[height] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-[1ms]"
            :class="stepPhotos[step.id] ? '' : 'bg-ink'"
            :style="{ height: `${tileHeight(index)}px` }"
            @mouseenter="hoveredIndex = index"
          >
            <template v-if="stepPhotos[step.id]">
              <img
                :src="stepPhotos[step.id]!.src"
                :alt="stepPhotos[step.id]!.alt"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
                aria-hidden="true"
              ></div>
              <span
                class="absolute left-4 top-4 rounded-full bg-paper/95 px-2.5 py-1 font-mono text-xs font-medium tracking-widest text-ink"
              >
                {{ step.index }}
              </span>
              <div class="absolute inset-x-0 bottom-0 p-5">
                <h3
                  class="font-medium tracking-[-0.01em] text-paper transition-[font-size,line-height] duration-300"
                  :class="hoveredIndex === index ? 'text-lg' : 'text-xl'"
                >
                  {{ step.title }}
                </h3>
                <p
                  class="overflow-hidden text-sm leading-relaxed text-paper/80 transition-[max-height,opacity,margin-top] duration-300 motion-reduce:transition-none"
                  :class="
                    hoveredIndex === index
                      ? 'mt-1.5 max-h-60 opacity-100'
                      : 'mt-0 max-h-0 opacity-0'
                  "
                >
                  {{ step.description }}
                </p>
              </div>
            </template>
            <div v-else class="flex h-full flex-col justify-between p-6">
              <span
                class="inline-block w-fit rounded-full bg-paper/95 px-2.5 py-1 font-mono text-xs font-medium tracking-widest text-ink"
              >
                {{ step.index }}
              </span>
              <div>
                <h3
                  class="font-medium tracking-[-0.01em] text-paper transition-[font-size,line-height] duration-300"
                  :class="hoveredIndex === index ? 'text-lg' : 'text-xl'"
                >
                  {{ step.title }}
                </h3>
                <p
                  class="overflow-hidden text-sm leading-relaxed text-paper transition-[max-height,opacity,margin-top] duration-300 motion-reduce:transition-none"
                  :class="
                    hoveredIndex === index
                      ? 'mt-1.5 max-h-60 opacity-100'
                      : 'mt-0 max-h-0 opacity-0'
                  "
                >
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative mt-8 h-9">
          <div
            class="pointer-events-none absolute inset-x-0 top-[3px] h-px transition-colors duration-[380ms] ease-out motion-reduce:duration-[1ms]"
            :class="hoveredIndex !== null ? 'bg-bronze-light' : 'bg-line'"
            aria-hidden="true"
          ></div>
          <a
            href="mailto:info@steinertmedia.de?subject=Projektanfrage"
            aria-label="Kontakt aufnehmen"
            title="Kontakt aufnehmen"
            class="absolute top-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-light p-2.5 text-ink shadow-sm transition-[left,opacity,transform] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110 motion-reduce:duration-[1ms]"
            :class="hoveredIndex !== null ? 'opacity-100 scale-100' : 'pointer-events-none scale-[0.08] opacity-0 focus-visible:pointer-events-auto focus-visible:scale-100 focus-visible:opacity-100'"
            :style="{ left: `${((hoveredIndex ?? 0) + 0.5) * (100 / processSteps.length)}%` }"
          >
            <Icon name="lucide:send" mode="svg" class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
