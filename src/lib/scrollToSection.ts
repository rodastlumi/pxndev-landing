import type { MouseEvent } from 'react'

const HEADER_OFFSET = 88

export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId)
  if (!el) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

  window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' })
}

export function handleSectionLinkClick(
  e: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith('#')) return
  const id = href.slice(1)
  if (!id) return
  e.preventDefault()
  scrollToSection(id)
}
