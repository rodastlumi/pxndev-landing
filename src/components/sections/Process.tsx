import { motion } from 'framer-motion'
import { processSteps } from '../../data/processSteps'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { defaultTransition, fadeUp, viewportOnce } from '../../lib/motion'
import { Section, SectionHeader } from '../ui/Section'

export function Process() {
  const reducedMotion = useReducedMotion()

  return (
    <Section id="proceso" ariaLabelledby="proceso-heading">
      <SectionHeader
        id="proceso-heading"
        eyebrow="Cómo trabajamos"
        title="Un proceso claro, de punta a punta"
        description="Cinco pasos para pasar de la idea al sistema en producción, con soporte que no termina el día del deploy."
      />

      <ol className="relative space-y-0 md:flex md:justify-between md:gap-2">
        <div
          className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-cyan)] to-[var(--color-accent)] md:left-0 md:right-0 md:top-6 md:bottom-auto md:h-px md:w-full"
          aria-hidden
        />

        {processSteps.map((step, index) => (
          <motion.li
            key={step.step}
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: index * 0.08 }}
            className="relative flex gap-6 pb-10 last:pb-0 md:flex-1 md:flex-col md:items-center md:gap-4 md:pb-0 md:text-center"
          >
            <div
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] font-display text-lg font-bold text-white shadow-lg shadow-violet-500/30 md:mx-auto"
              aria-hidden
            >
              {step.step}
            </div>
            <div className="pt-1 md:pt-0">
              <h3 className="font-display text-lg font-semibold text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)]">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
