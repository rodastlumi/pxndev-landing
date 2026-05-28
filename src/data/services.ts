import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Calendar,
  Dumbbell,
  Server,
  Smartphone,
  Ticket,
  Users,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'soporte-sistemas',
    title: 'Soporte en sistemas',
    description:
      'Mantenimiento, asistencia técnica y soporte continuo de tu infraestructura y software para que tu operación no se detenga.',
    icon: Server,
  },
  {
    id: 'desarrollo-apps',
    title: 'Desarrollo de apps',
    description:
      'Aplicaciones móviles y web a medida, pensadas para tus usuarios y alineadas con los objetivos de tu negocio.',
    icon: Smartphone,
  },
  {
    id: 'crm',
    title: 'Sistemas CRM a medida',
    description:
      'Gestión de clientes adaptada a tu forma de trabajar: pipelines, seguimiento y reportes que realmente usás.',
    icon: Users,
  },
  {
    id: 'consorcios',
    title: 'Consorcios y barrios cerrados',
    description:
      'Expensas, comunicación con propietarios, reservas de espacios comunes y administración integral en un solo lugar.',
    icon: Building2,
  },
  {
    id: 'canchas',
    title: 'Alquiler de canchas',
    description:
      'Sistema de reservas y gestión de turnos para clubes deportivos, con disponibilidad en tiempo real.',
    icon: Calendar,
  },
  {
    id: 'gimnasios',
    title: 'Booking para gimnasios',
    description:
      'Reservas de clases, control de membresías y turnos para optimizar la ocupación de tu centro.',
    icon: Dumbbell,
  },
  {
    id: 'eventos',
    title: 'Registros online a eventos',
    description:
      'Inscripción y gestión de asistentes: cupos, confirmaciones y datos listos el día del evento.',
    icon: Ticket,
  },
]

export const serviceOptions = [
  ...services.map((s) => ({ value: s.id, label: s.title })),
  { value: 'otro', label: 'Otro' },
]
