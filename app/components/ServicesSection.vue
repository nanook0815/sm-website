<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <section id="leistungen" class="py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
        Leistungen
      </h2>
      <p class="mt-4 max-w-2xl leading-[1.7] text-body">
        Von der Idee bis zum fertigen Schnitt – alles aus einer Hand.
      </p>

      <div class="mt-12 grid gap-8 sm:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          v-reveal
          class="group rounded-xl border border-line p-6"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="relative inline-flex h-8 w-8 items-center justify-center">
            <svg
              v-if="service.icon === 'lucide:clapperboard'"
              viewBox="0 -5 24 29"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 text-bronze"
            >
              <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <g class="origin-[3px_11px] rotate-[-14deg] transition-transform duration-300 ease-out group-hover:rotate-0">
                <path
                  d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
                />
                <path d="m12.296 3.464 3.02 3.956" />
                <path d="m6.18 5.276 3.1 3.899" />
              </g>
              <g
                aria-hidden="true"
                stroke-width="1.5"
                class="origin-right opacity-0 group-hover:[animation:sound-tick_0.5s_ease-out]"
              >
                <path d="M22 8.5 23.8 7" />
                <path d="M22 13.5 23.8 15" />
              </g>
            </svg>
            <template v-else>
              <span
                v-if="service.icon === 'lucide:camera'"
                aria-hidden="true"
                class="absolute -right-1.5 -top-1.5 origin-bottom-left opacity-0 group-hover:[animation:sparkle-pop_0.6s_ease-out]"
              >
                <Icon name="lucide:sparkle" class="h-3.5 w-3.5 text-bronze-light" />
              </span>
              <Icon :name="service.icon" class="relative h-8 w-8 text-bronze" />
              <span
                v-if="service.icon === 'lucide:video'"
                aria-hidden="true"
                class="absolute left-[38%] top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze opacity-0 group-hover:opacity-100 group-hover:[animation:rec-blink_0.9s_ease-in-out_infinite]"
              />
            </template>
          </div>
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
