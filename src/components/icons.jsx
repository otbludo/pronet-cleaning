const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const ArrowUpRight = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const ArrowLeft = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
)

export const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Play = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
  </svg>
)

export const Star = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
  </svg>
)

export const ChevronDown = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const Check = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={3} {...props}>
    <path d="m5 12 5 5 9-10" />
  </svg>
)

export const Quote = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 18v-5.5C4 8.4 6 6 9.5 5l.7 1.6C8.2 7.4 7.3 8.8 7.2 11H10v7H4Zm10 0v-5.5C14 8.4 16 6 19.5 5l.7 1.6c-2 .8-2.9 2.2-3 4.4H20v7h-6Z" />
  </svg>
)

export const Home = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M3 11 12 4l9 7M5 10v10h14V10" />
  </svg>
)

export const Building = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M4 21V5l8-2v18M12 8l8 2v11M3 21h18M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" />
  </svg>
)

export const Briefcase = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
)

export const Dribbble = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 3.7c3 3.7 5.6 9.3 6.7 16.8M3.1 10.5c5.4.4 10.2-.8 14.6-4.4M5.5 18.3c3.4-4.3 8-5.6 15.3-3.9" />
  </svg>
)

export const Instagram = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.6} {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </svg>
)

export const Behance = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8.2 11.4c.9-.4 1.4-1.1 1.4-2.1 0-2-1.5-2.6-3.2-2.6H2v10.6h4.6c1.8 0 3.6-.9 3.6-3 0-1.3-.6-2.3-2-2.9ZM4.1 8.5h2c.8 0 1.4.3 1.4 1.1 0 .8-.5 1.1-1.3 1.1H4.1V8.5Zm2.2 7.1H4.1v-2.9h2.2c.9 0 1.6.4 1.6 1.4s-.7 1.5-1.6 1.5ZM15 7.4h5v1.2h-5V7.4Zm2.6 2.3c-2.4 0-4 1.8-4 4.1 0 2.4 1.5 4 4 4 1.9 0 3.1-.9 3.7-2.7h-1.9c-.2.7-1 1-1.7 1-1.2 0-1.9-.7-1.9-1.9h5.6c.2-2.5-1.1-4.5-3.8-4.5Zm-1.8 3.3c.1-1 .7-1.6 1.7-1.6s1.5.6 1.6 1.6h-3.3Z" />
  </svg>
)

export const LinkedIn = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M5 8.5h3V19H5V8.5ZM6.5 4a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM10 8.5h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-3v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V19H10V8.5Z" />
  </svg>
)

export const Phone = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
  </svg>
)

export const Mail = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
)

export const Clock = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const HomeRoof = (props) => (
  <svg viewBox="0 0 40 24" {...base} strokeWidth={2.2} {...props}>
    <path d="M2 14 20 2l18 12" />
    <path d="M28 7.5V3h4v7.2" />
    <rect x="17" y="9" width="6" height="5" strokeWidth={1.6} />
  </svg>
)

export const Truck = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M2 6h11v10H2zM13 9h4.5l3.5 3.5V16h-8" />
    <circle cx="6" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
)

export const Sparkle = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c.6 4.8 2.2 6.9 7 8-4.8 1-6.4 3.2-7 8-.6-4.8-2.2-7-7-8 4.8-1.1 6.4-3.2 7-8Z" />
  </svg>
)

export const Calendar = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>
)

export const ChevronLeft = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="m15 6-6 6 6 6" />
  </svg>
)

export const ChevronRight = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

// Icônes « dessinées à la main » pour les champs du formulaire
export const CalendarHeart = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.7} {...props}>
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

export const SwashDown = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={2} {...props}>
    <path d="M5.5 9.2c1.8-.4 3.3.6 4.6 2.3l1 1.3c.5.6 1.3.6 1.8 0l1-1.3c1.3-1.7 2.8-2.7 4.6-2.3" />
  </svg>
)

export const Close = (props) => (
  <svg viewBox="0 0 24 24" {...base} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

// --- Icônes « dessinées à la main » (menu) ---
const soft = { ...base, strokeWidth: 1.6 }

// Petite étoile à 4 branches pleine, centrée sur (x, y)
const star = (x, y, r) =>
  `M${x} ${y - r}c${r * 0.15} ${r * 0.7} ${r * 0.3} ${r * 0.85} ${r} ${r}c${-r * 0.7} ${r * 0.15} ${-r * 0.85} ${r * 0.3} ${-r} ${r}c${-r * 0.15} ${-r * 0.7} ${-r * 0.3} ${-r * 0.85} ${-r} ${-r}c${r * 0.7} ${-r * 0.15} ${r * 0.85} ${-r * 0.3} ${r} ${-r}Z`

// Petit cœur plein, centré sur (x, y)
const heart = (x, y, s = 1) =>
  `M${x} ${y + 1.5 * s}s${-2.4 * s} ${-1.3 * s} ${-2.4 * s} ${-2.9 * s}c0 ${-0.7 * s} ${0.6 * s} ${-1.3 * s} ${1.3 * s} ${-1.3 * s}c${0.5 * s} 0 ${0.9 * s} ${0.3 * s} ${1.1 * s} ${0.7 * s}c${0.2 * s} ${-0.4 * s} ${0.6 * s} ${-0.7 * s} ${1.1 * s} ${-0.7 * s}c${0.7 * s} 0 ${1.3 * s} ${0.6 * s} ${1.3 * s} ${1.3 * s}c0 ${1.6 * s} ${-2.4 * s} ${2.9 * s} ${-2.4 * s} ${2.9 * s}Z`

export const HomeHeart = (props) => (
  <svg viewBox="0 0 24 24" {...soft} {...props}>
    <path d="M3.5 11.2C6.5 8.4 9 6.3 11.2 4.6c.5-.4 1.1-.4 1.6 0 2.2 1.7 4.7 3.8 7.7 6.6" />
    <path d="M5.8 10.2v7.4c0 1.2.9 2.1 2.1 2.1h8.2c1.2 0 2.1-.9 2.1-2.1v-7.4" />
    <path d={heart(12, 15.2)} fill="currentColor" stroke="none" />
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

export const CloseSoft = (props) => (
  <svg viewBox="0 0 24 24" {...base} strokeWidth={1.8} {...props}>
    <path d="M6.5 6.5c3.6 3 7.2 7.4 11 11M17.5 6.5c-3.6 3-7.2 7.4-11 11" />
  </svg>
)

export const MailHeart = (props) => (
  <svg viewBox="0 0 24 24" {...soft} {...props}>
    <path d="M3.8 8c0-1.5 1.2-2.7 2.7-2.7h11c1.5 0 2.7 1.2 2.7 2.7v8c0 1.5-1.2 2.7-2.7 2.7h-11c-1.5 0-2.7-1.2-2.7-2.7Z" />
    <path d="M4.5 6.8c2.4 2.2 4.6 4 6.4 5.2.7.4 1.5.4 2.2 0 1.8-1.2 4-3 6.4-5.2" />
    <path d={heart(12, 14.8, 0.8)} fill="currentColor" stroke="none" />
  </svg>
)
