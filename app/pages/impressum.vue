<script setup lang="ts">
useHead({
  title: 'Impressum'
})
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
    <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">
      Impressum
    </h1>

    <div class="mt-10 space-y-10 text-gray-700">
      <section>
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Angaben gemäß § 5 TMG
        </h2>
        <p class="mt-2 leading-relaxed">
          Christoph Steinert<br>
          Grüner Platz 26a<br>
          38302 Wolfenbüttel
        </p>
      </section>

      <section>
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Kontakt
        </h2>
        <p class="mt-2 leading-relaxed">
          E-Mail:
          <a
            href="mailto:chris.steinert14@gmail.com"
            class="text-orange-600 hover:underline"
          >chris.steinert14@gmail.com</a>
        </p>
      </section>

      <section>
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Redaktionell verantwortlich
        </h2>
        <p class="mt-2 leading-relaxed">
          Christoph Steinert
        </p>
      </section>

      <section>
        <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p class="mt-2 leading-relaxed">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherstreitschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>

    <NuxtLink
      to="/"
      class="mt-16 inline-block text-sm font-medium text-gray-500 hover:text-gray-900"
    >
      ← Zurück zur Startseite
    </NuxtLink>
  </div>
</template>
