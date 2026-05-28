import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import {
  defaultTransition,
  fadeUp,
  staggerContainer,
} from '../../lib/motion'
import { Button } from '../ui/Button'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 mesh-gradient mesh-animate code-grid opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[var(--color-accent)]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-[var(--color-accent-cyan)]/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          animate={reducedMotion ? undefined : 'visible'}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mb-4 inline-flex rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-accent)] dark:text-[var(--color-accent-cyan)]"
          >
            Software a medida · Argentina
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            transition={defaultTransition}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-fg-dark)] dark:text-[var(--color-fg)] sm:text-5xl lg:text-6xl"
          >
            Desarrollamos software a medida que{' '}
            <span className="text-gradient">resuelve problemas reales</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-6 max-w-xl text-lg text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)]"
          >
            En PXNDEV diseñamos y programamos sistemas para negocios que necesitan
            soluciones propias: desde apps y CRM hasta gestión de consorcios,
            reservas y eventos. Tecnología seria, trato cercano.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="#contacto" variant="primary" size="lg">
              Solicitar presupuesto
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Button>
            <Button href="#servicios" variant="secondary" size="lg">
              Ver servicios
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
