# PXNDEV — Landing

Single-page application en React + Vite + TypeScript para [PXNDEV](https://pxndev.com) (placeholder). Diseño responsive, modo oscuro/claro y soporte IA por WhatsApp como diferencial.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo

```bash
npm install
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173).

## Build de producción

```bash
npm run build
npm run preview
```

Los archivos estáticos quedan en `dist/`.

## Personalización

### WhatsApp

Editá [`src/config/site.ts`](src/config/site.ts):

- `WHATSAPP_NUMBER`: número en formato internacional sin `+` ni espacios (ej. `5491112345678`)
- `WHATSAPP_DEFAULT_MESSAGE`: mensaje precargado al abrir el chat

El botón flotante y los enlaces del sitio usan `getWhatsAppUrl()`.

### Contacto y redes

En el mismo archivo, actualizá `CONTACT` (email y teléfono). Los íconos de redes en [`src/components/layout/Footer.tsx`](src/components/layout/Footer.tsx) tienen `href="#"` como placeholder.

### Formulario

El envío está simulado en [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx). Para producción, conectá un servicio externo, por ejemplo [Formspree](https://formspree.io):

```ts
await fetch('https://formspree.io/f/XXXXXXXX', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Textos y servicios

Los contenidos están centralizados en `src/data/`.

## Estructura

- `src/components/sections/` — secciones de la página
- `src/components/layout/` — header, footer, WhatsApp flotante
- `src/components/ui/` — botones, cards, tema
- `src/hooks/` — tema, scroll spy, reduced motion
- `src/config/site.ts` — constantes globales del sitio

## Accesibilidad

- HTML semántico y skip link al contenido
- `prefers-reduced-motion` desactiva animaciones y gradientes animados
- Contraste pensado para modo oscuro (base) y claro

## Licencia

Proyecto privado — PXNDEV.
