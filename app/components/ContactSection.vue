<script setup lang="ts">
const contactEmail = 'hallo@steinertmedia.de'
</script>

<template>
  <section id="kontakt" class="bg-gray-950 py-24 text-white">
    <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
      <h2 class="text-3xl font-bold sm:text-4xl">
        Lass uns dein Projekt umsetzen
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-gray-300">
        Ob Imagefilm, Hochzeitsvideo, Musikvideo oder Fotoshooting – schreib
        mir kurz worum es geht, ich melde mich zeitnah zurück.
      </p>

      <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          :href="`mailto:${contactEmail}`"
          class="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-400"
        >
          {{ contactEmail }}
        </a>
        <a
          href="tel:+491234567890"
          class="rounded-md border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gray-400"
        >
          +49 123 4567890
        </a>
      </div>
    </div>
  </section>
</template>
