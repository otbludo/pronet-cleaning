import { contact } from '../../data/contact'
import { images } from '../../data/images'
import { ArrowUpRight, Phone } from '../icons'
import Blob from '../ui/Blob'
import CountUp from '../ui/CountUp'
import Reveal from '../ui/Reveal'

/**
 * Carte blanche : photo en haut, chiffre clé, intitulé et description.
 *
 * @param {object} props
 * @param {string} props.src Chemin de la photo.
 * @param {string} props.alt Texte alternatif de la photo.
 * @param {React.ReactNode} props.value Chiffre clé (ex. <CountUp to={5} />).
 * @param {string} props.label Intitulé sous le chiffre.
 * @param {string} props.text Description.
 */
function PhotoCard({ src, alt, value, label, text }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/5">
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-5xl font-black text-brand">{value}</p>
        <p className="mt-1 font-bold uppercase">{label}</p>
        <p className="mt-3 text-sm text-neutral-500">{text}</p>
      </div>
    </div>
  )
}

/**
 * Section « Pourquoi me choisir ? » : deux cartes photo avec chiffres animés,
 * encadrant une carte rose mise en avant (disponibilité + appel).
 */
export default function WhyChooseMe() {
  return (
    // Le fond passe progressivement du blanc au gris sur les 14 premiers rem
    <section className="relative isolate bg-[linear-gradient(to_bottom,white,var(--color-neutral-100)_14rem)] py-24">
      <Blob tone="light" className="top-1/2 left-[8%] size-[24rem]" />
      <Blob tone="lilac" className="right-[6%] bottom-10 size-[22rem]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal as="h2" className="text-center text-4xl leading-tight font-black uppercase sm:text-6xl">
          Pourquoi
          <br />
          me <span className="accent">choisir</span> ?
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Reveal>
            <PhotoCard
              src={images.whyServices}
              alt="Nettoyage de canapé"
              value={<CountUp to={5} />}
              label="Prestations proposées"
              text="Maison, appartement, bureau, fin de chantier et grand ménage de déménagement."
            />
          </Reveal>

          {/* Carte mise en avant, légèrement plus haute que ses voisines (md:-my-4) */}
          <Reveal delay={150} className="md:-my-4">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-brand p-7 text-white shadow-lg shadow-brand/30">
            <span className="pointer-events-none absolute -top-16 -right-16 size-56 rounded-full bg-white/10" />
            <span className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-white/10" />
            <div className="relative">
              <p className="font-script text-3xl">Disponibilité</p>
              <p className="mt-4 text-5xl font-black">Lun – Ven</p>
              <p className="mt-3 text-white/85">{contact.hours}, selon vos horaires.</p>
            </div>
            <a
              href={contact.phoneHref}
              className="shine group relative mt-10 flex items-center justify-between gap-3 rounded-full bg-white py-2 pr-2 pl-5 font-black text-brand transition hover:bg-brand-light"
            >
              <span className="flex items-center gap-2">
                <Phone className="size-4" />
                {contact.phone}
              </span>
              <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
          </div>
          </Reveal>

          <Reveal delay={300}>
            <PhotoCard
              src={images.whyContact}
              alt="Aspirateur"
              value={<CountUp to={1} />}
              label="Interlocutrice dédiée"
              text="Une seule interlocutrice, de la prise de contact jusqu’au ménage terminé."
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
