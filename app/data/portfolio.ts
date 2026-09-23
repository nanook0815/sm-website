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
    title: 'Erklärvideo',
    client: 'weca',
    category: 'Video',
    description:
      'Kurzes, humorvolles Erklärvideo für die Anbieter-Kampagne von weca – Konzept, Dreh und Schnitt aus einer Hand.',
    link: 'https://www.weca.care/anbieter/',
    thumbnail: '/images/portfolio/video/WECA_erklärvideo_Thumbnail.png'
  },
  {
    id: 'imagefilm-relax4me',
    title: 'Imagefilm',
    client: 'relax4me – Maderotherapie',
    category: 'Video',
    description:
      'Video-Produktion für die Landingpage einer Wellness-Praxis, zu sehen direkt auf der Website.',
    link: 'https://relax4me.info/maderotherapie/',
    thumbnail: '/images/portfolio/video/AH001_Maderotherapie.00_01_57_11.jpg'
  },
  {
    id: 'spielerportraits-sv-kralenriede',
    title: 'Spielerporträts & Mannschaftsfoto',
    client: 'SV Kralenriede 1922 e.V.',
    category: 'Foto',
    description:
      'Porträts der Spieler mit Studiolicht in Vereinsfarben, dazu das offizielle Mannschaftsfoto für die neue Saison.',
    images: fotoSerie('sv-kralenriede', ['hoch', 'hoch', 'hoch', 'hoch', 'quer', 'quer'])
  },
  {
    id: 'hochzeitsfotografie',
    title: 'Hochzeitsfotografie',
    client: 'Standesamt & freie Trauungen',
    category: 'Foto',
    description:
      'Natürliche Paar- und Gästeporträts, Details und Momente vom Standesamt bis zur Feier.',
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
    id: 'wardogs-review-2twistedtv',
    title: 'Gaming-Content-Schnitt',
    client: '2TwistedTV',
    category: 'Editing',
    description:
      'Schnitt eines Gaming-Testvideos für den Twitch-Streamer 2TwistedTV, von Rohmaterial bis fertigem YouTube-Upload.',
    link: 'https://youtu.be/Rgu0QAc1BXI',
    thumbnail: '/images/portfolio/editing/TT019_Wardogs_review.jpg'
  }
]
