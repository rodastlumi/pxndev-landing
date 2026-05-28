import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT, getWhatsAppUrl } from '../../config/site'
import { serviceOptions } from '../../data/services'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { defaultTransition, fadeUp, viewportOnce } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Section, SectionHeader } from '../ui/Section'

type FormState = {
  name: string
  email: string
  service: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  service: '',
  message: '',
}

export function Contact() {
  const reducedMotion = useReducedMotion()
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Ingresá tu nombre'
    if (!form.email.trim()) next.email = 'Ingresá tu email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Email no válido'
    if (!form.service) next.service = 'Seleccioná un servicio'
    if (!form.message.trim()) next.message = 'Contanos en qué podemos ayudarte'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    // Integración placeholder: reemplazar por Formspree, Resend, etc.
    // Ejemplo Formspree:
    // await fetch('https://formspree.io/f/XXXXXXXX', { method: 'POST', body: new FormData(e.target as HTMLFormElement) })

    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  const fieldClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white/80 px-4 py-3 text-[var(--color-fg-dark)] transition-colors focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--color-accent-cyan)] dark:bg-white/5 dark:text-[var(--color-fg)] ${
      errors[field]
        ? 'border-red-500'
        : 'border-[var(--color-border-light)] dark:border-[var(--color-border)]'
    }`

  return (
    <Section id="contacto" ariaLabelledby="contacto-heading">
      <SectionHeader
        id="contacto-heading"
        eyebrow="Hablemos"
        title="Contanos tu proyecto"
        description="Completá el formulario y te respondemos a la brevedad. También podés escribirnos directo por WhatsApp."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <motion.aside
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="space-y-6 lg:col-span-2"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">
              Datos de contacto
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-[var(--color-fg-muted-light)] transition-colors hover:text-[var(--color-accent)] dark:text-[var(--color-fg-muted)]"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-[var(--color-fg-muted-light)] transition-colors hover:text-[var(--color-accent)] dark:text-[var(--color-fg-muted)]"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--color-whatsapp)] transition-opacity hover:opacity-80"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                  Escribinos por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <Button
            href={getWhatsAppUrl('Hola PXNDEV, quiero solicitar un presupuesto.')}
            variant="secondary"
            className="w-full border-[var(--color-whatsapp)]/30"
          >
            <MessageCircle className="h-5 w-5 text-[var(--color-whatsapp)]" aria-hidden />
            Abrir WhatsApp
          </Button>
        </motion.aside>

        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className="lg:col-span-3"
        >
          {submitted ? (
            <div
              role="status"
              className="glass rounded-2xl p-8 text-center"
            >
              <p className="font-display text-xl font-semibold text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">
                ¡Mensaje enviado!
              </p>
              <p className="mt-2 text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)]">
                Gracias por contactarnos. Te vamos a responder pronto.
              </p>
              <Button
                type="button"
                variant="ghost"
                className="mt-6"
                onClick={() => setSubmitted(false)}
              >
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass space-y-5 rounded-2xl p-6 md:p-8"
              noValidate
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={fieldClass('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={fieldClass('email')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                  className={fieldClass('service')}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  <option value="">Seleccioná una opción</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={`${fieldClass('message')} resize-y min-h-[120px]`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? 'Enviando…' : 'Enviar mensaje'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
