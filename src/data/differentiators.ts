import type { LucideIcon } from 'lucide-react'
import { Bot, Code2, Headphones, Puzzle } from 'lucide-react'

export type Differentiator = {
  title: string
  description: string
  icon: LucideIcon
}

export const differentiators: Differentiator[] = [
  {
    title: 'Soluciones a medida',
    description:
      'No vendemos plantillas. Cada sistema se diseña según tu operación, tus procesos y lo que tu negocio necesita hoy y mañana.',
    icon: Puzzle,
  },
  {
    title: 'Soporte con IA integrado',
    description:
      'Todos nuestros desarrollos incluyen asistencia por WhatsApp con inteligencia artificial para vos y para tus usuarios finales.',
    icon: Bot,
  },
  {
    title: 'Acompañamiento continuo',
    description:
      'Seguimos tu proyecto después del lanzamiento: mejoras, incidentes y evolución del producto con un equipo que conoce tu código.',
    icon: Headphones,
  },
  {
    title: 'Tecnología moderna y escalable',
    description:
      'Arquitecturas actuales, buenas prácticas y bases sólidas para crecer sin reescribir todo cada seis meses.',
    icon: Code2,
  },
]
