<script setup lang="ts">
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

    <div class="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-4 py-28 sm:px-6 sm:py-32">
      <h1 class="font-medium tracking-[-0.035em]">
        <span class="block text-[clamp(1.5rem,4.5vw,3.125rem)] leading-[1.05] text-paper/50 [text-wrap:balance]">Du brauchst nicht mehr Content.</span>
        <span class="mt-3 block text-[clamp(2.5rem,8vw,5.25rem)] leading-[0.98] [text-wrap:balance]">Du brauchst etwas, das hängen bleibt.</span>
      </h1>
      <div class="mt-12 flex w-full flex-col gap-8 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
        <p class="max-w-[30rem] text-lg leading-[1.7] text-paper/75">
          Ideen, Menschen und Geschichten werden zu Konzepten, Bildern und Videos.
        </p>
        <div class="flex flex-col items-start gap-4 lg:items-end">
          <div class="flex flex-wrap gap-3">
            <a
              href="mailto:info@steinertmedia.de?subject=Projektanfrage"
              class="rounded-md bg-bronze-light px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-light"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#portfolio"
              class="rounded-md border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze-light"
            >
              Portfolio ansehen
            </a>
          </div>
          <p class="font-mono text-xs font-medium uppercase tracking-widest text-paper/55">
            Foto · Video · Editing
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
