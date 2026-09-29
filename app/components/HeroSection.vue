<script setup lang="ts">
import type { PortfolioCategory } from '~/data/portfolio'

const portfolioCategory = useState<PortfolioCategory | 'Alle'>('portfolioCategory', () => 'Alle')
// Hero-Timeline mit zwei versetzten Spuren. Positionen in Prozent der Spurbreite.
// Klickbare Clips (Bronze) filtern das Portfolio, die grauen Füll-Clips sind reine Optik.
// Reihenfolge wie die Filter in der Portfolio-Section.
type TimelineClip = { category: PortfolioCategory | 'Alle'; track: 0 | 1; start: number; length: number }
type TimelineFiller = { track: 0 | 1; start: number; length: number }

const timelineClips: TimelineClip[] = [
  { category: 'Alle', track: 0, start: 0, length: 22 },
  { category: 'Video', track: 1, start: 20, length: 25 },
  { category: 'Foto', track: 0, start: 42, length: 28 },
  { category: 'Editing', track: 1, start: 66, length: 32 },
]
const timelineFillers: TimelineFiller[] = [
  { track: 0, start: 24, length: 16 },
  { track: 0, start: 72, length: 28 },
  { track: 1, start: 0, length: 18 },
  { track: 1, start: 47, length: 17 },
]

// Playhead in der Clip-Spur folgt der Maus (bzw. dem Finger beim Ziehen), in Prozent der Spurbreite.
const playheadX = ref<number | null>(null)

function movePlayhead(event: PointerEvent) {
  const track = event.currentTarget as HTMLElement
  const rect = track.getBoundingClientRect()
  const percent = ((event.clientX - rect.left) / rect.width) * 100
  playheadX.value = Math.min(100, Math.max(0, percent))
}
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-ink text-paper">
    <div
      class="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 pb-10 pt-24 sm:px-6 sm:pb-14 max-lg:min-h-[calc(100svh-4rem)] max-lg:grid-cols-[minmax(0,1fr)] lg:py-32 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16"
    >
      <div class="flex flex-col items-start max-lg:self-end">
        <h1 class="font-medium tracking-[-0.02em] [font-stretch:82%]">
          <span class="block text-[clamp(1.575rem,4.83vw,3.15rem)] leading-[1.08] text-paper/75 lg:text-paper/50 [text-wrap:balance]">Du brauchst nicht mehr Content.</span>
          <span class="mt-3 block text-[clamp(2.52rem,10.5vw,4.99rem)] lg:text-[clamp(3.15rem,8.19vw,4.99rem)] leading-[0.96] [text-wrap:balance]"><span class="max-lg:block max-lg:whitespace-nowrap">Du brauchst etwas,</span> <span class="max-lg:block max-lg:whitespace-nowrap">das hängen bleibt.</span></span>
        </h1>
        <p class="mt-5 max-w-[30rem] text-base leading-[1.6] text-paper/75 lg:mt-14 lg:text-lg lg:leading-[1.7]">
          Ideen, Menschen und Geschichten werden zu Konzepten, Bildern und Videos.
        </p>
        <div class="mt-8 flex w-full flex-col items-start gap-5 max-lg:items-stretch max-lg:text-center">
          <a
            href="mailto:info@steinertmedia.de?subject=Projektanfrage"
            class="rounded-md bg-bronze-light px-6 py-3 text-sm max-lg:py-4 max-lg:text-base font-semibold text-ink transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-light"
          >
            Kontakt aufnehmen
          </a>
          <p id="hero-timeline-label" class="font-mono text-xs font-medium uppercase tracking-widest text-paper/55 max-lg:-mb-2 lg:-mb-3">
            Portfolio ansehen
          </p>
          <div
            class="hero-timeline"
            :class="{ 'is-scrubbing': playheadX !== null }"
            role="group"
            aria-labelledby="hero-timeline-label"
            @pointermove="movePlayhead"
            @pointerleave="playheadX = null"
          >
            <span
              v-for="(filler, index) in timelineFillers"
              :key="`filler-${index}`"
              class="hero-timeline-filler"
              :style="{ left: `${filler.start}%`, width: `${filler.length}%` }"
              :data-track="filler.track"
              aria-hidden="true"
            ></span>
            <a
              v-for="clip in timelineClips"
              :key="clip.category"
              href="#portfolio"
              class="hero-timeline-clip"
              :style="{ left: `${clip.start}%`, width: `${clip.length}%` }"
              :data-track="clip.track"
              :aria-label="clip.category === 'Alle' ? 'Ganzes Portfolio ansehen' : `${clip.category}-Arbeiten im Portfolio ansehen`"
              @click="portfolioCategory = clip.category"
              @focus="playheadX = clip.start + 1"
              @blur="playheadX = null"
            >
              {{ clip.category }}
            </a>
            <span
              class="hero-timeline-playhead"
              :style="playheadX === null ? undefined : { left: `${playheadX}%` }"
              aria-hidden="true"
            ></span>
          </div>
        </div>
      </div>

      <figure class="mx-auto w-full max-w-sm max-lg:absolute max-lg:inset-0 max-lg:-z-10 max-lg:m-0 max-lg:max-w-none lg:max-w-none">
        <img
          src="/images/bts/SM_BTS-1-web.jpg"
          alt="Chris Steinert fotografiert im Eintracht-Stadion in Braunschweig bei einem Hochzeitsshooting"
          width="1400"
          height="1867"
          fetchpriority="high"
          class="aspect-[3/4] w-full rounded-md object-cover object-[50%_35%] max-lg:aspect-auto max-lg:h-[72%] max-lg:rounded-none max-lg:object-[62%_0%] max-lg:[-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent)] max-lg:[mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-ink from-40% via-ink/85 via-55% to-transparent to-75% lg:hidden"
          aria-hidden="true"
        />
      </figure>
    </div>

  </section>
</template>

<style scoped>
/* Hero-Timeline: pseudo-Elemente, Keyframes und prozentgenaue Clip-Positionen sind mit Tailwind-Utilities nicht sauber lösbar */
/* Zwei Spuren à 44px (Touch-Ziel), 4px Abstand, oben 12px Platz für den Playhead-Kopf */
.hero-timeline {
  position: relative;
  width: 100%;
  max-width: 24rem;
  height: 104px;
}
.hero-timeline-clip,
.hero-timeline-filler {
  position: absolute;
  top: 12px;
  height: 44px;
  border-radius: 6px;
}
.hero-timeline-clip[data-track='1'],
.hero-timeline-filler[data-track='1'] {
  top: 60px;
}
/* Füll-Clips: nur ein flacher grauer Balken ohne Rahmen – klar Deko, nicht klickbar */
.hero-timeline-filler {
  margin-top: 17px;
  height: 10px;
  border-radius: 9999px;
  background: rgb(253 251 247 / 0.07);
}
.hero-timeline-clip {
  display: flex;
  align-items: center;
  padding: 0 10px 4px;
  overflow: hidden;
  border: 1px solid rgb(192 142 82 / 0.7);
  background: color-mix(in srgb, #c08e52 12%, transparent);
  color: #c08e52;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: background-color 0.3s ease-out, color 0.3s ease-out, border-color 0.3s ease-out;
}
.hero-timeline-clip::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 5px;
  background: repeating-linear-gradient(90deg, rgb(192 142 82 / 0.4) 0 1px, transparent 1px 4px);
  -webkit-mask-image: linear-gradient(to top, black, transparent);
  mask-image: linear-gradient(to top, black, transparent);
}
.hero-timeline-clip:hover,
.hero-timeline-clip:focus-visible {
  border-color: #c08e52;
  background: color-mix(in srgb, #c08e52 24%, transparent);
  color: #fdfbf7;
}
.hero-timeline-clip:focus-visible {
  outline: 2px solid #c08e52;
  outline-offset: 2px;
}
.hero-timeline-playhead {
  position: absolute;
  top: 0;
  bottom: -4px;
  left: 2%;
  width: 1px;
  background: #c08e52;
  pointer-events: none;
  transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-timeline-playhead::before {
  content: '';
  position: absolute;
  top: 0;
  left: -5px;
  width: 11px;
  height: 9px;
  background: #c08e52;
  clip-path: polygon(0 0, 100% 0, 100% 55%, 50% 100%, 0 55%);
}
/* Maus/Finger/Tastatur: Playhead klebt direkt an der Position, ohne Nachzieh-Animation */
.hero-timeline.is-scrubbing .hero-timeline-playhead { transition: none; }
.hero-timeline { touch-action: pan-y; }

@media (prefers-reduced-motion: no-preference) {
  .hero-timeline-playhead {
    animation: hero-timeline-sweep 1.8s cubic-bezier(0.65, 0, 0.35, 1) 0.4s backwards;
  }
}

@keyframes hero-timeline-sweep {
  0% { left: 0%; }
  80% { left: 100%; }
  80.01% { left: 0%; }
  100% { left: 2%; }
}
</style>
