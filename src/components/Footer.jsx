import { contact } from '../contact'
import { ArrowUpRight, Clock, Mail, Phone } from './icons'
import Logo from './Logo'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Prendre rendez-vous', href: '#contact' },
  { label: 'Prestations', href: '#prestations' },
  { label: 'Formules', href: '#tarifs' },
]

const infos = [
  { Icon: Phone, label: contact.phone, href: contact.phoneHref },
  { Icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { Icon: Clock, label: contact.hours },
]

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        {/* Appel à l'action */}
        <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-brand p-8 shadow-2xl shadow-brand/20 md:flex-row md:items-center md:p-12">
          <span className="pointer-events-none absolute -top-20 -right-10 size-64 rounded-full bg-white/10" />
          <span className="pointer-events-none absolute -bottom-24 left-1/3 size-56 rounded-full bg-white/10" />
          <div className="relative">
            <p className="font-script text-3xl">Envie d’un intérieur soigné&nbsp;?</p>
            <p className="mt-2 text-3xl leading-tight font-black uppercase sm:text-4xl">
              Réservez votre créneau
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a
              href={contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-sm font-black text-brand uppercase transition hover:bg-brand-light"
            >
              Réserver
              <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </a>
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-black transition hover:bg-white/10"
            >
              <Phone className="size-4" />
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Colonnes */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm text-neutral-400">
              Ménage à domicile et en entreprise : maison, appartement, bureau, fin de chantier et déménagement.
            </p>
            <p className="mt-4 font-script text-2xl text-brand">Votre satisfaction, ma priorité !</p>
          </div>

          <nav aria-label="Pied de page">
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
          </nav>

          <div>
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
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <p className="border-t border-white/10 py-5 text-center text-xs tracking-wider text-neutral-500 uppercase">
          © {new Date().getFullYear()} Pronet · Tous droits réservés
        </p>
      </div>

      {/* Grand logo coupé à mi-hauteur par le bas de page */}
      <div aria-hidden="true" className="h-[13vw] overflow-hidden lg:h-[10rem]">
        <p className="text-center font-serif text-[24vw] leading-[0.85] tracking-tight text-white/95 select-none lg:text-[19rem]">
          Pro<span className="text-brand">net</span>
        </p>
      </div>
    </footer>
  )
}
