export type NavItem = {
  label: string
  href: string
}

export const navigation: NavItem[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'IA WhatsApp', href: '#ia-whatsapp' },
  { label: 'Nosotros', href: '#por-que' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export const footerNav: NavItem[] = [
  ...navigation,
  { label: 'Política de privacidad', href: '#' },
  { label: 'Términos y condiciones', href: '#' },
]
