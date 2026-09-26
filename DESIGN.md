---
name: SteinertMedia
description: Ein-Personen-Portfolio für Video, Foto und Editing aus Wolfenbüttel
colors:
  ink:
    canonical: "#1B1D1C"
  paper:
    canonical: "#FDFBF7"
  bronze:
    canonical: "#9A6F3F"
  bronze-light:
    canonical: "#C08E52"
  grey:
    canonical: "#6B6D64"
  line:
    canonical: "#DAD5CB"
  body:
    canonical: "#45483F"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  md: "6px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.bronze-light}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.body}"
    rounded: "{rounded.xl}"
    padding: "24px"
  filter-pill:
    backgroundColor: "transparent"
    textColor: "{colors.body}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: SteinertMedia

## Overview

**Creative North Star: "Der Fokuspunkt"**

Die Seite denkt in einem einzigen scharf gestellten Moment statt in
Dutzenden gleichwertigen Reizen: ein ruhiger, warmer Papierton trägt den
Inhalt, ein einzelner Bronze-Akzent markiert, worauf es ankommt, und das
Fokusfeld-Icon der Marke (die Eckklammern eines Kamera-Sucherrahmens) zieht
sich als fast unsichtbares Wasserzeichen (4 % Deckkraft) durch den
Hintergrund jeder Seite. Der Kamera-Zoom-Hero – ein beim Scrollen
pinniertes Bild, das sich von der ganzen Kamera in einen einzelnen Monitor
hineinzoomt – ist die wörtliche Umsetzung dieses Leitbilds: von der
Übersicht auf den einen relevanten Ausschnitt fokussieren.

Die Bildsprache ist zurückhaltend und handwerklich statt laut: keine
Kennzahlen-Kacheln, keine erfundenen Stats, keine dekorativen Schatten.
Fotos und Karten bekommen nur einen leisen Rahmen (`ring-1 ring-line` +
`shadow-sm`) statt vorgetäuschter Tiefe. Wo Persönlichkeit gebraucht wird,
kommt sie aus präzise getimter, filmisch motivierter Motion (Klappen-
Scharnier, REC-Blinken, Sound-Ticks) statt aus Farbe oder Ornament.

**Key Characteristics:**
- Ein Bronze-Akzent auf großteils neutraler Papier-/Graphit-Basis
- Fotografie/Video als Beweis, nie als Dekoration – jedes Bild ist ein
  echtes Projektfoto, kein Stock-Platzhalter
- Flach in der Fläche; Tiefe entsteht nur durch einen dezenten
  Rahmen+Schatten auf Foto-/Karten-Inhalten
- Filmisch motivierte Signature-Motion (Kamera-Zoom, Klappe, Timecode-
  Playhead) statt generischer UI-Animationen
- Das Fokusfeld-Icon als durchgehendes, fast unsichtbares Wasserzeichen

## Colors

Ein warmes, gedämpftes Palette-Paar (Graphit/Papier) trägt die Fläche; Bronze ist die einzige Akzentfarbe und bleibt bewusst selten.

### Primary
- **Warmes Messing-Highlight** (`#C08E52`, `bronze-light`): Die interaktive Akzentfarbe – Primary-Buttons, Hero-Eyebrow, der wandernde Timecode-Playhead im Hero. Signalisiert "hier handeln/hinschauen".
- **Gedämpftes Bronze** (`#9A6F3F`, `bronze`): Ruhigere Variante für Checkmarks, Icons und Hover-Zustände von Textlinks – Akzent, der nicht um Aufmerksamkeit konkurriert.

### Neutral
- **Tiefes Graphit-Schwarz** (`#1B1D1C`, `ink`): Header, Hero- und Kontakt-Bühne (dunkle Flächen), primäre Überschriftenfarbe auf hellem Grund.
- **Warmes Naturpapier** (`#FDFBF7`, `paper`): Seiten-/Kartenhintergrund; nie reines Weiß.
- **Ruhiges Steingrau** (`#6B6D64`, `grey`): Sekundärer Text – Meta-Angaben wie Testimonial-Rolle/Firma.
- **Sandiges Beige** (`#DAD5CB`, `line`): Trennlinien, Karten-/Foto-Rahmen (`ring-1`), Platzhalter-Hintergrund für ladende Bilder.
- **Gedämpftes Olivgrau** (`#45483F`, `body`): Fließtext-Standardfarbe – wärmer als reines Schwarz, bleibt aber klar lesbar.

### Named Rules
**Die Ein-Akzent-Regel.** Bronze (in beiden Abstufungen) ist die einzige Farbe außerhalb Graphit/Papier/Grau. Sie erscheint gezielt auf Interaktion und Aufmerksamkeitspunkten, nie flächig.

## Typography

**Display/Headline Font:** Plus Jakarta Sans (mit `sans-serif`-Fallback)
**Body Font:** Plus Jakarta Sans (mit `sans-serif`-Fallback)
**Label/Mono Font:** JetBrains Mono (mit `monospace`-Fallback)

**Character:** Eine ruhige Grotesk trägt Überschriften und Fließtext gleichermaßen – kein zweites Display-Face. JetBrains Mono taucht nur an technischen/filmischen Stellen auf (Hero-Eyebrow, Foto-Zähler-Badge), wie ein eingeblendeter Timecode.

### Hierarchy
- **Display** (500, `text-4xl` → `sm:text-6xl`, `leading-[1.15]`, `tracking-tight`): Hero-H1, einmal pro Seite.
- **Headline** (500, `text-3xl` → `sm:text-4xl`, `leading-[1.15]`, `tracking-tight`): Section-H2 (Über mich, Portfolio, Kundenstimmen, Kontakt).
- **Body** (400, `text-base`/`text-lg` im Hero, `leading-[1.7]`): Fließtext; Zeilenlänge durch `max-w-xl`/`max-w-2xl` begrenzt.
- **Label** (500, `text-sm`, `tracking-widest`, `uppercase`, Mono): Hero-Eyebrow ("Video · Foto · Editing"), Foto-Zähler-Badge in der Galerie.

### Named Rules
**Die Ein-Schrift-Regel.** Plus Jakarta Sans trägt jede Text-Hierarchie; JetBrains Mono ist ausschließlich für kurze, technisch/filmisch konnotierte Label reserviert, nie für Fließtext.

## Layout

Ein wiederkehrender `max-w-6xl`-Container (Kontakt-Section enger: `max-w-4xl`) mit responsivem Außenabstand `px-4`/`sm:px-6`. Sections binden sich an einen `py-24`-Rhythmus (96 px) – jede Section bekommt gleich viel Luft, unabhängig vom Inhalt. Card-/Foto-Grids nutzen `gap-6` (24 px) innerhalb einer Gruppe und `gap-12` (48 px) zwischen großen Blöcken (z. B. Bild/Text in "Über mich"). Responsive Bruchpunkte folgen Tailwinds Standard-Skala (`sm`, `lg`); die meisten Grids gehen von 1 Spalte (mobil) auf 2–3 Spalten (`sm:grid-cols-2`, `lg:grid-cols-3`).

### Layout-Layering (gezielte Ausnahme von der Flächen-Regel)

Zwei Stellen brechen bewusst mit der reinen Fläche, um Tiefe zu erzeugen,
ohne neue Farben oder Schatten-Stufen einzuführen:
- **Etikett über dem Bild:** Die Kategorie (Video/Foto/Editing) liegt als
  Paper-Pill (`bg-paper/95`, `rounded-full`) direkt auf dem Foto, nicht als
  Text darunter – Quiet-Frame bleibt auf der Karte selbst erhalten. Die
  Portfolio-Karten sind ansonsten alle gleich groß (kein Bento-Raster) – bei
  nur fünf Projekten wirkten unterschiedlich breite Kacheln unruhig statt
  gezielt gesetzt; das lohnt sich erst mit deutlich mehr Projekten.
- **Über-mich-Overlap:** Die Überschrift "Über mich" ist ein massiver
  Graphit-Block (`bg-ink`, Text `text-paper`, scharfe Kanten, kein Radius,
  kein Schatten) und schneidet deutlich in die obere rechte Ecke des
  Portraits (`lg:-ml-32`) – dieselbe Ink/Paper-Paarung wie Header und Hero,
  nur hier als Überschrift statt als Fläche. Bewusst kein Card-Style
  (`rounded-xl` + `shadow-sm` + `ring-1`) und keine Rand-Linie dafür – ein
  Paper-Label mit farbigem Border sah wie ein Instagram-Story-Sticker aus,
  nicht wie ein Layout-Element.

Die Kundenstimmen-Karten bleiben gleich groß und unversetzt (kein
`sm:mt-10`) – bei nur zwei Testimonials wirkte ein Versatz unruhig statt
aufgelockert. Das große, blasse Anführungszeichen (`text-bronze/10`) je Karte
bleibt als einziges Auflockerungs-Element dort.

Die Kamera-Zoom-Überschrift ("Ein Blick hinter die Kamera") hat **keinen**
Hintergrund/Rahmen (kein `bg-paper` + `shadow-sm` + `ring-1` Kasten dahinter) –
sie liegt transparent auf dem Kamerafoto. Ein Card-Hintergrund dort hat beim
Scrollen/Zoomen sichtbar falsch überlappt.

**Why:** Rein symmetrische `py-24`-Sections mit gleich großen Karten wirkten
trist, aber Layering muss zur Menge der Inhalte passen – mit zu wenig
Elementen kippt "aufgelockert" schnell in "durcheinander". Die verbliebenen
Muster kommen aus Moodboard-Referenzen (Etikett-über-Bild, Typo-Overlap) und
bleiben innerhalb der bestehenden Farb-/Schatten-Vokabular.

## Elevation & Depth

**Die Quiet-Frame-Regel.** Die Fläche ist standardmäßig komplett flach – keine Schatten auf Sections, Buttons oder Text. Nur Foto-/Karten-Inhalte (Portfolio-Karten, Testimonial-Karten, das Über-mich-Porträt, Testimonial-Avatare) bekommen einen einzigen, immer gleichen Rahmen: `ring-1 ring-line` + `shadow-sm`. Das ist keine Tiefensimulation, sondern eine Einfassung – wie ein Passepartout um ein Foto. Kein Element bekommt einen stärkeren, mehrstufigen oder farbigen Schatten.

### Shadow Vocabulary
- **Quiet frame** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)` + `ring: 1px solid #DAD5CB`): Einziger Tiefen-Ausdruck des Systems, ausschließlich auf Foto-/Karten-Containern.

## Shapes

Drei Radius-Stufen, klar nach Funktion getrennt: `rounded-md` (6 px) für Buttons, `rounded-xl` (12 px) für Foto-/Karten-Container, `rounded-full` für alles Runde – Filter-Pills, Icon-Buttons, Avatare. Keine eckigen Karten mit rundem Button-Radius oder umgekehrt; die drei Stufen werden nicht gemischt.

## Components

Komponenten sind ruhig und handwerklich: klare Kanten, ein leiser Rahmen statt Schatten-Tricks, Zustände über Farbwechsel statt Bewegung (außer bei den namentlich filmischen Signature-Momenten).

### Buttons
- **Shape:** `rounded-md` (6 px), Innenabstand `px-6 py-3`.
- **Primary:** Hintergrund Warmes Messing-Highlight (`#C08E52`), Text Tiefes Graphit-Schwarz (`#1B1D1C`), `font-semibold`.
- **Hover/Focus:** `hover:brightness-110` (Primary), Rahmenaufhellung `hover:border-paper/60` (Secondary/Ghost) – keine Skalierung, kein Schatten.
- **Secondary/Ghost:** Transparenter Hintergrund, `border border-paper/30`, Text Paper – für sekundäre CTAs auf dunklem Grund (Hero: "Portfolio ansehen").

### Filter-Pills
- **Style:** `rounded-full`, `border`, `px-4 py-2`, `text-sm font-medium`.
- **State:** Aktiv = `bg-ink text-paper border-ink`; inaktiv = `text-body border-line`, Hover hellt die Kontur auf (`hover:border-ink/40`).

### Cards / Containers
- **Corner Style:** `rounded-xl` (12 px).
- **Background:** Warmes Naturpapier (`#FDFBF7`).
- **Shadow Strategy:** Quiet Frame (siehe Elevation & Depth) – `ring-1 ring-line` + `shadow-sm`, keine Ausnahme.
- **Border:** Kein zusätzlicher Border über den Ring hinaus.
- **Internal Padding:** `p-5`–`p-6` (20–24 px).

### Navigation
- Dunkler, sticky Header (`bg-ink/95` + `backdrop-blur`) mit Text in `paper/70`, Hover auf volles Paper. Aktive Section wird nicht visuell hervorgehoben (bewusst zurückhaltend). Mobil klappt ein Vollbild-Panel im selben Ink-Ton auf.

### Kamera-Zoom-Hero (Signature Component)
Beim Scrollen pinniertes Bild einer kompletten Kamera, das sich – exakt vermessen an den Bildkoordinaten des Kamera-Fotos – stufenlos in den Monitor der Kamera hineinzoomt; dort erscheinen vier Leistungs-Kacheln (Video, Foto, Editing, Konzeption). Ein Klick auf eine Kachel wechselt in eine fokussierte Detailansicht mit Zurück-Button, Fokus-Management ist vollständig tastaturgesteuert. Trägt die "Fokuspunkt"-Metapher der Seite wörtlich: von der Gesamtausrüstung auf einen einzelnen, relevanten Ausschnitt zoomen.

## Do's and Don'ts

### Do:
- **Do** Fotos/Karten immer mit `ring-1 ring-line shadow-sm` einfassen (Quiet-Frame-Regel), nie ohne Rahmen und nie mit stärkerem Schatten.
- **Do** JetBrains Mono ausschließlich für kurze technische/filmische Label reservieren (Eyebrow, Zähler-Badges), nie für Fließtext oder Überschriften.
- **Do** Bronze (beide Abstufungen) sparsam und gezielt auf Interaktionspunkten einsetzen (Ein-Akzent-Regel).
- **Do** neue Motion filmisch motivieren (Timecode, Klappe, Fokus/Zoom) statt generische UI-Easing-Bibliotheken zu imitieren.

### Don't:
- **Don't** Kennzahlen-Kacheln, erfundene Stats oder Kundenlogos ergänzen – das Produkt zeigt bewusst nur echte Belege (siehe PRODUCT.md).
- **Don't** einen zweiten Akzentton oder ein zweites Display-Face einführen; das System hat bewusst nur eine Schrift und einen Akzent.
- **Don't** Schatten auf Buttons, Sections oder Text legen – Tiefe ist ausschließlich dem Quiet Frame auf Foto-/Karten-Inhalten vorbehalten.
- **Don't** das Fokusfeld-Wasserzeichen (`opacity-[0.04]`) lauter machen oder als aktives UI-Element behandeln – es ist bewusst fast unsichtbar.
