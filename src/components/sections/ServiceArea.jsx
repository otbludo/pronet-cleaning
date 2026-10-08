import { contact } from '../../data/contact'
import { MapPin } from '../icons'
import Blob from '../ui/Blob'
import Reveal from '../ui/Reveal'

/**
 * Position de chaque commune sur la carte stylisée (en % de la largeur / hauteur),
 * d'après leur emplacement réel dans la vallée de la Moselotte.
 * `label` : côté où s'affiche le nom par rapport au repère.
 */
const pins = {
  Vagney: { x: 12, y: 22, label: 'right' },
  Thiéfosse: { x: 19, y: 54, label: 'right' },
  'Saulxures-sur-Moselotte': { x: 38, y: 72, label: 'below' },
  Cornimont: { x: 66, y: 63, label: 'above' },
  'La Bresse': { x: 87, y: 26, label: 'left' },
  Ventron: { x: 85, y: 84, label: 'above' },
}

/** Placement de l'étiquette autour du repère. */
const labelPos = {
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  above: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  below: 'top-full left-1/2 mt-2 -translate-x-1/2',
}

/**
 * Carte stylisée de la zone : relief des Vosges en fond, route en pointillés
 * qui relie les communes, repères animés.
 */
function AreaMap() {
  return (
    <div className="relative aspect-[10/7] w-full md:overflow-hidden md:rounded-2xl md:bg-gradient-to-b md:from-white md:to-brand-light/60">
      <svg viewBox="0 0 400 280" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 size-full">
        {/* Montagnes */}
        <path d="M0 150 60 95 110 135 170 70 230 125 290 60 350 110 400 80V280H0Z" className="fill-brand-light" />
        <path d="M0 200 70 150 130 185 200 135 260 175 330 130 400 165V280H0Z" className="fill-brand/15" />
        <path d="M0 240 90 205 170 230 250 200 330 225 400 205V280H0Z" className="fill-white/70" />
        {/* Route de la vallée : Vagney → Thiéfosse → Saulxures → Cornimont → La Bresse, et Cornimont → Ventron */}
        <path
          d="M48 62C70 100 60 135 76 151S120 200 152 202 230 190 264 176 330 120 348 73"
          className="stroke-brand"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 7"
        />
        <path
          d="M264 176C290 190 315 215 340 235"
          className="stroke-brand"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 7"
        />
      </svg>

      {contact.areas.map((town, i) => {
        const pin = pins[town]
        if (!pin) return null
        return (
          <div key={town} className="absolute" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
            {/* Pas de <Reveal> ici : son clip-path couperait l'étiquette qui dépasse du repère */}
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              {/* Halo qui pulse autour du repère */}
              <span
                className="absolute inset-0 animate-ping rounded-full bg-brand/30 [animation-duration:2.4s] motion-reduce:animate-none"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <span className="relative block size-3.5 rounded-full border-[3px] border-white bg-brand shadow-md sm:size-4" />
              <span
                className={`absolute whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-bold text-ink shadow-sm sm:text-xs ${labelPos[pin.label]}`}
              >
                {town}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** Section « Zone d'intervention » (ancre #zone) : texte à gauche, carte stylisée à droite. */
export default function ServiceArea() {
  return (
    <section id="zone" className="relative isolate mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <Blob tone="lilac" className="top-0 -left-40 size-[22rem]" />
      <Blob tone="peach" className="-right-32 bottom-0 size-[20rem]" />

      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
        <Reveal type="left">
          <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand uppercase">
            <MapPin className="size-4" />
            Hautes-Vosges
          </p>
          <h2 className="mt-3 text-4xl leading-[1.05] font-black uppercase sm:text-5xl">
            Zone <br />
            <span className="accent">d’intervention</span>
          </h2>
          <p className="mt-5 max-w-sm text-neutral-500">
            J’interviens à domicile et en entreprise dans la vallée de la Moselotte,
            de Vagney à La Bresse.
          </p>
          <p className="mt-2 font-script text-2xl text-brand">… et environs&nbsp;!</p>
        </Reveal>

        {/* Marge intérieure : le clip-path de <Reveal> couperait sinon l'ombre de la carte */}
        {/* Sur téléphone, la carte est posée directement sur la page (sans cadre) pour gagner de la place */}
        <Reveal type="right" delay={150} className="py-3 md:p-6">
          <div className="md:rotate-1 md:rounded-3xl md:bg-white md:p-3 md:shadow-xl md:shadow-brand/15 md:ring-1 md:ring-neutral-100">
            <AreaMap />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
