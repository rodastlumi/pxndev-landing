export type ProcessStep = {
  step: number
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Consulta inicial',
    description:
      'Conversamos sobre tu negocio, el problema a resolver y qué éxito significa para vos.',
  },
  {
    step: 2,
    title: 'Análisis y propuesta',
    description:
      'Definimos alcance, tiempos y presupuesto transparente. Sin sorpresas ni letra chica.',
  },
  {
    step: 3,
    title: 'Desarrollo',
    description:
      'Construimos en iteraciones con feedback constante para que veas avances reales.',
  },
  {
    step: 4,
    title: 'Implementación',
    description:
      'Despliegue, capacitación y puesta en marcha acompañada hasta que estés operando.',
  },
  {
    step: 5,
    title: 'Soporte continuo',
    description:
      'Mantenimiento, mejoras y soporte con IA por WhatsApp para tu equipo y tus usuarios.',
  },
]
