/**
 * Bibliothèque d'icônes SVG du site.
 *
 * Chaque icône est un composant qui accepte les props d'un `<svg>` (className, style…).
 * Elles héritent de la couleur du texte (`currentColor`) : on les colore avec
 * les classes Tailwind `text-*` et on les dimensionne avec `size-*`.
 */

/** Style commun des icônes au trait. */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

/** Variante au trait plus fin, pour les icônes « dessinées à la main ». */
const soft = { ...stroke, strokeWidth: 1.6 }

/** Tracé d'un petit cœur plein centré sur (x, y), mis à l'échelle par `s`. */
const heart = (x, y, s = 1) =>
  `M${x} ${y + 1.5 * s}s${-2.4 * s} ${-1.3 * s} ${-2.4 * s} ${-2.9 * s}c0 ${-0.7 * s} ${0.6 * s} ${-1.3 * s} ${1.3 * s} ${-1.3 * s}c${0.5 * s} 0 ${0.9 * s} ${0.3 * s} ${1.1 * s} ${0.7 * s}c${0.2 * s} ${-0.4 * s} ${0.6 * s} ${-0.7 * s} ${1.1 * s} ${-0.7 * s}c${0.7 * s} 0 ${1.3 * s} ${0.6 * s} ${1.3 * s} ${1.3 * s}c0 ${1.6 * s} ${-2.4 * s} ${2.9 * s} ${-2.4 * s} ${2.9 * s}Z`

/** Tracé d'une petite étoile pleine à 4 branches centrée sur (x, y), de rayon `r`. */
const star = (x, y, r) =>
  `M${x} ${y - r}c${r * 0.15} ${r * 0.7} ${r * 0.3} ${r * 0.85} ${r} ${r}c${-r * 0.7} ${r * 0.15} ${-r * 0.85} ${r * 0.3} ${-r} ${r}c${-r * 0.15} ${-r * 0.7} ${-r * 0.3} ${-r * 0.85} ${-r} ${-r}c${r * 0.7} ${-r * 0.15} ${r * 0.85} ${-r * 0.3} ${r} ${-r}Z`

/* -------------------------------------------------------------------------- */
/*  Navigation et actions                                                     */
/* -------------------------------------------------------------------------- */

export const ArrowUpRight = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

export const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Play = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
  </svg>
)

export const Check = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={3} {...props}>
    <path d="m5 12 5 5 9-10" />
  </svg>
)

/* -------------------------------------------------------------------------- */
/*  Contact                                                                   */
/* -------------------------------------------------------------------------- */

export const Phone = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
  </svg>
)

export const Mail = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
)

export const Clock = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

/* -------------------------------------------------------------------------- */
/*  Prestations et décor                                                      */
/* -------------------------------------------------------------------------- */

/** Toit de maison du logo Pronet (format large 40×24). */
export const HomeRoof = (props) => (
  <svg viewBox="0 0 40 24" {...stroke} strokeWidth={2.2} {...props}>
    <path d="M2 14 20 2l18 12" />
    <path d="M28 7.5V3h4v7.2" />
    <rect x="17" y="9" width="6" height="5" strokeWidth={1.6} />
  </svg>
)

export const Home = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M3 11 12 4l9 7M5 10v10h14V10" />
  </svg>
)

export const Briefcase = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
)

export const Truck = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M2 6h11v10H2zM13 9h4.5l3.5 3.5V16h-8" />
    <circle cx="6" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
)

export const Quote = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 18v-5.5C4 8.4 6 6 9.5 5l.7 1.6C8.2 7.4 7.3 8.8 7.2 11H10v7H4Zm10 0v-5.5C14 8.4 16 6 19.5 5l.7 1.6c-2 .8-2.9 2.2-3 4.4H20v7h-6Z" />
  </svg>
)

export const Sparkle = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c.6 4.8 2.2 6.9 7 8-4.8 1-6.4 3.2-7 8-.6-4.8-2.2-7-7-8 4.8-1.1 6.4-3.2 7-8Z" />
  </svg>
)

/* -------------------------------------------------------------------------- */
/*  Icônes « dessinées à la main » (menu mobile, barre de réservation)        */
/* -------------------------------------------------------------------------- */

export const HomeHeart = (props) => (
  <svg viewBox="0 0 24 24" {...soft} {...props}>
    <path d="M3.5 11.2C6.5 8.4 9 6.3 11.2 4.6c.5-.4 1.1-.4 1.6 0 2.2 1.7 4.7 3.8 7.7 6.6" />
    <path d="M5.8 10.2v7.4c0 1.2.9 2.1 2.1 2.1h8.2c1.2 0 2.1-.9 2.1-2.1v-7.4" />
    <path d={heart(12, 15.2)} fill="currentColor" stroke="none" />
  </svg>
)

export const CalendarHeart = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.7} {...props}>
    <path d="M4.8 8.2c0-1.7 1.2-2.9 2.9-2.9h8.6c1.7 0 2.9 1.2 2.9 2.9v8.4c0 1.8-1.3 3.1-3.1 3.1H7.9c-1.8 0-3.1-1.3-3.1-3.1Z" />
    <path d="M5 10.2c4.6-.9 9.4-.9 14 0" />
    <path d="M9 3.4c.2 1 .2 2 0 3.2M15 3.4c-.2 1-.2 2 0 3.2" />
    <path
      d="M12 17.2s-2.9-1.6-2.9-3.4c0-.9.7-1.5 1.5-1.5.6 0 1.1.3 1.4.9.3-.6.8-.9 1.4-.9.8 0 1.5.6 1.5 1.5 0 1.8-2.9 3.4-2.9 3.4Z"
      fill="currentColor"
      strokeWidth={0}
    />
  </svg>
)

export const SprayShine = (props) => (
  <svg viewBox="0 0 24 24" {...soft} {...props}>
    <path d="M7.5 11.4c0-1.2 1-2.2 2.2-2.2h1.8c1.2 0 2.2 1 2.2 2.2v7.6c0 1-.8 1.8-1.8 1.8H9.3c-1 0-1.8-.8-1.8-1.8Z" />
    <path d="M9.4 9.2V6.6h3.4c.6 0 1.2.3 1.6.7l.9.9M9.4 6.6c-1 0-1.9-.5-2.5-1.3" />
    <path d="M10.6 13.5c-.3.9-.3 2.6 0 3.6" />
    <path d={star(18.6, 5.2, 1.6)} fill="currentColor" stroke="none" />
    <path d={star(19.4, 10.6, 1.1)} fill="currentColor" stroke="none" />
  </svg>
)

export const TagHeart = (props) => (
  <svg viewBox="0 0 24 24" {...soft} {...props}>
    <path d="M4 11.9V5.8C4 4.8 4.8 4 5.8 4h6.1c.5 0 1 .2 1.3.5l6.3 6.3c.7.7.7 1.9 0 2.6l-6.1 6.1c-.7.7-1.9.7-2.6 0l-6.3-6.3c-.3-.3-.5-.8-.5-1.3Z" />
    <circle cx="8.2" cy="8.2" r="1.2" />
    <path d={heart(13.4, 13, 0.85)} fill="currentColor" stroke="none" />
  </svg>
)

export const MailHeart = (props) => (
  <svg viewBox="0 0 24 24" {...soft} {...props}>
    <path d="M3.8 8c0-1.5 1.2-2.7 2.7-2.7h11c1.5 0 2.7 1.2 2.7 2.7v8c0 1.5-1.2 2.7-2.7 2.7h-11c-1.5 0-2.7-1.2-2.7-2.7Z" />
    <path d="M4.5 6.8c2.4 2.2 4.6 4 6.4 5.2.7.4 1.5.4 2.2 0 1.8-1.2 4-3 6.4-5.2" />
    <path d={heart(12, 14.8, 0.8)} fill="currentColor" stroke="none" />
  </svg>
)

export const CloseSoft = (props) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} {...props}>
    <path d="M6.5 6.5c3.6 3 7.2 7.4 11 11M17.5 6.5c-3.6 3-7.2 7.4-11 11" />
  </svg>
)
