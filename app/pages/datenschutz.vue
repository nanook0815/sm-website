<script setup lang="ts">
useHead({
  title: 'Datenschutzerklärung'
})

const sections = [
  {
    title: '1. Verantwortlicher',
    paragraphs: [
      'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:'
    ],
    address: true
  },
  {
    title: '2. Hosting (Vercel)',
    paragraphs: [
      'Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf der Seite verarbeitet Vercel technisch notwendige Daten, damit die Seite ausgeliefert werden kann (siehe Server-Logfiles).',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: Mein berechtigtes Interesse ist der sichere und zuverlässige Betrieb der Website. Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung. Da Daten in die USA übermittelt werden können, stützt sich die Übermittlung auf das EU-U.S. Data Privacy Framework und ergänzend auf Standardvertragsklauseln der EU-Kommission.'
    ]
  },
  {
    title: '3. Server-Logfiles',
    paragraphs: [
      'Bei jedem Aufruf der Website werden automatisch Daten übermittelt und kurzzeitig in Logfiles gespeichert. Das sind: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite bzw. Datei, übertragene Datenmenge, Referrer-URL (zuvor besuchte Seite) sowie Browsertyp und Betriebssystem.',
      'Die Daten dienen der Auslieferung der Seite, der Fehleranalyse und der Abwehr von Missbrauch. Sie werden nicht mit anderen Datenquellen zusammengeführt und nur so lange gespeichert, wie es dafür erforderlich ist. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.'
    ]
  },
  {
    title: '4. Reichweitenmessung (Vercel Web Analytics)',
    paragraphs: [
      'Ich nutze Vercel Web Analytics, um zu verstehen, welche Seiten besucht werden und wie die Website genutzt wird. Dabei werden keine Cookies gesetzt und keine Daten gespeichert, mit denen Besucher über mehrere Websites oder Tage hinweg wiedererkannt werden können. Erfasst werden Seitenaufrufe sowie technische Angaben wie Land, Browser, Betriebssystem und Gerätetyp.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer bedarfsgerechten Gestaltung der Website). Du kannst der Verarbeitung jederzeit widersprechen (siehe Abschnitt Deine Rechte).'
    ]
  },
  {
    title: '5. Kontaktaufnahme',
    paragraphs: [
      'Wenn du mir eine E-Mail schreibst oder mich anrufst, verarbeite ich deine Angaben (z. B. E-Mail-Adresse, Telefonnummer, Name, Inhalt der Nachricht), um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn es um einen Vertrag oder vorvertragliche Maßnahmen geht, sonst Art. 6 Abs. 1 lit. f DSGVO.',
      'Ich lösche die Daten, sobald deine Anfrage erledigt ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.'
    ]
  },
  {
    title: '6. Schriften und externe Inhalte',
    paragraphs: [
      'Die verwendeten Schriften werden von meinem eigenen Server ausgeliefert. Beim Aufruf der Website wird dafür keine Verbindung zu Google oder anderen Schriftanbietern aufgebaut. Auf der Seite werden keine Videos, Karten oder sonstige Inhalte von Drittanbietern eingebettet.'
    ]
  },
  {
    title: '7. Links zu anderen Websites',
    paragraphs: [
      'Diese Website enthält Links zu Instagram, YouTube, LinkedIn und zu Websites meiner Kunden. Es handelt sich nur um Links. Erst wenn du darauf klickst, werden Daten an den jeweiligen Anbieter übertragen. Für die dortige Verarbeitung gelten die Datenschutzhinweise des jeweiligen Anbieters.'
    ]
  },
  {
    title: '8. Cookies',
    paragraphs: [
      'Diese Website setzt keine Cookies und verwendet keine Tracking- oder Marketing-Werkzeuge. Deshalb gibt es auch kein Cookie-Banner.'
    ]
  }
]

const rights = [
  'Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)',
  'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
  'Löschung deiner Daten (Art. 17 DSGVO)',
  'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
  'Datenübertragbarkeit (Art. 20 DSGVO)',
  'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)'
]
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
    <h1 class="text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
      Datenschutzerklärung
    </h1>

    <div class="mt-10 space-y-10 text-body">
      <section v-for="section in sections" :key="section.title">
        <h2 class="font-mono text-sm font-medium uppercase tracking-widest text-grey">
          {{ section.title }}
        </h2>
        <p v-for="text in section.paragraphs" :key="text" class="mt-2 leading-[1.7]">
          {{ text }}
        </p>
        <p v-if="section.address" class="mt-2 leading-[1.7]">
          Christoph Steinert<br />
          Grüner Platz 26a<br />
          38302 Wolfenbüttel<br />
          E-Mail:
          <a href="mailto:info@steinertmedia.de" class="text-bronze hover:underline"
            >info@steinertmedia.de</a
          >
        </p>
      </section>

      <section>
        <h2 class="font-mono text-sm font-medium uppercase tracking-widest text-grey">
          9. Deine Rechte
        </h2>
        <p class="mt-2 leading-[1.7]">Du hast gegenüber mir das Recht auf:</p>
        <ul class="mt-2 list-disc space-y-1 pl-6 leading-[1.7]">
          <li v-for="right in rights" :key="right">{{ right }}</li>
        </ul>
        <p class="mt-2 leading-[1.7]">
          Hast du in eine Verarbeitung eingewilligt, kannst du die Einwilligung jederzeit mit
          Wirkung für die Zukunft widerrufen. Zur Ausübung deiner Rechte genügt eine formlose
          Nachricht an die oben genannte E-Mail-Adresse.
        </p>
        <p class="mt-2 leading-[1.7]">
          Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          Zuständig ist die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5,
          30159 Hannover.
        </p>
      </section>

      <section>
        <h2 class="font-mono text-sm font-medium uppercase tracking-widest text-grey">
          10. Aktualität
        </h2>
        <p class="mt-2 leading-[1.7]">
          Stand: Oktober 2026. Ich passe diese Erklärung an, wenn sich die Website oder die
          rechtlichen Vorgaben ändern.
        </p>
      </section>
    </div>

    <NuxtLink to="/" class="mt-16 inline-block text-sm font-medium text-grey hover:text-ink">
      ← Zurück zur Startseite
    </NuxtLink>
  </div>
</template>
