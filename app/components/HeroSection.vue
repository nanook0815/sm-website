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
      <div
        class="absolute bottom-9 flex w-px flex-col items-center [animation:timeline-scan_22s_linear_infinite]"
      >
        <span
          class="h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent border-t-bronze-light/80"
        ></span>
        <span class="h-3 w-px bg-bronze-light/50"></span>
      </div>
    </div>

    <div class="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-28 sm:px-6 sm:py-36">
      <p class="font-mono text-sm font-medium uppercase tracking-widest text-bronze-light">
        Video · Foto · Editing
      </p>
      <h1 class="max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight sm:text-6xl">
        Bilder und Geschichten, die hängen bleiben.
      </h1>
      <p class="max-w-xl text-lg leading-[1.7] text-paper/75">
        Ich bin Chris – Videoeditor, Videograf und Fotograf aus Wolfenbüttel. Ich unterstütze
        Unternehmen, Künstler:innen und Privatpersonen dabei, ihre Momente in starke visuelle
        Inhalte zu verwandeln.
      </p>
      <div class="flex flex-wrap gap-4 pt-2">
        <a
          href="#portfolio"
          class="rounded-md bg-bronze-light px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          Portfolio ansehen
        </a>
        <a
          href="#kontakt"
          class="rounded-md border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper/60"
        >
          Projekt anfragen
        </a>
      </div>
    </div>
  </section>
</template>
