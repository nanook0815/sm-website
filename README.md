# Chris Portfolio

Technisches Grundgerüst für eine Marketing-/Business-Website. Gebaut mit
[Nuxt 4](https://nuxt.com), [TypeScript](https://www.typescriptlang.org/) und
[Tailwind CSS](https://tailwindcss.com/). Es sind noch keine echten Inhalte
enthalten — nur Beispiel-Seiten, die die Struktur zeigen.

## Setup

Voraussetzung: [Node.js](https://nodejs.org/) (Version 20 oder neuer).

Abhängigkeiten installieren:

```bash
npm install
```

Lokalen Entwicklungsserver starten (läuft auf `http://localhost:3000`):

```bash
npm run dev
```

Produktions-Build erstellen (prüft, ob das Projekt fehlerfrei baut):

```bash
npm run build
```

Produktions-Build lokal testen:

```bash
npm run preview
```

Code-Stil prüfen bzw. automatisch korrigieren:

```bash
npm run lint       # nur prüfen
npm run lint:fix    # Probleme automatisch beheben
npm run format      # Formatierung mit Prettier
```

## Ordnerstruktur

Die wichtigsten Ordner liegen unter `app/` (Nuxt-4-Konvention):

| Ordner              | Wofür ist das?                                                        |
| ------------------- | ---------------------------------------------------------------------- |
| `app/pages/`        | Jede Datei hier wird automatisch zu einer eigenen Seite/URL. `index.vue` → Startseite (`/`), `about.vue` → `/about`, `contact.vue` → `/contact`. |
| `app/layouts/`      | Wiederkehrende Rahmen um Seiten herum (z. B. Header + Footer). `default.vue` wird automatisch auf alle Seiten angewendet. |
| `app/components/`   | Wiederverwendbare Bausteine (z. B. `AppHeader.vue`, `AppFooter.vue`), die in Seiten oder Layouts eingebaut werden. |
| `app/assets/`       | Rohdateien wie CSS, die beim Bauen der Seite verarbeitet werden (z. B. `app/assets/css/tailwind.css`). |
| `public/`           | Dateien, die unverändert 1:1 veröffentlicht werden (z. B. `favicon.ico`, `robots.txt`, Bilder, die direkt per URL erreichbar sein sollen). |

Neue Unterseite anlegen: einfach eine neue `.vue`-Datei in `app/pages/`
erstellen — die URL ergibt sich automatisch aus dem Dateinamen.

## Tech-Stack

- **Nuxt 4** — Framework für die Seitenstruktur, Routing und Server-Rendering
- **TypeScript** — für typsicheren Code
- **Tailwind CSS** — für das Styling per CSS-Klassen direkt im Template
- **ESLint + Prettier** — für konsistenten Code-Stil

## Deployment

Das Projekt ist für [Vercel](https://vercel.com) vorbereitet. Sobald das
Vercel-Projekt mit dem GitHub-Repository verbunden ist, wird bei jedem Push
automatisch ein neuer Build ausgelöst.

## Für zukünftige Änderungen mit Claude Code

Siehe [`CLAUDE.md`](./CLAUDE.md) für Konventionen und Regeln, an die sich
Claude Code bei der Weiterentwicklung dieses Projekts halten soll.
