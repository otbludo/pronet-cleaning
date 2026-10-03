import { contact } from '../contact'
import { Check } from './icons'
import Blob from './ui/Blob'

const offers = [
  { label: 'Disponible', value: 'Lundi au vendredi' },
  { label: 'Particuliers & pros', value: 'Service sur mesure', featured: true },
  { label: 'Ménage complet', value: 'Fin de chantier' },
]

const icon = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'size-8',
}

const steps = [
  {
    title: '1. Contactez-moi',
    text: `Par téléphone au ${contact.phone} ou par e-mail, pour me décrire votre besoin.`,
    side: 'right',
    svg: (
      <svg viewBox="0 0 24 24" {...icon}>
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" />
      </svg>
    ),
  },
  {
    title: '2. Recevez une confirmation',
    text: 'On fixe ensemble le jour, l’horaire et les tâches à réaliser.',
    side: 'left',
    svg: (
      <svg viewBox="0 0 24 24" {...icon}>
        <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
        <path d="M9 3h6v3H9zM8.5 10.5h7M8.5 13.5h7M8.5 16.5h3.5M14 17l1.5 1.5L18 16" />
      </svg>
    ),
  },
  {
    title: '3. Profitez d’un intérieur soigné',
    text: 'Je m’occupe de tout, vous retrouvez un intérieur propre et sain.',
    side: 'right',
    svg: (
      <svg viewBox="0 0 24 24" {...icon}>
        <path d="M3 11 12 4l9 7M5 10v10h14V10" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
]

function WavyLine({ d, className }) {
  return (
    <svg
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-y-0 h-full ${className}`}
    >
      <path
        d={d}
        fill="none"
        stroke="#6b6b6b"
        strokeWidth="1.2"
        strokeDasharray="6 6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function Step({ step, last }) {
  return (
    <div
      className={`relative flex gap-5 md:w-1/2 md:flex-col md:items-center md:gap-0 md:pb-0 md:text-center ${
        last ? '' : 'pb-14'
      } ${step.side === 'right' ? 'md:ml-auto md:pl-10' : 'md:pr-10'}`}
    >
      {/* Mobile : trait ondulé qui relie cette icône à la suivante, en passant derrière */}
      {!last && (
        <svg
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          className="pointer-events-none absolute top-8 left-2 h-[calc(100%-2rem)] w-12 md:hidden"
        >
          <path
            d="M50 0 C 50 250, 90 300, 90 500 S 50 750, 50 1000"
            fill="none"
            stroke="#6b6b6b"
            strokeWidth="1.2"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
      <span className="relative z-10 grid size-16 shrink-0 place-items-center rounded-md bg-brand-light text-brand">
        {step.svg}
      </span>
      <div className="pt-1 md:pt-0">
        <h4 className="text-xl md:mt-6">{step.title}</h4>
        <p className="mt-3 max-w-xs text-sm text-neutral-600 md:mt-4">{step.text}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="relative isolate bg-gradient-to-b from-neutral-100 to-white py-24">
      <Blob tone="pink" className="top-[40%] right-[-8rem] size-[28rem]" />
      <Blob tone="peach" className="bottom-24 left-[-6rem] size-[22rem]" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl">
          Ce que vous pouvez attendre
          <br />
          de <span className="font-serif">Pronet</span>
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {offers.map((o) => (
            <div
              key={o.label}
              className={`flex flex-col items-center rounded-2xl px-5 py-8 text-center transition hover:-translate-y-1 ${
                o.featured
                  ? 'bg-brand text-white shadow-lg shadow-brand/30 sm:-my-3'
                  : 'border border-neutral-200 bg-white shadow-sm'
              }`}
            >
              <span
                className={`grid size-11 place-items-center rounded-full ${
                  o.featured ? 'bg-white text-brand' : 'bg-brand-light text-brand'
                }`}
              >
                <Check className="size-4" />
              </span>
              <p
                className={`mt-5 text-xs font-bold tracking-widest uppercase ${
                  o.featured ? 'text-white/80' : 'text-brand'
                }`}
              >
                {o.label}
              </p>
              <p className="mt-2 text-xl font-black sm:text-2xl">{o.value}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-center text-lg">Comment ça marche ?</h3>

        <div className="relative mt-4">
          {/* Ligne pointillée ondulée (desktop) */}
          <WavyLine
            d="M60 0 C 60 180, 20 250, 20 450 S 70 680, 70 800 S 55 950, 60 1000"
            className="left-1/2 hidden w-24 -translate-x-1/2 md:block"
          />

          <div className="flex flex-col pt-10 pb-16">
            <div className="md:pt-16">
              <Step step={steps[0]} />
            </div>
            <div className="md:-mt-4">
              <Step step={steps[1]} />
            </div>
            <div className="md:-mt-4">
              <Step step={steps[2]} last />
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            Réserver un ménage
          </a>
        </div>
      </div>
    </section>
  )
}
