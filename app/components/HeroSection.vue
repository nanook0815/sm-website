<script setup lang="ts">
import type { PortfolioCategory } from '~/data/portfolio'

const portfolioCategory = useState<PortfolioCategory | 'Alle'>('portfolioCategory', () => 'Alle')
const heroCategories: PortfolioCategory[] = ['Foto', 'Video', 'Editing']
const timelineTicks = Array.from({ length: 24 })
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-ink text-paper">
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 overflow-hidden" aria-hidden="true">
      <div class="absolute inset-x-0 bottom-10 flex h-8 items-end justify-between px-4 sm:px-6">
        <span
          v-for="(tick, index) in timelineTicks"
          :key="index"
          class="w-px bg-paper/10"
          :class="index % 4 === 0 ? 'h-full bg-paper/15' : 'h-1/2'"
        />
      </div>
      <div class="absolute inset-x-0 bottom-10 h-px bg-paper/10"></div>
      <div class="absolute bottom-10 [animation:timeline-scan_22s_linear_infinite]">
        <span
          class="absolute bottom-0 left-1/2 h-2 w-3 -translate-x-1/2 bg-bronze-light/70 [clip-path:polygon(0_0,100%_0,100%_55%,50%_100%,0_55%)]"
        ></span>
        <span class="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-bronze-light/45"></span>
      </div>
    </div>

    <div
      class="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 pb-10 pt-24 sm:px-6 sm:pb-14 max-lg:min-h-[calc(100svh-4rem)] lg:py-32 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16"
    >
      <div class="flex flex-col items-start max-lg:self-end">
        <h1 class="font-medium tracking-[-0.02em] [font-stretch:82%]">
          <span class="block text-[clamp(1.575rem,4.83vw,3.15rem)] leading-[1.08] text-paper/75 lg:text-paper/50 [text-wrap:balance]">Du brauchst nicht mehr Content.</span>
          <span class="mt-3 block text-[clamp(2.52rem,10.5vw,4.99rem)] lg:text-[clamp(3.15rem,8.19vw,4.99rem)] leading-[0.96] [text-wrap:balance]"><span class="max-lg:block max-lg:whitespace-nowrap">Du brauchst etwas,</span> <span class="max-lg:block max-lg:whitespace-nowrap">das hängen bleibt.</span></span>
        </h1>
        <p class="mt-12 max-w-[30rem] max-lg:hidden text-lg leading-[1.7] text-paper/75 lg:mt-14">
          Ideen, Menschen und Geschichten werden zu Konzepten, Bildern und Videos.
        </p>
        <div class="mt-8 flex flex-col items-start gap-4 max-lg:w-full max-lg:items-stretch max-lg:text-center">
          <div class="flex flex-wrap gap-3 max-lg:flex-col max-lg:gap-1">
            <a
              href="mailto:info@steinertmedia.de?subject=Projektanfrage"
              class="rounded-md bg-bronze-light px-6 py-3 text-sm max-lg:py-4 max-lg:text-base font-semibold text-ink transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-light"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#portfolio"
              class="rounded-md border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors max-lg:border-0 max-lg:px-0 max-lg:py-3 max-lg:text-paper/75 max-lg:underline max-lg:underline-offset-4 hover:border-paper/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-light"
            >
              Portfolio ansehen
            </a>
          </div>
          <p class="flex items-center gap-2 font-mono max-lg:justify-center text-xs font-medium uppercase tracking-widest text-bronze-light">
            <template v-for="(category, index) in heroCategories" :key="category">
              <span v-if="index > 0" aria-hidden="true">·</span>
              <a
                href="#portfolio"
                class="py-2 underline-offset-4 transition-colors hover:text-paper hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-light"
                @click="portfolioCategory = category"
              >
                {{ category }}
              </a>
            </template>
          </p>
        </div>
      </div>

      <!-- Handy: Foto füllt den Hero als Hintergrund, der Text sitzt darauf. Ab lg steht es als eigene Spalte rechts. -->
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
          class="absolute inset-0 bg-gradient-to-t from-ink from-28% via-ink/80 via-42% to-transparent to-60% lg:hidden"
          aria-hidden="true"
        />
        <figcaption class="mt-3 font-mono text-xs uppercase tracking-widest text-paper/55 max-lg:hidden">
          Hochzeitsshooting · Eintracht-Stadion
        </figcaption>
      </figure>
    </div>

  </section>
</template>
