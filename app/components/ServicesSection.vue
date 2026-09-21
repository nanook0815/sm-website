<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <section id="leistungen" class="bg-white py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        Leistungen
      </h2>
      <p class="mt-4 max-w-2xl text-gray-600">
        Von der Idee bis zum fertigen Schnitt – alles aus einer Hand.
      </p>

      <div class="mt-12 grid gap-8 sm:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-xl border border-gray-200 p-6"
        >
          <div class="text-3xl">{{ service.icon }}</div>
          <h3 class="mt-4 text-xl font-semibold text-gray-900">
            {{ service.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
