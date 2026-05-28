/** Formato internacional sin + ni espacios (wa.me) */
export const WHATSAPP_NUMBER = '5491133788255'

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola PXNDEV, quiero consultar por un desarrollo a medida.'

export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const CONTACT = {
  email: 'hola@pxndev.com',
  phone: '+54 9 11 3378-8255',
  phoneHref: 'tel:+5491133788255',
} as const
