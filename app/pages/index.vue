<script setup lang="ts">
useHead({
  title: 'Startseite'
})
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-4xl font-bold text-gray-900">
      Willkommen
    </h1>
    <p class="max-w-2xl text-lg text-gray-600">
      Das ist die Startseite. Platzhalter-Inhalt – hier kommt später die
      eigentliche Vorstellung des Unternehmens hin (Leistungen, Vorteile,
      Call-to-Action usw.).
    </p>
    <NuxtLink
      to="/contact"
      class="inline-block rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
    >
      Jetzt Kontakt aufnehmen
    </NuxtLink>
  </div>
</template>
