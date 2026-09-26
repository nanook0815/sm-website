<template>
  <section id="ueber-mich" class="py-24">

    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        v-reveal
        class="about-photo relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm ring-1 ring-line sm:aspect-[16/9] lg:aspect-[21/9]"
      >
        <img
          src="/images/about/SM011.1-247.jpg"
          alt="Chris, Gründer von SteinertMedia"
          loading="lazy"
          class="h-full w-full object-cover"
        />
        <div class="about-scrim pointer-events-none absolute inset-0"></div>
        <div class="absolute inset-x-0 bottom-0 z-10 px-6 py-8 sm:px-10 sm:py-10">
          <h2 class="text-3xl font-medium leading-[1.15] tracking-tight text-paper sm:text-4xl">Über mich</h2>
          <p class="mt-4 max-w-xl leading-[1.7] text-paper/85">
            Ich bin Chris, Videoeditor mit Sitz in Wolfenbüttel. Seit mehreren Jahren arbeite ich
            mit Unternehmen, Künstler:innen und Privatpersonen zusammen und begleite Projekte von
            der ersten Idee über den Dreh bis zum fertigen Schnitt. Mein Fokus liegt auf sauberem,
            emotionalem Storytelling – egal ob Imagefilm oder Social-Media-Content.
          </p>
          <ul class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/90">
            <li class="flex items-center gap-2">
              <Icon name="lucide:check" class="h-4 w-4 shrink-0 text-bronze-light" /> Video-Editing & Sounddesign
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:check" class="h-4 w-4 shrink-0 text-bronze-light" /> Videoproduktion vor Ort
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:check" class="h-4 w-4 shrink-0 text-bronze-light" /> Foto- und Hochzeitsfotografie
            </li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.about-scrim {
  background: linear-gradient(to top, rgba(27, 29, 28, 0.5) 0%, rgba(27, 29, 28, 0.175) 45%, rgba(27, 29, 28, 0) 75%);
}
</style>
