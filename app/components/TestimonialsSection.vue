<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <section id="kundenstimmen" class="py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
        Kundenstimmen
      </h2>
      <p class="mt-4 max-w-2xl leading-[1.7] text-body">
        Was Kund:innen über die Zusammenarbeit sagen.
      </p>

      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        <figure
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          v-reveal
          class="flex flex-col rounded-xl bg-paper p-6 shadow-sm ring-1 ring-line"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <blockquote class="leading-[1.7] text-body">"{{ testimonial.quote }}"</blockquote>
          <figcaption class="mt-auto flex items-center gap-3 pt-4">
            <img
              v-if="testimonial.avatar"
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-line"
            />
            <p class="text-sm text-grey">
              <a
                v-if="testimonial.link"
                :href="testimonial.link"
                target="_blank"
                rel="noopener noreferrer"
                class="font-medium text-ink hover:text-bronze"
              >
                {{ testimonial.name }}
              </a>
              <span v-else class="font-medium text-ink">{{ testimonial.name }}</span>
              · {{ testimonial.company }}
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
