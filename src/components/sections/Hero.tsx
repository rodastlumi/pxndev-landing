import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import {
  defaultTransition,
  fadeUp,
  staggerContainer,
} from '../../lib/motion'
import { Button } from '../ui/Button'

const codeSnippet = `const solucion = await pxndev.build({
  problema: "tu negocio real",
  plantillas: false,
  soporteIA: "whatsapp://24-7",
});`

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

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
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

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 32 }}
          animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ ...defaultTransition, delay: 0.2 }}
          className="relative hidden lg:block"
          aria-hidden
        >
          <div className="glass overflow-hidden rounded-2xl border border-[var(--color-accent)]/20 shadow-2xl shadow-violet-500/10">
            <div className="flex items-center gap-2 border-b border-[var(--color-border-light)] px-4 py-3 dark:border-[var(--color-border)]">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 text-xs text-[var(--color-fg-muted)]">
                pxndev/solucion.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-[var(--color-accent-cyan)]">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
