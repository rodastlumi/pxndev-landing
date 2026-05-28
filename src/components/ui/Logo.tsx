type LogoProps = {
  className?: string
  as?: 'span' | 'a'
  href?: string
}

export function Logo({ className = '', as = 'span', href = '#' }: LogoProps) {
  const content = (
    <>
      <span className="text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">PXN</span>
      <span className="text-gradient font-bold">DEV</span>
    </>
  )

  const baseClass = `font-display text-xl font-bold tracking-tight ${className}`

  if (as === 'a') {
    return (
      <a href={href} className={baseClass} aria-label="PXNDEV — Inicio">
        {content}
      </a>
    )
  }

  return <span className={baseClass}>{content}</span>
}
