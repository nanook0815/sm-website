export interface Testimonial {
  id: string
  quote: string
  name: string
  company: string
  link?: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '2twistedtv',
    quote:
      'Die Zusammenarbeit mit Chris war super angenehm – vor allem die offene Kommunikation, professionelle Art und die transparente Arbeitsweise haben echt überzeugt. Dass alles auch noch pünktlich abgeliefert wurde, hat das Ganze perfekt abgerundet.',
    name: '2TwistedTV',
    company: 'Streamer | Content Creator',
    link: 'https://www.youtube.com/@2TwistedTV',
    avatar: '/images/testimonial/2twistedTV-Logo.jpg'
  },
  {
    id: 'driiimy',
    quote:
      'Du steckst viel Zeit und Gedanken in deine Projekte und scheust dich nicht vor „Mehrarbeit“, um am Ende ein perfektes Ergebnis für mich zu liefern.',
    name: 'Driiimy',
    company: 'Streamer | Musiker',
    link: 'https://driiimy.de',
    avatar: '/images/testimonial/Driiimy_Thumbnail.jpg'
  }
]
