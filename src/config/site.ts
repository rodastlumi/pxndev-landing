/** Reemplazá con el número real en formato internacional sin + ni espacios */
export const WHATSAPP_NUMBER = '5491112345678'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola PXNDEV, quiero consultar por un desarrollo a medida.'

export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const CONTACT = {
  email: 'hola@pxndev.com',
  phone: '+54 11 1234-5678',
  phoneHref: 'tel:+541112345678',
} as const
