import { motion } from 'framer-motion'
import { Bot, Clock, MessageSquare, Zap } from 'lucide-react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { defaultTransition, fadeUp, viewportOnce } from '../../lib/motion'
import { Section, SectionHeader } from '../ui/Section'

const chatMessages = [
  {
    from: 'user' as const,
    text: 'Hola, ¿cómo reservo la cancha para el sábado a las 18?',
    time: '14:32',
  },
  {
    from: 'bot' as const,
    text: '¡Hola! El sábado 18:00 está disponible en cancha 2. ¿Confirmo la reserva a tu nombre?',
    time: '14:32',
  },
  {
    from: 'user' as const,
    text: 'Sí, por favor. Soy Martín del club Norte.',
    time: '14:33',
  },
  {
    from: 'bot' as const,
    text: 'Listo, Martín. Reserva confirmada. Te enviamos el comprobante por acá. Cualquier cambio, escribinos.',
    time: '14:33',
  },
]

const benefits = [
  {
    icon: Clock,
    title: '24/7 sin esperas',
    text: 'Respuestas inmediatas a cualquier hora, incluso fines de semana y feriados.',
  },
  {
    icon: Bot,
    title: 'IA que entiende contexto',
    text: 'Atención automatizada e inteligente, con escalamiento humano cuando hace falta.',
  },
  {
    icon: Zap,
    title: 'Para vos y tus usuarios',
    text: 'Soporte para tu equipo y para quienes usan las apps que desarrollamos.',
  },
]

export function WhatsAppSupport() {
  const reducedMotion = useReducedMotion()

  return (
    <Section
      id="ia-whatsapp"
      className="relative overflow-hidden"
      ariaLabelledby="ia-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 to-transparent"
        aria-hidden
      />

      <div className="relative">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-whatsapp)]/15 px-4 py-1.5 text-sm font-semibold text-emerald-600 dark:text-[var(--color-whatsapp)]">
          <MessageSquare className="h-4 w-4" aria-hidden />
          Incluido en todos los desarrollos
        </span>

        <SectionHeader
          id="ia-heading"
          title="Soporte con IA por WhatsApp"
          description="Nuestro diferencial: cada sistema que entregamos incluye asistencia con inteligencia artificial vía WhatsApp, para tu negocio y para los usuarios finales de tus aplicaciones."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={viewportOnce}
            variants={fadeUp}
            transition={defaultTransition}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)]">
              Olvidate de colas de mail o tickets que nadie mira. Tus clientes y tu
              equipo consultan por WhatsApp y reciben respuestas al instante: estado
              de reservas, expensas, turnos, inscripciones y más.
            </p>

            <ul className="space-y-5">
              {benefits.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-whatsapp)]/15 text-emerald-600 dark:text-[var(--color-whatsapp)]"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-fg-dark)] dark:text-[var(--color-fg)]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[var(--color-fg-muted-light)] dark:text-[var(--color-fg-muted)]">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.15 }}
            className="mx-auto w-full max-w-sm"
          >
            <div
              className="overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-[#e5ddd5] shadow-2xl dark:border-[var(--color-border)]"
              role="img"
              aria-label="Ejemplo de conversación de soporte por WhatsApp con asistente de IA"
            >
              <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                  PX
                </div>
                <div>
                  <p className="font-semibold text-sm">Soporte PXNDEV</p>
                  <p className="text-xs text-white/80">en línea · IA activa</p>
                </div>
              </div>

              <div className="space-y-3 p-4 min-h-[280px]">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                        msg.from === 'user'
                          ? 'rounded-tr-sm bg-[#dcf8c6] text-gray-900'
                          : 'rounded-tl-sm bg-white text-gray-900'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className="mt-1 text-right text-[10px] text-gray-500">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
