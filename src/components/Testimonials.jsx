import { useState } from 'react'
import { ArrowLeft, ArrowRight, Sparkle } from './icons'
import Blob from './ui/Blob'

// Engagements tirés de la carte de visite.
// Quand tu auras de vrais avis clients, tu pourras les afficher ici à la place.
const items = [
  {
    title: 'Propreté',
    text: 'Chaque pièce est nettoyée avec soin, jusque dans les moindres recoins.',
  },
  {
    title: 'Confiance',
    text: 'Vous me confiez votre intérieur : discrétion et respect de vos affaires.',
  },
  {
    title: 'Qualité',
    text: 'Un service à la hauteur de vos attentes, à chaque passage.',
  },
  {
    title: 'Ponctualité',
    text: 'Des créneaux fixés ensemble du lundi au vendredi, et respectés.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = items.length
  const go = (step) => setIndex((i) => (i + step + total) % total)

  return (
    <section className="relative isolate overflow-hidden py-24">
      <Blob tone="light" className="top-10 right-[10%] size-[26rem]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[18rem_1fr]">
        <div>
          <h2 className="text-5xl leading-[1.05] font-black uppercase sm:text-6xl">
            Mes
            <br />
            <span className="accent">engagements</span>
          </h2>
          <div className="mt-10 flex items-center gap-5">
            <button
              onClick={() => go(-1)}
              aria-label="Précédent"
              className="grid size-11 place-items-center rounded-full border border-ink transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </button>
            <span className="text-2xl font-black">
              {index + 1}
              <span className="text-neutral-400">/{total}</span>
            </span>
            <button
              onClick={() => go(1)}
              aria-label="Suivant"
              className="grid size-11 place-items-center rounded-full border border-ink transition hover:border-brand hover:bg-brand hover:text-white"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="-mr-4 overflow-hidden sm:-mr-6 lg:mr-[calc((72rem-100vw)/2-1.5rem)]">
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{ transform: `translateX(calc(-${index} * (18rem + 1.25rem)))` }}
          >
            {items.map((item, i) => (
              <article
                key={item.title}
                className={`w-72 shrink-0 rounded-xl border border-neutral-200 p-6 transition-colors ${
                  i === index ? 'bg-brand-light' : 'bg-white'
                }`}
              >
                <Sparkle className="size-5 text-brand" />
                <p className="mt-4 min-h-20 text-sm text-neutral-600">{item.text}</p>
                <p className="mt-5 border-t border-neutral-200 pt-5 font-script text-3xl text-brand">
                  {item.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
