import { Globe, Link2, Share2 } from 'lucide-react'
import { CONTACT } from '../../config/site'
import { footerNav } from '../../data/navigation'
import { Logo } from '../ui/Logo'

const socialLinks = [
  { label: 'LinkedIn de PXNDEV', href: '#', icon: Link2 },
  { label: 'Instagram de PXNDEV', href: '#', icon: Share2 },
  { label: 'Sitio web de PXNDEV', href: '#', icon: Globe },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border-light)] bg-slate-50 py-12 dark:border-[var(--color-border)] dark:bg-black/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo className="text-2xl" />
            <p className="mt-4 max-w-xs text-sm text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)]">
              Desarrollo de software a medida con soporte inteligente por WhatsApp.
              Tecnología seria, trato cercano.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-3 inline-block text-sm text-[var(--color-accent)] hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          <nav aria-label="Enlaces del sitio">
            <p className="mb-4 text-sm font-semibold text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">
              Navegación
            </p>
            <ul className="flex flex-col gap-2">
              {footerNav.map((item) => (
                <li key={item.label + item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--color-fg-muted-light)] transition-colors hover:text-[var(--color-accent)] dark:text-[var(--color-fg-muted)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">
              Redes
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-lg glass p-2.5 text-[var(--color-fg-muted-light)] transition-colors hover:text-[var(--color-accent-cyan)] dark:text-[var(--color-fg-muted)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border-light)] pt-8 text-sm text-[var(--color-fg-muted-light)] dark:border-[var(--color-border)] dark:text-[var(--color-fg-muted)] sm:flex-row">
          <p>© {year} PXNDEV. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            Hecho con dedicación en Argentina · Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  )
}
