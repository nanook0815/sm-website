<script setup lang="ts">
useHead({
  title: 'Impressum'
})
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
    <h1 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
      Impressum
    </h1>

    <div class="mt-10 space-y-10 text-body">
      <section>
        <h2 class="font-mono text-sm font-medium uppercase tracking-widest text-grey">
          Angaben gemäß § 5 TMG
        </h2>
        <p class="mt-2 leading-[1.7]">
          Christoph Steinert<br />
          Grüner Platz 26a<br />
          38302 Wolfenbüttel
        </p>
      </section>

      <section>
        <h2 class="font-mono text-sm font-medium uppercase tracking-widest text-grey">Kontakt</h2>
        <p class="mt-2 leading-[1.7]">
          E-Mail:
          <a href="mailto:info@steinertmedia.de" class="text-bronze hover:underline"
            >info@steinertmedia.de</a
          >
        </p>
      </section>

      <section>
        <h2 class="font-mono text-sm font-medium uppercase tracking-widest text-grey">
          Redaktionell verantwortlich
        </h2>
        <p class="mt-2 leading-[1.7]">Christoph Steinert</p>
      </section>

      <section>
        <h2 class="font-mono text-sm font-medium uppercase tracking-widest text-grey">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p class="mt-2 leading-[1.7]">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherstreitschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>

    <NuxtLink to="/" class="mt-16 inline-block text-sm font-medium text-grey hover:text-ink">
      ← Zurück zur Startseite
    </NuxtLink>
  </div>
</template>
