# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Vorrangig Unternehmen, die einen Imagefilm oder Social-Media-Videocontent
brauchen. Daneben bucht Chris auch Privatkund:innen (Hochzeitsfotografie,
Videoproduktion vor Ort, Portraits).

## Product Purpose

Ein-Personen-Portfolio-Website für SteinertMedia (Chris, Videoeditor mit Sitz
in Wolfenbüttel). Zeigt Referenzen/Leistungen und soll Unternehmen sowie
Privatkund:innen zur Kontaktaufnahme für Video-Editing, Videoproduktion und
Fotografie bewegen.

## Positioning

Emotionales, sauberes Storytelling statt technischer Spielerei oder gestellter
Aufnahmen — das unterscheidet Chris von anderen Videograf:innen/Fotograf:innen
in der Region.

## Operating Context

Statische One-Page-Website (`app/pages/index.vue`) mit Sektionen: Hero, Über
mich, Leistungen, Portfolio (Foto-Galerie mit Lightbox), Testimonials,
Kontakt. Dazu ein Impressum. Deployment via Vercel, automatischer Build bei
jedem Push.

## Capabilities and Constraints

- Leistungen: Video-Editing & Sounddesign, Videoproduktion vor Ort, Foto- und
  Hochzeitsfotografie (siehe `app/data/services.ts`).
- Keine harten Zahlen/Fakten (Jahre Erfahrung, Projektanzahl, Kundenlogos,
  Preise) auf der Seite — bewusst nicht erfinden, nur die echten Testimonials
  und Fotos verwenden, die bereits im Projekt hinterlegt sind
  (`app/data/testimonials.ts`, `app/data/portfolio.ts`).

## Brand Commitments

Vollständiges Corporate Design vorhanden (siehe CI-PDF unter
`public/images/brand/SteinertMedia CI.pdf`, Assets unter
`public/images/brand/export/`), 2026-09-22 in die Website übernommen:
verbindliche Tailwind-Farbtoken (`ink`/`paper`/`bronze`/`bronze-light`/`grey`/
`line`/`body`), Fonts Plus Jakarta Sans + JetBrains Mono, Logo-Wortmarke als
Text (kein Pfad). Diese Vorgaben gelten für alles Visuelle, nicht nur für das
ursprüngliche Rebrand.

## Evidence on Hand

Echte Testimonials und Portfolio-Fotos liegen bereits im Projekt vor
(`app/data/testimonials.ts`, `app/data/portfolio.ts`,
`public/images/about/`). Keine sonstigen Kennzahlen, Kundenlogos oder
Presseerwähnungen vorhanden — nicht erfinden.

## Product Principles

- Emotionales Storytelling vor technischer Perfektion oder gestellten
  Aufnahmen.
- Alles aus einer Hand: Konzept, Dreh, Foto und Schnitt durch eine Person statt
  mehrere Dienstleister.
- Persönlicher, regionaler Ansprechpartner statt großer Agentur.
- Keine erfundenen Zahlen/Fakten — nur echte Belege zeigen.
