import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { defaultTransition, fadeUp, viewportOnce } from '../../lib/motion'

type SectionSpacing = 'default' | 'loose'

const spacingClasses: Record<SectionSpacing, string> = {
  default: 'pt-14 md:pt-20 pb-0',
  loose: 'pt-20 md:pt-24 pb-16 md:pb-20',
}

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  ariaLabelledby?: string
  spacing?: SectionSpacing
}

export function Section({
  id,
  children,
  className = '',
  ariaLabelledby,
  spacing = 'default',
}: SectionProps) {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`section-scroll-margin ${spacingClasses[spacing]} ${className}`}
    >
      <motion.div
        initial={reducedMotion ? false : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={viewportOnce}
        variants={fadeUp}
        transition={defaultTransition}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <header className="mb-8 max-w-2xl md:mb-10">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent-cyan)]">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-bold tracking-tight text-[var(--color-fg-dark)] dark:text-[var(--color-fg)] md:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)]">
          {description}
        </p>
      )}
    </header>
  )
}
