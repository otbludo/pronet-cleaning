import { contact } from '../../data/contact'
import { Clock, Mail, MapPin, Phone } from '../icons'
import Reveal from '../ui/Reveal'
import Logo from './Logo'

/** Liens de la colonne « Navigation » (ancres des sections de la page). */
const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Prestations', href: '#prestations' },
  { label: 'Formules', href: '#tarifs' },
  { label: 'Zone d’intervention', href: '#zone' },
]

/** Lignes de la colonne « Contact » ; sans `href`, la ligne n'est pas cliquable. */
const infos = [
  { Icon: Phone, label: contact.phone, href: contact.phoneHref },
  { Icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { Icon: Clock, label: contact.hours },
  { Icon: MapPin, label: `${contact.areas.join(', ')} et environs` },
]

/**
 * Pied de page : bandeau d'appel, colonnes (présentation, navigation, contact),
 * mentions et grand logo « Pronet » coupé à mi-hauteur.
 */
export default function Footer() {
  return (
    <footer id="contact" className="overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        {/* Bandeau d'appel à l'action : appel */}
        <Reveal type="zoom" className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-brand p-8 shadow-2xl shadow-brand/20 md:flex-row md:items-center md:p-12">
          {/* Cercles décoratifs */}
          <span className="pointer-events-none absolute -top-20 -right-10 size-64 rounded-full bg-white/10" />
          <span className="pointer-events-none absolute -bottom-24 left-1/3 size-56 rounded-full bg-white/10" />
          <div className="relative">
            <p className="font-script text-3xl">Envie d’un intérieur soigné&nbsp;?</p>
            <p className="mt-2 text-3xl leading-tight font-black uppercase sm:text-4xl">
              Appelez-moi
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-black transition hover:bg-white/10"
            >
              <Phone className="size-4" />
              {contact.phone}
            </a>
          </div>
        </Reveal>

        {/* Colonnes : présentation, navigation, contact */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <Reveal>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm text-neutral-400">
              Ménage à domicile et en entreprise : maison, appartement, bureau, fin de chantier et déménagement.
            </p>
            <p className="mt-4 font-script text-2xl text-brand">Votre satisfaction, ma priorité !</p>
          </Reveal>

          <Reveal as="nav" delay={150} aria-label="Pied de page">
            <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Navigation</p>
            <ul className="mt-5 flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-neutral-300 transition hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Contact</p>
            <ul className="mt-5 flex flex-col gap-3">
              {infos.map(({ Icon, label, href }) => {
                const Tag = href ? 'a' : 'span'
                return (
                  <li key={label}>
                    <Tag href={href} className="group flex items-center gap-3 text-neutral-300 transition hover:text-white">
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/5 text-brand transition group-hover:bg-brand group-hover:text-white">
                        <Icon className="size-4" />
                      </span>
                      {label}
                    </Tag>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Mentions */}
      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <p className="border-t border-white/10 py-5 text-center text-xs tracking-wider text-neutral-500 uppercase">
          © {new Date().getFullYear()} Pronet · Tous droits réservés
        </p>
      </div>

      {/* Grand logo coupé à mi-hauteur par le bas de page (hauteur visible : h-[13vw] / lg:h-[10rem]).
          Les lettres montent une à une quand le bas de page apparaît. */}
      <div aria-hidden="true" className="h-[13vw] overflow-hidden lg:h-[10rem]">
        <p className="text-center font-serif text-[24vw] leading-[0.85] tracking-tight text-white/95 select-none lg:text-[19rem]">
          {'Pronet'.split('').map((letter, i) => (
            <Reveal
              key={i}
              as="span"
              type="rise"
              delay={i * 90}
              className={`inline-block ${i >= 3 ? 'text-brand' : ''}`}
            >
              {letter}
            </Reveal>
          ))}
        </p>
      </div>
    </footer>
  )
}
