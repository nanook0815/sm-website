<script setup lang="ts">
import { testimonials } from '~/data/testimonials'

// Erste Kundenstimme groß links, alle weiteren im Karussell rechts.
const leadTestimonial = testimonials[0]
const moreTestimonials = testimonials.slice(1)

const stripRef = ref<HTMLElement | null>(null)

function scrollStrip(direction: 1 | -1) {
  const el = stripRef.value
  if (!el) return
  el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
}
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

      <div class="mt-10 grid gap-6 lg:grid-cols-12">
        <figure
          v-if="leadTestimonial"
          v-reveal
          class="flex flex-col rounded-xl bg-ink px-6 py-10 text-paper shadow-sm sm:px-10 lg:col-span-7"
        >
          <Icon name="lucide:quote" class="h-10 w-10 text-bronze-light" aria-hidden="true" />
          <blockquote class="mt-5 text-[clamp(1.25rem,3vw,1.5rem)] font-medium leading-[1.3] tracking-[-0.02em] [text-wrap:pretty]">
            {{ leadTestimonial.quote }}
          </blockquote>
          <figcaption class="mt-auto flex items-center gap-4 pt-8">
            <img
              v-if="leadTestimonial.avatar"
              :src="leadTestimonial.avatar"
              :alt="leadTestimonial.name"
              class="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-bronze-light/70 ring-offset-2 ring-offset-ink"
            />
            <p class="text-sm leading-snug text-paper/65">
              <a
                v-if="leadTestimonial.link"
                :href="leadTestimonial.link"
                target="_blank"
                rel="noopener noreferrer"
                class="block text-base font-semibold text-paper transition-colors hover:text-bronze-light"
              >
                {{ leadTestimonial.name }}
              </a>
              <span v-else class="block text-base font-semibold text-paper">{{ leadTestimonial.name }}</span>
              {{ leadTestimonial.company }}
            </p>
          </figcaption>
        </figure>

        <div v-if="moreTestimonials.length" class="flex min-w-0 flex-col lg:col-span-5">
          <div
            ref="stripRef"
            class="flex flex-1 snap-x snap-mandatory gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            tabindex="0"
            aria-label="Weitere Kundenstimmen, seitlich scrollbar"
          >
            <figure
              v-for="testimonial in moreTestimonials"
              :key="testimonial.id"
              class="flex w-[86%] shrink-0 snap-start flex-col rounded-xl bg-paper p-6 shadow-sm ring-1 ring-line sm:w-[calc((100%-1.25rem)/2)] sm:p-7 lg:w-full"
            >
              <Icon name="lucide:quote" class="h-6 w-6 text-bronze" aria-hidden="true" />
              <blockquote class="mt-3 leading-[1.7] text-body">{{ testimonial.quote }}</blockquote>
              <figcaption class="mt-auto flex items-center gap-3 pt-6">
                <img
                  v-if="testimonial.avatar"
                  :src="testimonial.avatar"
                  :alt="testimonial.name"
                  class="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-line"
                />
                <p class="text-sm leading-snug text-grey">
                  <a
                    v-if="testimonial.link"
                    :href="testimonial.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block font-semibold text-ink transition-colors hover:text-bronze"
                  >
                    {{ testimonial.name }}
                  </a>
                  <span v-else class="block font-semibold text-ink">{{ testimonial.name }}</span>
                  {{ testimonial.company }}
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <p class="text-sm text-grey">{{ moreTestimonials.length }} weitere {{ moreTestimonials.length === 1 ? 'Stimme' : 'Stimmen' }}</p>
            <div v-if="moreTestimonials.length > 1" class="flex gap-2">
              <button
                type="button"
                aria-label="Vorherige Kundenstimme"
                class="grid h-11 w-11 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                @click="scrollStrip(-1)"
              >
                <Icon name="lucide:arrow-left" class="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Nächste Kundenstimme"
                class="grid h-11 w-11 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-ink hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                @click="scrollStrip(1)"
              >
                <Icon name="lucide:arrow-right" class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
