# AGENTS.md

Konventionen für Codex, wenn an diesem Projekt weitergearbeitet wird.
Der Projekt-Owner ist technisch nicht sehr versiert — halte Änderungen
einfach, konventionell und gut nachvollziehbar.

## Tech-Stack

- **Nuxt 4** (Vue 3, Composition API)
- **TypeScript**
- **Tailwind CSS** (`@nuxtjs/tailwindcss`) für sämtliches Styling
- **ESLint + Prettier** für Code-Stil
- Deployment: **Vercel**, automatischer Build bei jedem Push via GitHub-Integration

## Ordnerstruktur — wo kommt was hin?

Dieses Projekt nutzt die Nuxt-4-Konvention mit `app/`-Verzeichnis:

- **Neue Seite/Unterseite** → neue Datei in `app/pages/`. Der Dateiname bestimmt
  die URL automatisch (z. B. `app/pages/leistungen.vue` → `/leistungen`).
- **Neue wiederverwendbare Komponente** → `app/components/`. Komponenten in
  PascalCase benennen (z. B. `ContactForm.vue`).
- **Neues Layout** (z. B. eine Seite ohne Header/Footer) → `app/layouts/`.
- **CSS/Bilder, die durch den Build laufen sollen** → `app/assets/`.
- **Statische Dateien, die 1:1 ausgeliefert werden** (Favicon, robots.txt,
  Bilder mit fester URL) → `public/`.

Keine neuen Top-Level-Ordner für Seiten/Komponenten/Layouts anlegen — alles
bleibt innerhalb der bestehenden Struktur unter `app/`.

## Code-Style

- **Immer Composition API mit `<script setup lang="ts">`.** Keine Options API
  (kein `export default { data() {...}, methods: {...} }`).
- TypeScript verwenden, wo sinnvoll (Props-Typen, Funktionssignaturen).
- Styling ausschließlich über Tailwind-Utility-Klassen im Template. Kein
  zusätzliches `<style>`-Scoped-CSS anlegen, außer es ist mit Tailwind wirklich
  nicht sauber lösbar.
- Vor dem Commit: `npm run lint` und `npm run build` sollten fehlerfrei
  durchlaufen. `npm run lint:fix` und `npm run format` beheben die meisten
  Probleme automatisch.

## Secrets & Umgebungsvariablen

- **Niemals** API-Keys, Passwörter oder andere Secrets direkt im Code oder in
  Dateien committen, die ins Git-Repository kommen.
- Secrets gehören in eine lokale `.env`-Datei (ist per `.gitignore`
  ausgeschlossen) bzw. in die Environment Variables des Vercel-Projekts.
- Für neue Umgebungsvariablen: in `nuxt.config.ts` über `runtimeConfig`
  einbinden, nicht hart im Code verdrahten.

## Git-Workflow

- **Nie direkt auf `main` pushen.** Änderungen immer über einen eigenen
  Branch + Pull Request einreichen.
- Der GitHub-Actions-Workflow (`.github/workflows/build-check.yml`) führt bei
  jedem Pull Request automatisch `npm run build` aus. Ein PR sollte erst
  gemergt werden, wenn dieser Check grün ist.
- Aussagekräftige Commit-Messages verwenden, die beschreiben, warum eine
  Änderung gemacht wurde, nicht nur was geändert wurde.

## Allgemein

- Keine Abstraktionen oder Funktionen "auf Vorrat" bauen — nur umsetzen, was
  gerade gebraucht wird.
- Bei Unsicherheit lieber die einfachere, konventionellere Lösung wählen statt
  einer cleveren, aber ungewöhnlichen.
