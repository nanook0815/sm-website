# Bilder-Ordnerstruktur

```
images/
  brand/        Logo-Dateien (siehe unten)
  hero/         1 Hintergrundbild für den Hero-Bereich (Querformat, z.B. 1920x1080)
  about/        1 Portraitfoto für die Über-mich-Section
  portfolio/
    video/      Thumbnails für Video-Projekte
    foto/       Thumbnails für Foto-Projekte
    editing/    Thumbnails für Editing-Projekte
  og/           1 Vorschaubild fürs Teilen auf Social Media (1200x630)
```

## Logo & Branding (`brand/`)

```
brand/
  logo.svg            Hauptlogo für den Header (auf dunklem Hintergrund)
  logo-light.svg       optional: Variante für helle Flächen
  logo-mark.svg        optional: nur das Icon/Symbol, ohne Schriftzug
```

SVG bevorzugen (skaliert verlustfrei, kleine Dateigröße). Falls nur PNG vorhanden: mit transparentem Hintergrund, mind. 2x-Auflösung.

## Favicon & App-Icons

Diese liegen **nicht** in `images/`, sondern direkt in [`public/`](../), weil Browser sie dort per Konvention erwarten:

```
public/
  favicon.ico             (bereits vorhanden)
  favicon.svg             optional, moderne Browser
  apple-touch-icon.png    180x180, für iOS „Zum Homescreen hinzufügen"
```

## Namenskonvention Portfolio-Thumbnails

Dateiname = `id` aus [`app/data/portfolio.ts`](../../app/data/portfolio.ts), z. B.:

```
portfolio/video/imagefilm-cafe-nordlicht.jpg
portfolio/foto/event-musikfestival.jpg
```

So ist auf einen Blick klar, welches Bild zu welchem Projekt gehört.

## Neues Portfolio-Projekt hinzufügen

1. Thumbnail (Format 16:9, `.jpg` oder `.webp`) im passenden Kategorie-Ordner ablegen, Dateiname = neue `id`.
2. Neuen Eintrag in `app/data/portfolio.ts` mit derselben `id` ergänzen.

## Formate

- Fotos/Thumbnails: `.jpg` oder `.webp`, keine `.png` außer bei Transparenz nötig.
- Videos werden **nicht** hier abgelegt (Vimeo/YouTube-Embed) – nur die Thumbnails.
