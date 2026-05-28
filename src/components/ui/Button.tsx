import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-white hover:brightness-110 shadow-lg shadow-violet-500/25',
  secondary:
    'glass text-[var(--color-fg-dark)] dark:text-[var(--color-fg)] hover:border-[var(--color-accent-cyan)]/50',
  ghost:
    'text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)] hover:text-[var(--color-accent)]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3.5 text-base',
}

type BaseProps = {
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  children,
  ...props
}: ButtonProps | LinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-cyan)] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    const { href: linkHref, ...anchorProps } = props as LinkProps
    return (
      <a href={linkHref} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = props as ButtonProps
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
