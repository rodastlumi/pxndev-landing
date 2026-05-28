import { MessageCircle } from 'lucide-react'
import { getWhatsAppUrl } from '../../config/site'

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-whatsapp)] motion-safe:animate-pulse-soft"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  )
}
