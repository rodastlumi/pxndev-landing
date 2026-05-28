import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { defaultTransition, fadeUp } from '../../lib/motion'

type CardProps = {
  icon?: LucideIcon
  title: string
  description: string
  children?: ReactNode
  className?: string
  index?: number
}

export function Card({
  icon: Icon,
  title,
  description,
  children,
  className = '',
  index = 0,
}: CardProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      variants={fadeUp}
      transition={{ ...defaultTransition, delay: index * 0.06 }}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      className={`glass group rounded-2xl p-6 transition-shadow hover:shadow-xl hover:shadow-violet-500/10 md:p-8 ${className}`}
    >
      {Icon && (
        <div
          className="mb-5 inline-flex rounded-xl bg-[var(--color-accent)]/15 p-3 text-[var(--color-accent)] dark:text-[var(--color-accent-cyan)]"
          aria-hidden
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
      )}
      <h3 className="font-display text-xl font-semibold text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">
        {title}
      </h3>
      <p className="mt-3 text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)] leading-relaxed">
        {description}
      </p>
      {children}
    </motion.article>
  )
}
