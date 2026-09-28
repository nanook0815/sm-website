export interface ProcessStep {
  id: string
  index: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    id: 'erstkontakt',
    index: '01',
    title: 'Erstkontakt',
    description:
      'Du schreibst oder rufst kurz an – wir sprechen über Anlass, Ziel und den groben Rahmen des Projekts.'
  },
  {
    id: 'konzept',
    index: '02',
    title: 'Konzept & Planung',
    description: 'Gemeinsam legen wir Ablauf, Location und Bildidee fest, bevor es losgeht.'
  },
  {
    id: 'dreh',
    index: '03',
    title: 'Dreh & Shooting',
    description: 'Vor Ort übernehme ich Technik, Perspektive und Timing persönlich – alles aus einer Hand.'
  },
  {
    id: 'feedback',
    index: '04',
    title: 'Feedback',
    description:
      'Dein Konzept und deine Wünsche treffen auf meine Erfahrung – in Absprache entsteht gemeinsam das beste Ergebnis.'
  },
  {
    id: 'ergebnis',
    index: '05',
    title: 'Fertiges Ergebnis',
    description:
      'Nach der Bearbeitung stimmen wir das Ergebnis gemeinsam ab, dann folgt die finale Lieferung.'
  }
]
