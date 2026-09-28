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
      'Du musst noch nicht alles durchgeplant haben. Eine kurze Nachricht reicht – wir klären, worum es geht, was du erreichen möchtest und welcher Rahmen dafür sinnvoll ist.'
  },
  {
    id: 'konzept',
    index: '02',
    title: 'Konzept & Planung',
    description:
      'Bevor es losgeht, schaffen wir Klarheit. Ziel, Ablauf und die wichtigsten kreativen Entscheidungen werden gemeinsam festgelegt, damit von Anfang an klar ist, wohin das Projekt soll.'
  },
  {
    id: 'dreh',
    index: '03',
    title: 'Dreh & Shooting',
    description: 'Vor Ort übernehme ich Technik, Perspektive und Timing, damit du dich auf das Wesentliche konzentrieren kannst.'
  },
  {
    id: 'feedback',
    index: '04',
    title: 'Abstimmung',
    description:
      'Deine Perspektive ist ein wichtiger Teil des Prozesses. Meine Aufgabe ist es, sie mit dem Ziel des Projekts und der Wirkung auf die Zielgruppe zusammenzubringen.'
  },
  {
    id: 'ergebnis',
    index: '05',
    title: 'Fertiges Ergebnis',
    description:
      'Am Ende steht nicht einfach nur ein fertiges Projekt, sondern etwas, das zu dir passt, bei den richtigen Menschen ankommt und im Kopf bleibt.'
  }
]
