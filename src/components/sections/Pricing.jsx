import { contact } from '../../data/contact'
import { Briefcase, Check, Home, Truck } from '../icons'
import Blob from '../ui/Blob'
import Reveal from '../ui/Reveal'

/** Formules proposées. Les tarifs sont communiqués sur devis. */
const plans = [
  {
    name: 'Particuliers',
    Icon: Home,
    features: ['Maison', 'Appartement', 'Ménage régulier ou ponctuel'],
  },
  {
    name: 'Professionnels',
    Icon: Briefcase,
    features: ['Bureau', 'Locaux professionnels', 'Créneaux du lundi au vendredi'],
  },
  {
    name: 'Grand ménage',
    Icon: Truck,
    features: ['Maison venant d’être construite', 'Grand ménage pour déménagement', 'Nettoyage en profondeur'],
  },
]

/**
 * Section « Des formules sur mesure » (ancre #tarifs).
 * Chaque bouton ouvre un e-mail de demande de devis pré-rempli avec le nom de la formule.
 */
export default function Pricing() {
  return (
    <section id="tarifs" className="relative isolate mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Blob tone="light" className="top-1/4 -left-64 size-[30rem]" />
      <Blob tone="lilac" className="-right-56 bottom-0 size-[26rem]" />
      <Reveal as="h2" className="text-center text-4xl font-black uppercase sm:text-6xl">
        Des formules <span className="accent">sur mesure</span>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map(({ name, Icon, features }, i) => (
          <Reveal key={name} delay={i * 150}>
          <article
            className="flex h-full flex-col rounded-2xl border border-neutral-200 p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="flex items-center gap-3 text-sm font-black uppercase">
              <span className="grid size-8 place-items-center rounded-md bg-brand-light text-brand">
                <Icon className="size-4" />
              </span>
              {name}
            </h3>
            <p className="mt-5">
              <span className="text-3xl font-black">Sur devis</span>
            </p>
            <ul className="mt-6 mb-7 space-y-3 text-sm text-neutral-600">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="size-3.5 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(`Demande de devis – ${name}`)}`}
              className="shine mt-auto block w-full rounded-md bg-brand py-3 text-center text-xs font-black text-white uppercase transition hover:bg-brand-dark"
            >
              Demander un devis
            </a>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
