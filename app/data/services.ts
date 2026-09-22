export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Video-Editing',
    description:
      'Schnitt und Sounddesign für Imagefilme und Social-Media-Content – aus deinem Rohmaterial oder als Gesamtpaket mit Dreh.',
    icon: 'lucide:clapperboard'
  },
  {
    title: 'Videoproduktion',
    description:
      'Konzept, Dreh und Produktion vor Ort – für Unternehmen, Events und Privatkund:innen. Von der Idee bis zum fertigen Film.',
    icon: 'lucide:video'
  },
  {
    title: 'Fotografie',
    description:
      'Portrait-, Team- und Hochzeitsfotografie mit Fokus auf authentische Momente statt gestellter Posen – ideal für Websites, Social Media und Print.',
    icon: 'lucide:camera'
  }
]
