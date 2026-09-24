<script setup lang="ts">
interface Tile {
  id: string
  title: string
  description: string
  icon: string
}

const tiles: Tile[] = [
  {
    id: 'video',
    title: 'Videografie',
    description: 'Kamerabegleitung und Dreh vor Ort – von der Idee bis zum fertigen Film.',
    icon: 'lucide:video'
  },
  {
    id: 'foto',
    title: 'Fotografie',
    description: 'Portrait-, Team- und Eventfotografie mit Blick fürs Echte statt gestellter Posen.',
    icon: 'lucide:camera'
  },
  {
    id: 'editing',
    title: 'Editing',
    description: 'Schnitt, Farbe und Sounddesign aus deinem Rohmaterial.',
    icon: 'lucide:clapperboard'
  },
  {
    id: 'konzeption',
    title: 'Konzeption',
    description: 'Von der ersten Idee zum stimmigen visuellen Konzept.',
    icon: 'lucide:lightbulb'
  }
]

const selectedTileId = ref<string | null>(null)
const selectedTile = computed(() => tiles.find((tile) => tile.id === selectedTileId.value) ?? null)

const backButtonRef = ref<HTMLButtonElement | null>(null)
const tileButtonRefs = ref<Record<string, HTMLButtonElement | null>>({})

function selectTile(id: string) {
  selectedTileId.value = id
  // Ohne das würde die Tastatur-Fokusmarke ins Leere fallen, weil die Kachel
  // beim Umschalten auf die Detailansicht per v-show ausgeblendet wird.
  nextTick(() => backButtonRef.value?.focus())
}
function closeTile() {
  const previousId = selectedTileId.value
  selectedTileId.value = null
  nextTick(() => {
    if (previousId) tileButtonRefs.value[previousId]?.focus()
  })
}

// Geometrie relativ zur Bildfläche (3258×1812 px) von Kamera_setup_2.png /
// Kamera_setup_2_blurr.png. Beide Bilder teilen sich exakt dieselbe Aufnahme
// und Ausrichtung, per Canvas-Pixelanalyse (Alpha- und Monitor-Screen-Bounding-
// Box) vermessen und hier 1:1 übernommen.
const ASPECT = 1812 / 3258
const MONITOR = { x: 0.3008, y: 0.0101, w: 0.1814, h: 0.1041 }
// Für die Startansicht zählt nur der Bereich bis zum Fade unten (siehe
// Bild-Maske im Template) als "Inhalt" – der ausgeblendete Rest soll die
// Anfangsgröße nicht künstlich verkleinern.
const CONTENT_BOTTOM = 0.74 * ASPECT
const CONTENT = { x: MONITOR.x, y: MONITOR.y, w: 0.6875 - MONITOR.x, h: CONTENT_BOTTOM - MONITOR.y }
// Ankerpunkt der Überschrift liegt knapp rechts neben dem Monitor (noch kein
// Überlapp am Anfang). Die Überschrift folgt der Kamerafahrt aber gebremst
// (siehe HEADING_PARALLAX in apply()) – dadurch "hinkt" sie der echten
// Monitor-Kante hinterher und wird von der schneller wachsenden Monitor-
// Kachel im Verlauf des Zooms geometrisch überholt und teilweise verdeckt,
// statt fest an ihr zu kleben.
const HEADING_ANCHOR = { x: MONITOR.x + MONITOR.w * 1.4, y: MONITOR.y + MONITOR.h * 0.4 }
// Auf schmalen Screens ist rechts neben dem Monitor kein Platz mehr – dort
// sitzt die Überschrift stattdessen mittig über dem Monitor (siehe
// MOBILE_BREAKPOINT_PX in apply()). Der Ankerpunkt selbst wandert dabei in
// Bildkoordinaten von "über dem Monitor" zu "im Monitor" – dadurch landet
// die Überschrift am Ende garantiert geometrisch hinter der (mit derselben,
// ungebremsten Kamerafahrt wachsenden) Monitor-Kachel, statt ihr nur mit
// Verzögerung hinterherzuhinken und den Abstand am Ende wieder zu öffnen.
const HEADING_ANCHOR_MOBILE_START = { x: MONITOR.x + MONITOR.w * 0.5, y: MONITOR.y - MONITOR.h * 1.9 }
const HEADING_ANCHOR_MOBILE_END = { x: MONITOR.x + MONITOR.w * 0.5, y: MONITOR.y - MONITOR.h * 0.12 }
const HEADING_PARALLAX = 0.4
const MOBILE_BREAKPOINT_PX = 640

// In Claude Design abgestimmte Werte für Zoom-Stärke, Zielposition und Timing.
// Zoom bewusst schwächer als technisch möglich: unten soll noch ein Stück vom
// Rig sichtbar bleiben statt hart an den Monitorrand zu schneiden.
const ZOOM_STRENGTH = 0.65
// Nah an 1, damit das Bild randlos (full-bleed) startet statt mit Rand.
const START_SCALE = 0.97
const ZOOM_START = 0
const ZOOM_END = 0.8
const FADE_START = 0.12
const FADE_END = 0.4
// Ab hier ist der Blur-Wechsel abgeschlossen – Kacheln dürfen schon deutlich
// vor dem Scroll-Ende klickbar werden, nicht erst kurz vorm Anschlag.
const TILES_INTERACTIVE_AT = FADE_END
const SMOOTHING_MS = 100
const PIN_LENGTH_VH = 200
const HEADER_GAP_PX = 24
const BOTTOM_MARGIN_PX = 16

const sectionRef = ref<HTMLElement | null>(null)
const stageRef = ref<HTMLElement | null>(null)
const img1Ref = ref<HTMLImageElement | null>(null)
const img2Ref = ref<HTMLImageElement | null>(null)
const tilesRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const reduceMotion = ref(false)

const sectionHeight = computed(() => (reduceMotion.value ? '100svh' : `${PIN_LENGTH_VH}svh`))

let vw = 0
let vh = 0
let s0 = 0
let s1 = 0
let lw = 0
let focusStart = { x: 0, y: 0 }
let focusEnd = { x: 0, y: 0 }
let stickyHeaderMargin = 0
let availableH = 0
let centerY = 0
let current = 0
let lastTick = 0
let raf = 0

function easeInOutCubic(x: number) {
  return x < 0.5 ? 4 * x ** 3 : 1 - (-2 * x + 2) ** 3 / 2
}
function easeInOutSine(x: number) {
  return -(Math.cos(Math.PI * x) - 1) / 2
}
function clamp01(x: number) {
  return Math.min(1, Math.max(0, x))
}

function measure() {
  const stage = stageRef.value
  if (!stage) return
  vw = stage.clientWidth
  vh = stage.clientHeight
  // Der sticky Header liegt die ganze Zeit über der Bühne (beide sind
  // sticky top-0) – dieser Rand bleibt daher auch im fertig gezoomten
  // Zustand bestehen, nicht nur am Anfang unter der Überschrift.
  const headerH = document.querySelector('header')?.getBoundingClientRect().height ?? 0
  stickyHeaderMargin = headerH + HEADER_GAP_PX
  // Die Überschrift hängt jetzt an derselben Bild-Transformation wie die
  // Monitor-Kacheln (siehe apply()) statt eigenen Platz zu beanspruchen –
  // Start- und Endzustand teilen sich denselben Rand.
  availableH = Math.max(1, vh - stickyHeaderMargin - BOTTOM_MARGIN_PX)
  centerY = stickyHeaderMargin + availableH / 2
  // Auf sehr breiten (ultrawide) Screens ist die Bildhöhe der limitierende
  // Faktor, nicht die Breite – ohne Untergrenze bleibt das Bild in Pixeln
  // gleich groß, während links/rechts nur mehr Leerraum entsteht, je breiter
  // der Viewport wird. WIDE_FILL_MIN ist die volle Bildbreite selbst, nicht
  // durch CONTENT.w geteilt, und greift dadurch erst, wenn die Höhen-Grenze
  // spürbar unter dieses Minimum fällt. Auf WIDE_FILL_OVERSHOOT gedeckelt,
  // damit das Bild bei knapper Höhe (breites, aber flaches Fenster) nicht so
  // groß wird, dass unten zu viel vom Rig abgeschnitten wird.
  const heightTerm = (0.99 * availableH) / CONTENT.h
  const WIDE_FILL_MIN = 0.8
  const WIDE_FILL_OVERSHOOT = 1.15
  const wideFloor = Math.min(WIDE_FILL_MIN * vw, heightTerm * WIDE_FILL_OVERSHOOT)
  // Kein Breiten-Puffer mehr (früher 0.9 * vw) – der Zielzustand ist
  // randloses (full-bleed) Bild, kein zentriertes Bild mit Seitenrand.
  s0 = Math.min(vw / CONTENT.w, Math.max(heightTerm, wideFloor)) * START_SCALE
  s1 = Math.min(vw / MONITOR.w, availableH / MONITOR.h) * ZOOM_STRENGTH
  focusStart = { x: CONTENT.x + CONTENT.w / 2, y: CONTENT.y + CONTENT.h / 2 }
  focusEnd = { x: MONITOR.x + MONITOR.w / 2, y: MONITOR.y + MONITOR.h / 2 }
  // Layout-Breite = finale Bildschirmbreite, gedeckelt auf die native Auflösung,
  // damit die Fotos nie über ihre echte Pixeldichte hinaus hochskaliert werden.
  // Beide Bilder haben dieselbe Auflösung und Ausrichtung, teilen sich also
  // dieselbe Layout-Breite.
  lw = Math.min(s1, 3258)
  if (img1Ref.value) img1Ref.value.style.width = `${lw}px`
  if (img2Ref.value) img2Ref.value.style.width = `${lw}px`
}

function scrollProgress() {
  if (reduceMotion.value) return 1
  const section = sectionRef.value
  if (!section) return 0
  const rect = section.getBoundingClientRect()
  const distance = Math.max(1, rect.height - vh)
  return clamp01(-rect.top / distance)
}

function place(el: HTMLElement, geo: { x: number; y: number; w: number }, layoutWidth: number, ox: number, oy: number, scale: number, opacity: number) {
  el.style.transform = `translate3d(${ox + scale * geo.x}px, ${oy + scale * geo.y}px, 0) scale(${(scale * geo.w) / layoutWidth})`
  el.style.opacity = String(opacity)
}

// Kamerafahrt (Zoom + Schwenk auf den Monitor-Fokus) für einen gegebenen
// Fortschrittswert. Ausgelagert, damit die Überschrift mit einem gebremsten
// eigenen Fortschritt (siehe HEADING_PARALLAX) durch dieselbe Fahrt bewegt
// werden kann statt der echten Kamera 1:1 zu folgen.
function camera(tValue: number) {
  const scale = s0 * (s1 / s0) ** tValue
  const k = ((1 - tValue) * s0) / scale
  const focus = {
    x: focusEnd.x - k * (focusEnd.x - focusStart.x),
    y: focusEnd.y - k * (focusEnd.y - focusStart.y)
  }
  return { scale, ox: vw / 2 - scale * focus.x, oy: centerY - scale * focus.y }
}

function apply() {
  if (!vw || !img1Ref.value || !img2Ref.value) return
  const p = reduceMotion.value ? 1 : current
  const t = easeInOutCubic(clamp01((p - ZOOM_START) / Math.max(0.001, ZOOM_END - ZOOM_START)))
  const f = reduceMotion.value ? 1 : easeInOutSine(clamp01((p - FADE_START) / Math.max(0.001, FADE_END - FADE_START)))

  const { scale, ox, oy } = camera(t)

  place(img1Ref.value, { x: 0, y: 0, w: 1 }, lw, ox, oy, scale, 1 - f * f)
  place(img2Ref.value, { x: 0, y: 0, w: 1 }, lw, ox, oy, scale, f)

  if (headingRef.value) {
    // Die Textgröße schrumpft unabhängig von "scale" (sonst würde sie riesig).
    const headingScale = 1 - 0.4 * t
    const isMobileHeading = vw < MOBILE_BREAKPOINT_PX
    const boxWidth = headingRef.value.offsetWidth * headingScale
    let headX: number
    let headY: number
    if (isMobileHeading) {
      // Rechts neben dem Monitor ist auf schmalen Screens kein Platz – die
      // Überschrift startet stattdessen mittig über dem Monitor. Sie folgt
      // dabei derselben ungebremsten Kamerafahrt wie die Monitor-Kachel
      // (statt der gebremsten HEADING_PARALLAX-Fahrt unten), und ihr
      // Ankerpunkt wandert währenddessen von "über dem Monitor" zu "im
      // Monitor" – so landet sie am Ende garantiert geometrisch hinter der
      // Kachel und wird von ihr an-, aber nicht vollständig verdeckt.
      const anchorY = HEADING_ANCHOR_MOBILE_START.y + (HEADING_ANCHOR_MOBILE_END.y - HEADING_ANCHOR_MOBILE_START.y) * t
      const anchorX = ox + scale * HEADING_ANCHOR_MOBILE_START.x
      headX = Math.min(Math.max(anchorX - boxWidth / 2, 16), vw - boxWidth - 16)
      headY = oy + scale * anchorY
    } else {
      // Tiefenschärfe-Effekt: die Überschrift hängt an derselben Kamerafahrt
      // wie Bild und Monitor-Kachel, aber gebremst (HEADING_PARALLAX) – sie
      // "liegt weiter hinten im Raum" und zieht dadurch langsamer mit als der
      // Monitor. Die reale Monitor-Kachel (volle Fahrt, z-20) überholt sie so
      // geometrisch und verdeckt einen wachsenden Teil davon, ganz ohne eigene
      // Verdeckungs-Animation. Kein CSS-Transition-Timing mehr, dadurch auch
      // keine Verzögerung ggü. Bild/Kacheln.
      const headCam = camera(t * HEADING_PARALLAX)
      // Darf die Kachel nicht über den rechten Rand hinauswachsen – deckelt
      // die X-Position auf die tatsächliche Breite.
      const headMaxX = vw - boxWidth - 16
      headX = Math.min(headCam.ox + headCam.scale * HEADING_ANCHOR.x, Math.max(0, headMaxX))
      // Zusätzlicher, ausklingender Versatz nur für den Startzustand: schiebt
      // die Überschrift so weit hoch, dass ihre Mitte etwa auf der Oberkante
      // des Monitors liegt, ohne die (bewusst getunte) Endposition/Verdeckung
      // zu verändern – bei t=1 ist der Versatz vollständig ausgeblendet.
      const startNudge = (1 - t) * 0.063
      headY = headCam.oy + headCam.scale * (HEADING_ANCHOR.y - startNudge)
    }
    const headingBlur = t * 6
    const headingOpacity = Math.max(0.3, 1 - 0.8 * t)
    headingRef.value.style.transform = `translate3d(${headX}px, ${headY}px, 0) scale(${headingScale})`
    headingRef.value.style.filter = `blur(${headingBlur}px)`
    headingRef.value.style.opacity = String(headingOpacity)
  }

  if (tilesRef.value) {
    const inset = MONITOR.w * 0.028
    tilesRef.value.style.width = `${s1 * (MONITOR.w - 2 * inset)}px`
    tilesRef.value.style.height = `${s1 * (MONITOR.h - 2 * inset)}px`
    tilesRef.value.style.transform = `translate3d(${ox + scale * (MONITOR.x + inset)}px, ${oy + scale * (MONITOR.y + inset)}px, 0) scale(${scale / s1})`
    // Bleiben die ganze Zeit an der Monitor-Position sichtbar (auch in der
    // weit rausgezoomten Ansicht), nicht erst ab der Überblendung.
    tilesRef.value.style.opacity = '1'
    tilesRef.value.style.pointerEvents = p > TILES_INTERACTIVE_AT ? 'auto' : 'none'
    if (p <= TILES_INTERACTIVE_AT && selectedTileId.value) selectedTileId.value = null
  }
}

function kick() {
  if (!raf) {
    lastTick = performance.now()
    raf = requestAnimationFrame(tick)
  }
}

function tick(now: number) {
  raf = 0
  const target = scrollProgress()
  const dt = Math.min(64, Math.max(0, now - lastTick))
  lastTick = now
  if (reduceMotion.value) {
    current = target
  } else {
    current += (target - current) * (1 - Math.exp(-(dt || 16) / SMOOTHING_MS))
    if (Math.abs(target - current) < 0.0002) current = target
  }
  apply()
  if (current !== target) raf = requestAnimationFrame(tick)
}

let mediaQuery: MediaQueryList
let resizeObserver: ResizeObserver | null = null

function onReduceMotionChange() {
  reduceMotion.value = mediaQuery.matches
  kick()
}

onMounted(() => {
  mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = mediaQuery.matches
  mediaQuery.addEventListener('change', onReduceMotionChange)

  window.addEventListener('scroll', kick, { passive: true })
  window.addEventListener('resize', kick)

  resizeObserver = new ResizeObserver(() => {
    measure()
    kick()
  })
  if (stageRef.value) resizeObserver.observe(stageRef.value)

  measure()
  current = scrollProgress()
  apply()
})

onUnmounted(() => {
  window.removeEventListener('scroll', kick)
  window.removeEventListener('resize', kick)
  mediaQuery?.removeEventListener('change', onReduceMotionChange)
  resizeObserver?.disconnect()
  cancelAnimationFrame(raf)
})
</script>

<template>
  <section id="leistungen" ref="sectionRef" class="relative" :style="{ height: sectionHeight }">
    <div ref="stageRef" class="sticky top-0 h-[100svh] w-full overflow-hidden bg-paper">
      <div
        ref="headingRef"
        class="pointer-events-none absolute left-0 top-0 z-10 max-w-[16rem] origin-top-left text-center sm:max-w-sm sm:text-right"
      >
        <p class="font-mono text-sm font-medium uppercase tracking-widest text-bronze">
          Ein Blick hinter die Kamera
        </p>
        <h2 class="mt-3 text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl">
          Weiterscrollen, um näher ranzugehen.
        </h2>
      </div>

      <img
        ref="img1Ref"
        src="/images/setup/Kamera_setup_2.png"
        alt="Kamera-Setup mit externem Monitor auf dem Rig"
        decoding="async"
        draggable="false"
        class="absolute left-0 top-0 max-w-none origin-top-left select-none [-webkit-mask-image:linear-gradient(to_bottom,black_74%,transparent_86%)] [mask-image:linear-gradient(to_bottom,black_74%,transparent_86%)]"
      />
      <img
        ref="img2Ref"
        src="/images/setup/Kamera_setup_2_blurr.png"
        alt="Monitor formatfüllend, Kamera im Hintergrund unscharf"
        decoding="async"
        draggable="false"
        class="absolute left-0 top-0 max-w-none origin-top-left select-none opacity-0"
      />

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[11vh] bg-gradient-to-t from-paper from-0% to-transparent to-35% sm:h-[13vh]"
      />

      <div
        ref="tilesRef"
        class="absolute left-0 top-0 z-20 origin-top-left overflow-hidden rounded-[4%] bg-ink opacity-0"
      >
        <div v-show="!selectedTile" class="grid h-full w-full grid-cols-2 grid-rows-2 gap-px bg-bronze/30">
          <button
            v-for="tile in tiles"
            :key="tile.id"
            :ref="(el) => (tileButtonRefs[tile.id] = el as HTMLButtonElement | null)"
            type="button"
            class="group flex flex-col items-center justify-center gap-2 bg-ink text-paper transition-colors hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-bronze-light"
            @click="selectTile(tile.id)"
          >
            <span class="relative flex aspect-square h-[30%] items-center justify-center">
              <template v-if="tile.id === 'video'">
                <Icon
                  name="lucide:video"
                  mode="svg"
                  class="h-full w-full [stroke-width:1.5] transition-transform duration-300 group-hover:scale-110"
                />
                <span
                  aria-hidden="true"
                  class="absolute left-[38%] top-1/2 h-[14%] w-[14%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze-light opacity-0 group-hover:opacity-100 group-hover:[animation:rec-blink_0.9s_ease-in-out_infinite]"
                />
              </template>

              <template v-else-if="tile.id === 'foto'">
                <Icon
                  name="lucide:camera"
                  mode="svg"
                  class="h-full w-full [stroke-width:1.5] transition-transform duration-300 group-hover:scale-110"
                />
                <Icon
                  name="lucide:sparkle"
                  aria-hidden="true"
                  class="absolute -right-1 -top-1 h-[45%] w-[45%] text-bronze-light opacity-0 group-hover:opacity-100 group-hover:[animation:sparkle-pop_0.6s_ease-out]"
                />
              </template>

              <svg
                v-else-if="tile.id === 'editing'"
                viewBox="0 -5 24 29"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-full w-full"
              >
                <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <g class="origin-[3px_11px] rotate-[-6deg] group-hover:[animation:clap-shut_0.35s_ease-out_forwards]">
                  <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
                  <path d="m12.296 3.464 3.02 3.956" />
                  <path d="m6.18 5.276 3.1 3.899" />
                </g>
                <g
                  aria-hidden="true"
                  stroke-width="1.25"
                  class="origin-right opacity-0 group-hover:[animation:sound-tick_0.5s_ease-out_0.35s]"
                >
                  <path d="M22 8.5 23.8 7" />
                  <path d="M22 13.5 23.8 15" />
                </g>
              </svg>

              <svg v-else viewBox="0 0 24 24" fill="none" class="h-full w-full">
                <circle
                  cx="12"
                  cy="8"
                  r="6"
                  fill="currentColor"
                  class="text-bronze-light opacity-0 transition-opacity duration-300 group-hover:opacity-30"
                />
                <g stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path
                    d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.7.7 1.19 1.5 1.41 2.5"
                  />
                </g>
                <path
                  d="M9.5 10.5 12 6.5 12 9 14.5 5.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="10"
                  class="text-bronze-light opacity-0 group-hover:[animation:filament-draw_0.5s_ease-out_forwards]"
                />
              </svg>
            </span>
            <span class="font-mono text-[0.7em] font-medium uppercase tracking-widest">{{ tile.title }}</span>
          </button>
        </div>

        <div
          v-if="selectedTile"
          class="absolute inset-0 flex flex-col items-start justify-center gap-3 bg-ink px-[10%] text-paper"
        >
          <button
            ref="backButtonRef"
            type="button"
            aria-label="Zurück zur Übersicht"
            class="group absolute left-[6%] top-[6%] flex aspect-square h-[13%] items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze-light"
            @click="closeTile"
          >
            <Icon
              name="lucide:arrow-left"
              mode="svg"
              class="h-[55%] w-[55%] [stroke-width:1.5] transition-transform duration-200 group-hover:-translate-x-0.5"
            />
          </button>
          <span class="flex aspect-square h-[13%] items-center justify-center">
            <Icon :name="selectedTile.icon" mode="svg" class="h-full w-full [stroke-width:1.5] text-bronze-light" />
          </span>
          <h3 class="font-mono text-[1.05em] font-medium uppercase tracking-widest">{{ selectedTile.title }}</h3>
          <p class="max-w-[32ch] text-[0.85em] leading-relaxed text-paper/80">{{ selectedTile.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
