export type PortfolioCategory = 'Video' | 'Foto' | 'Editing'

export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: PortfolioCategory
  description: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'imagefilm-cafe-nordlicht',
    title: 'Imagefilm',
    client: 'Café Nordlicht',
    category: 'Video',
    description: 'Konzept, Dreh und Schnitt eines Imagefilms für ein lokales Café.'
  },
  {
    id: 'hochzeit-sarah-tom',
    title: 'Hochzeitsfilm',
    client: 'Sarah & Tom',
    category: 'Video',
    description: 'Ganztägige Begleitung und emotionaler Hochzeitsfilm.'
  },
  {
    id: 'musikvideo-artist-xy',
    title: 'Musikvideo',
    client: 'Artist XY',
    category: 'Editing',
    description: 'Schnitt und Colorgrading eines Musikvideos aus Multicam-Material.'
  },
  {
    id: 'event-musikfestival',
    title: 'Eventfotografie',
    client: 'Musikfestival',
    category: 'Foto',
    description: 'Fotografische Begleitung eines zweitägigen Musikfestivals.'
  },
  {
    id: 'produktfotos-marke-z',
    title: 'Produktfotografie',
    client: 'Marke Z',
    category: 'Foto',
    description: 'Produktshooting für Onlineshop und Social-Media-Kanäle.'
  },
  {
    id: 'reels-brand-social',
    title: 'Social-Media-Reels',
    client: 'Brand Social',
    category: 'Editing',
    description: 'Kurzformatige Reels-Serie inklusive Schnitt und Untertitel.'
  }
]

export const portfolioCategories: Array<PortfolioCategory | 'Alle'> = [
  'Alle',
  'Video',
  'Foto',
  'Editing'
]
