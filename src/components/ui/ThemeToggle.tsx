import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../../hooks/useTheme'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-lg p-2 text-[var(--color-fg-muted-light)] transition-colors hover:bg-black/5 hover:text-[var(--color-accent)] dark:text-[var(--color-fg-muted)] dark:hover:bg-white/10 dark:hover:text-[var(--color-accent-cyan)]"
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
