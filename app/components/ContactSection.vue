<script setup lang="ts">
const contactEmail = 'info@steinertmedia.de'
</script>

<template>
  <section id="kontakt" class="bg-ink py-24 text-paper">
    <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
      <h2 class="text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl">
        Lass uns dein Projekt umsetzen
      </h2>
      <p class="mx-auto mt-4 max-w-xl leading-[1.7] text-paper/75">
        Ob Imagefilm, Hochzeitsvideo, Musikvideo oder Fotoshooting – schreib mir kurz worum es geht,
        ich melde mich zeitnah zurück.
      </p>

      <div class="mt-10 flex justify-center">
        <a
          :href="`mailto:${contactEmail}`"
          class="rounded-md bg-bronze-light px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          {{ contactEmail }}
        </a>
      </div>
    </div>
  </section>
</template>
