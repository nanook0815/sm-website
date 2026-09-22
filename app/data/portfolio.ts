export type PortfolioCategory = 'Video' | 'Foto' | 'Editing'

export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: PortfolioCategory
  description: string
  link?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'erklaervideo-weca',
    title: 'Erklärvideo',
    client: 'weca',
    category: 'Video',
    description:
      'Kurzes, humorvolles Erklärvideo für die Anbieter-Kampagne von weca – Konzept, Dreh und Schnitt aus einer Hand.',
    link: 'https://www.weca.care/anbieter/'
  },
  {
    id: 'imagefilm-relax4me',
    title: 'Imagefilm',
    client: 'relax4me – Maderotherapie',
    category: 'Video',
    description:
      'Video-Produktion für die Landingpage einer Wellness-Praxis, zu sehen direkt auf der Website.',
    link: 'https://relax4me.info/maderotherapie/'
  }
]
