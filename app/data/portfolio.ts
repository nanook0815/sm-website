export type PortfolioCategory = 'Video' | 'Foto' | 'Editing'

export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: PortfolioCategory
  description: string
  link?: string
  thumbnail?: string
  // Für Foto-Projekte: mehrere Bilder, durch die man in der Karte blättern
  // und die man per Klick groß ansehen kann.
  images?: PortfolioImage[]
}

// src = große Version für die Vollbild-Ansicht (max. 2400 px),
// thumb = kleine Version für die Karte (480 px hoch).
// width/height = Maße der kleinen Version, damit die Seite beim Laden nicht springt.
export interface PortfolioImage {
  src: string
  thumb: string
  width: number
  height: number
}

function fotoSerie(ordner: string, formate: Array<'hoch' | 'quer' | 'schmal'>): PortfolioImage[] {
  const breiten = { hoch: 320, quer: 720, schmal: 270 }
  return formate.map((format, index) => {
    const nummer = String(index + 1).padStart(2, '0')
    return {
      src: `/images/portfolio/foto/${ordner}/${nummer}.webp`,
      thumb: `/images/portfolio/foto/${ordner}/${nummer}-klein.webp`,
      width: breiten[format],
      height: 480
    }
  })
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'erklaervideo-weca',
    title: 'Kampagnenfilm',
    client: 'WECA',
    category: 'Video',
    description:
      'Überforderung sichtbar gemacht: Ein humorvoller Sketch, der alltägliche Probleme zuspitzt und WECA als Partner für konkrete Lösungen ins Spiel bringt.',
    link: 'https://www.weca.care/anbieter/',
    thumbnail: '/images/portfolio/video/WECA_erklärvideo_Thumbnail.png'
  },
  {
    id: 'imagefilm-relax4me',
    title: 'Praxisfilm',
    client: 'relax4me – Maderotherapie',
    category: 'Video',
    description:
      'Weniger erklären, mehr fühlen: Ein atmosphärischer Film, der die Maderotherapie über Nähe, Ruhe und echte Behandlungsmomente erlebbar macht.',
    link: 'https://relax4me.info/maderotherapie/',
    thumbnail: '/images/portfolio/video/AH001_Maderotherapie.00_01_57_11.jpg'
  },
  {
    id: 'spielerportraits-sv-kralenriede',
    title: 'Portraitserie',
    client: 'SV Kralenriede 1922 e.V.',
    category: 'Foto',
    description:
      'Vereinsidentität sichtbar gemacht: Eine Portraitserie, die jedem Spieler seinen eigenen Auftritt gibt und gleichzeitig eine gemeinsame visuelle Sprache für das Team schafft.',
    images: fotoSerie('sv-kralenriede', ['hoch', 'hoch', 'hoch', 'hoch', 'quer', 'quer'])
  },
  {
    id: 'hochzeitsfotografie',
    title: 'Hochzeitsreportage',
    client: 'Standesamt & freie Trauung',
    category: 'Foto',
    description:
      'Ein Tag, der nicht inszeniert werden muss: Eine Hochzeitsreportage, die Nähe, Stimmung und die kleinen Momente festhält, aus denen später Erinnerungen werden.',
    images: fotoSerie('hochzeiten', [
      'schmal',
      'hoch',
      'hoch',
      'hoch',
      'schmal',
      'hoch',
      'schmal',
      'hoch',
      'hoch',
      'schmal',
      'hoch'
    ])
  },
  {
    id: 'holegal',
    title: 'YouTube Editing',
    client: 'HOLEGAL',
    category: 'Editing',
    description:
      'Komplexe Rechtsthemen so aufbereitet, dass man gerne dranbleibt. Mit einem klaren Schnitt und passenden Visuals werden auch trockene Inhalte verständlich und kurzweilig.',
    link: 'https://www.youtube.com/watch?v=nxPGt4eBNZU',
    thumbnail: '/images/portfolio/editing/holegal-thumbnail.jpg'
  }
]
