export interface Testimonial {
  id: string
  quote: string
  // Vollständiger Text in Absätzen; wird über „Ganzes Feedback lesen“ aufgeklappt.
  fullQuote?: string[]
  name: string
  company: string
  link?: string
  avatar?: string
}

// Reihenfolge = Gewichtung: Der erste Eintrag wird groß hervorgehoben.
export const testimonials: Testimonial[] = [
  {
    id: 'relax4me',
    quote:
      'Alle meine Wünsche und Vorstellungen wurden mit unglaublich viel Liebe zum Detail umgesetzt. Chris arbeitet mit sehr viel Herz und schafft es, sich zu 100 % in das jeweilige Thema hineinzuversetzen.',
    fullQuote: [
      'Ich bin absolut begeistert von der Zusammenarbeit mit Chris und dem Ergebnis unseres Werbevideos für die Maderotherapie!',
      'Alle meine Wünsche und Vorstellungen wurden mit unglaublich viel Liebe zum Detail umgesetzt. Chris arbeitet mit sehr viel Herz und schafft es, sich zu 100 % in das jeweilige Thema hineinzuversetzen. Dadurch ist ein Video entstanden, das nicht nur hochwertig und professionell gestaltet ist, sondern sich auch genauso anfühlt, wie ich es mir vorgestellt habe.',
      'Schon während des Drehs herrschte eine unglaublich angenehme und entspannte Atmosphäre. Er hat einem sofort die Aufregung genommen und dafür gesorgt, dass man sich vor der Kamera rundum wohlfühlt. Jeder Take wurde so lange produziert, bis man selbst wirklich zufrieden war, ganz ohne Druck und mit viel Geduld.',
      'Auch mein Modell hat sich während des gesamten Drehs sehr wohlgefühlt. Auf ihre Wünsche und persönlichen Empfindungen wurde jederzeit Rücksicht genommen, was ich besonders wertschätze.',
      'Man merkt einfach, dass Chris seine Arbeit mit Leidenschaft macht und ihm wichtig ist, dass am Ende wirklich alle Beteiligten zufrieden sind.',
      'Das fertige Video ist absolut hochwertig, professionell und wunderschön geworden. Ich liebe das Ergebnis, finde mich darin komplett wieder und würde die Zusammenarbeit jederzeit wieder machen! Eine ganz klare Herzensempfehlung.'
    ],
    name: 'Agnetha Hertel',
    link: 'https://relax4me.info/',
    avatar: '/images/testimonial/relax4me-bluete-192.png',
    company: 'relax4me | Maderotherapie'
  },
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
