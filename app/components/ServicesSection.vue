<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <section id="leistungen" class="bg-paper py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
        Leistungen
      </h2>
      <p class="mt-4 max-w-2xl leading-[1.7] text-body">
        Von der Idee bis zum fertigen Schnitt – alles aus einer Hand.
      </p>

      <div class="mt-12 grid gap-8 sm:grid-cols-3">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-xl border border-line p-6"
        >
          <Icon :name="service.icon" class="h-8 w-8 text-bronze" />
          <h3 class="mt-4 text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
            {{ service.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-body">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
