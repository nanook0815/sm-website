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
        Ob Imagefilm oder Fotoshooting – schreib mir kurz worum es geht, ich melde mich zeitnah
        zurück.
      </p>

      <div class="mt-10 flex justify-center">
        <a
          :href="`mailto:${contactEmail}`"
          class="rounded-md border border-ink/10 bg-bronze-light px-6 py-3 text-sm font-semibold tracking-[-0.01em] text-ink transition hover:border-ink/20 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-light"
        >
          {{ contactEmail }}
        </a>
      </div>
    </div>
  </section>
</template>
