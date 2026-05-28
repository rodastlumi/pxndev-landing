import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation } from '../../data/navigation'
import { handleSectionLinkClick } from '../../lib/scrollToSection'
import { useHeaderScrolled } from '../../hooks/useHeaderScrolled'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import type { Theme } from '../../hooks/useTheme'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { ThemeToggle } from '../ui/ThemeToggle'

const sectionIds = ['servicios', 'ia-whatsapp', 'por-que', 'proceso', 'contacto']

type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const scrolled = useHeaderScrolled()
  const activeId = useScrollSpy(sectionIds)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navLinkClass = (href: string) => {
    const id = href.replace('#', '')
    const isActive = activeId === id
    return `text-sm font-medium transition-colors ${
      isActive
        ? 'text-[var(--color-accent)] dark:text-[var(--color-accent-cyan)]'
        : 'text-[var(--color-fg-muted-light)] hover:text-[var(--color-fg-dark)] dark:text-[var(--color-fg-muted)] dark:hover:text-[var(--color-fg)]'
    }`
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass border-b shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo as="a" href="#" />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Button
            href="#contacto"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Presupuesto
          </Button>
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--color-fg-dark)] md:hidden dark:text-[var(--color-fg)]"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="glass border-t px-4 py-6 md:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block py-2 text-lg ${navLinkClass(item.href)}`}
                  onClick={(e) => {
                    handleSectionLinkClick(e, item.href)
                    setMenuOpen(false)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#contacto"
                variant="primary"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Solicitar presupuesto
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
