export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Video-Editing',
    description:
      'Schnitt, Colorgrading und Sounddesign für Imagefilme, Social-Media-Content, Musikvideos und Hochzeitsfilme – aus deinem Rohmaterial oder als Gesamtpaket mit Dreh.',
    icon: '🎬'
  },
  {
    title: 'Videoproduktion',
    description:
      'Konzept, Dreh und Produktion vor Ort – für Unternehmen, Events, Musiker:innen und Privatkund:innen. Von der Idee bis zum fertigen Film.',
    icon: '🎥'
  },
  {
    title: 'Fotografie',
    description:
      'Portrait-, Event- und Produktfotografie mit Fokus auf natürliche, hochwertige Bilder – ideal für Websites, Social Media und Print.',
    icon: '📸'
  }
]
