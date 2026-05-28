import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { staggerContainer, viewportOnce } from '../../lib/motion'
import { Card } from '../ui/Card'
import { Section, SectionHeader } from '../ui/Section'

export function Services() {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="servicios" ariaLabelledby="servicios-heading">
      <SectionHeader
        id="servicios-heading"
        eyebrow="Qué hacemos"
        title="Servicios pensados para tu operación"
        description="Cada proyecto es distinto. Estos son los rubros donde más acompañamos a nuestros clientes, siempre con desarrollo a medida."
      />

      <motion.div
        initial={reducedMotion ? false : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <Card
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </motion.div>
    </Section>
  )
}
