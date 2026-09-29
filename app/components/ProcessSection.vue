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

// Desktop: Index der Kachel unter Maus bzw. Tastaturfokus – nur diese
// Kachel öffnet sich (siehe <style> unten).
const hoveredIndex = ref<number | null>(null)

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

      <!-- Mobile & Tablet: gleiche Linie mit Papierflieger wie am Desktop. Der
           Button sitzt immer unter der gerade sichtbaren Karte und ist der
           Kontakt-Link; die Punkte auf der Linie springen zu den Schritten. -->
      <div class="relative mt-6 h-11 lg:hidden" role="tablist" aria-label="Ablauf-Schritte">
        <div class="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-line" aria-hidden="true"></div>
        <div
          class="pointer-events-none absolute left-0 top-1/2 h-px bg-bronze-light transition-[width] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:duration-[1ms]"
          :style="{ width: `${(mobileActiveIndex + 0.5) * (100 / processSteps.length)}%` }"
          aria-hidden="true"
        ></div>
        <button
          v-for="(step, index) in processSteps"
          :key="step.id"
          type="button"
          class="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          :style="{ left: `${(index + 0.5) * (100 / processSteps.length)}%` }"
          :aria-label="`Zu Schritt ${step.index} springen`"
          :aria-current="index === mobileActiveIndex ? 'true' : undefined"
          @click="scrollToMobileCard(index)"
        >
          <span
            class="h-2 w-2 rounded-full transition-colors"
            :class="index <= mobileActiveIndex ? 'bg-bronze-light' : 'bg-line'"
          ></span>
        </button>
        <a
          href="mailto:info@steinertmedia.de?subject=Projektanfrage"
          aria-label="Kontakt aufnehmen"
          title="Kontakt aufnehmen"
          class="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bronze-light text-ink shadow-sm transition-[left] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110 motion-reduce:duration-[1ms]"
          :style="{ left: `${(mobileActiveIndex + 0.5) * (100 / processSteps.length)}%` }"
        >
          <Icon name="lucide:send" mode="svg" class="h-4 w-4" />
        </a>
      </div>

      <!-- Desktop: "Blende öffnen" – die Kachel öffnet sich per Clip-Maske nach
           oben (keine Höhen-Animation), das Foto setzt sich, der Text wird wie
           beim Schärfeziehen von unscharf zu scharf. -->
      <div class="hidden lg:mt-14 lg:block" @mouseleave="hoveredIndex = null">
        <div class="flex h-[460px] gap-4">
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            tabindex="0"
            class="process-tile group relative overflow-hidden rounded-xl bg-ink outline-none h-full flex-1"
            :class="{ 'is-active': hoveredIndex === index }"
            @mouseenter="hoveredIndex = index"
            @focus="hoveredIndex = index"
          >
            <template v-if="stepPhotos[step.id]">
              <img
                :src="stepPhotos[step.id]!.src"
                :alt="stepPhotos[step.id]!.alt"
                loading="lazy"
                class="process-img absolute inset-0 h-full w-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
                aria-hidden="true"
              ></div>
            </template>
            <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-line/40 group-focus-visible:ring-2 group-focus-visible:ring-bronze-light" aria-hidden="true"></div>
            <div class="relative flex h-full flex-col justify-between p-6">
              <span
                class="process-badge inline-block w-fit rounded-full bg-paper/95 px-2.5 py-1 font-mono text-xs font-medium tracking-widest text-ink"
              >
                {{ step.index }}
              </span>
              <div>
                <h3 class="text-xl font-medium leading-snug tracking-[-0.01em] text-paper">
                  {{ step.title }}
                </h3>
                <div class="process-desc">
                  <p class="text-sm leading-relaxed text-paper/85">{{ step.description }}</p>
                </div>
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

<style scoped>
/* Desktop-Kacheln "Blende öffnen": Die Kachel öffnet sich per Clip-Maske
   nach oben statt ihre Höhe zu animieren; der Text wird wie beim
   Schärfeziehen von unscharf zu scharf. Mit Tailwind-Klassen allein nicht
   sauber lösbar (verzögerte, gestaffelte Übergänge). */
.process-tile {
  clip-path: inset(56px 0 0 0 round 12px);
  transition: clip-path 460ms cubic-bezier(0.16, 1, 0.3, 1);
}
.process-tile.is-active {
  clip-path: inset(0 0 0 0 round 12px);
}
.process-badge {
  transform: translateY(56px);
  transition: transform 460ms cubic-bezier(0.16, 1, 0.3, 1);
}
.process-tile.is-active .process-badge {
  transform: none;
}
.process-img {
  transform: scale(1.06);
  transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
}
.process-tile.is-active .process-img {
  transform: scale(1);
}
.process-desc {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 420ms cubic-bezier(0.16, 1, 0.3, 1);
}
.process-desc > p {
  min-height: 0;
  padding-top: 0.5rem;
  overflow: hidden;
  opacity: 0;
  filter: blur(4px);
  transition:
    opacity 200ms ease-out,
    filter 200ms ease-out;
}
.process-tile.is-active .process-desc {
  grid-template-rows: 1fr;
}
.process-tile.is-active .process-desc > p {
  opacity: 1;
  filter: blur(0);
  transition:
    opacity 360ms ease-out 140ms,
    filter 520ms cubic-bezier(0.16, 1, 0.3, 1) 140ms;
}
@media (prefers-reduced-motion: reduce) {
  .process-tile,
  .process-badge,
  .process-img,
  .process-desc {
    transition-duration: 1ms;
  }
  .process-desc > p {
    filter: none;
  }
}
</style>
