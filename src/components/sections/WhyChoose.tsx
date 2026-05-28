import { motion } from 'framer-motion'
import { differentiators } from '../../data/differentiators'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { staggerContainer, viewportOnce } from '../../lib/motion'
import { Card } from '../ui/Card'
import { Section, SectionHeader } from '../ui/Section'

export function WhyChoose() {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="por-que" ariaLabelledby="por-que-heading">
      <SectionHeader
        id="por-que-heading"
        eyebrow="Por qué PXNDEV"
        title="Tecnología con acompañamiento real"
        description="No somos una fábrica de plantillas. Trabajamos cerca tuyo para que el software funcione en el mundo real."
      />

      <motion.div
        initial={reducedMotion ? false : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2"
      >
        {differentiators.map((item, index) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </motion.div>
    </Section>
  )
}
