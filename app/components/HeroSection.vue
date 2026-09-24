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

    <div class="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-28 sm:px-6 sm:py-36">
      <p class="font-mono text-sm font-medium uppercase tracking-widest text-bronze-light">
        Video · Foto · Editing
      </p>
      <h1 class="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.03em] sm:text-7xl">
        Bilder und Geschichten, die hängen bleiben.
      </h1>
      <p class="max-w-[34rem] text-lg leading-[1.7] text-paper/75">
        Ich bin Chris – Videoeditor, Videograf und Fotograf aus Wolfenbüttel. Ich unterstütze
        Unternehmen, Künstler:innen und Privatpersonen dabei, ihre Momente in starke visuelle
        Inhalte zu verwandeln.
      </p>
      <div class="flex flex-wrap gap-4 pt-2">
        <a
          href="mailto:info@steinertmedia.de?subject=Projektanfrage"
          class="rounded-md bg-bronze-light px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          Kontakt aufnehmen
        </a>
        <a
          href="#portfolio"
          class="rounded-md border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper/60"
        >
          Portfolio ansehen
        </a>
      </div>
    </div>
  </section>
</template>
