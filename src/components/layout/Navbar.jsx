import { useCallback, useEffect, useState } from 'react'
import { contact } from '../../data/contact'
import { CalendarHeart, CloseSoft, HomeHeart, MailHeart, Phone, SprayShine, TagHeart } from '../icons'
import Blob from '../ui/Blob'
import Logo from './Logo'

/** Liens de navigation : chaque `href` correspond à l'id d'une section de la page. */
const links = [
  { label: 'Accueil', href: '#accueil', Icon: HomeHeart },
  { label: 'Demander un devis', href: '#contact', Icon: CalendarHeart },
  { label: 'Prestations', href: '#prestations', Icon: SprayShine },
  { label: 'Formules', href: '#tarifs', Icon: TagHeart },
]

/**
 * Renvoie l'ancre de la section actuellement au centre de l'écran,
 * pour surligner le lien correspondant dans le menu.
 */
function useActiveSection() {
  const [active, setActive] = useState(links[0].href)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      // Bande étroite au milieu de l'écran : une seule section y est présente à la fois
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach((l) => {
      const el = document.querySelector(l.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

/**
 * Menu latéral mobile (masqué à partir de l'écran « lg »).
 * Pendant l'ouverture, la page ne défile plus et la touche Échap ferme le menu.
 */
function Sidebar({ open, onClose, active }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Voile sombre : un clic en dehors du menu le ferme */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-y-0 left-0 isolate flex w-[80%] max-w-xs flex-col overflow-hidden bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Blob tone="light" className="-top-24 -right-24 size-72" />

        <div className="relative flex items-start justify-between px-6 pt-6 pb-8">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Fermer le menu"
            className="grid size-9 place-items-center rounded-full text-neutral-500 transition hover:bg-brand-light hover:text-brand"
          >
            <CloseSoft className="size-5" />
          </button>
        </div>

        <nav className="relative flex flex-col gap-1 px-3">
          {links.map(({ label, href, Icon }) => {
            const current = active === href
            return (
              <a
                key={href}
                href={href}
                onClick={onClose}
                aria-current={current ? 'page' : undefined}
                className={`flex items-center gap-3.5 rounded-2xl px-3 py-2.5 text-[0.95rem] transition-colors ${
                  current
                    ? 'bg-brand-light/70 font-bold text-brand'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors ${
                    current ? 'bg-brand text-white' : 'bg-neutral-100 text-brand'
                  }`}
                >
                  <Icon className="size-5" />
                </span>
                {label}
              </a>
            )
          })}
        </nav>

        {/* Contact rapide en bas du menu */}
        <div className="relative mt-auto border-t border-neutral-100 p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink font-serif text-lg text-white">
              P
            </span>
            <div className="min-w-0">
              <p className="font-bold">Pronet</p>
              <p className="truncate text-xs text-neutral-500">{contact.hours}</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
            <a
              href={contact.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              <Phone className="size-4" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="M'écrire"
              className="grid size-11 place-items-center rounded-full border border-brand text-brand transition hover:bg-brand-light"
            >
              <MailHeart className="size-5" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}

/** En-tête du site : logo, navigation (bureau) ou bouton de menu (mobile), et contact rapide. */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  // Fonction stable : évite de réinstaller les écouteurs du menu à chaque rendu
  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <header className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
      <Logo />

      {/* Navigation bureau */}
      <nav className="hidden items-center gap-8 text-xs font-bold tracking-wide uppercase lg:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`transition hover:text-brand ${active === l.href ? 'text-brand' : ''}`}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <a
          href={`mailto:${contact.email}`}
          aria-label="M'écrire"
          className="grid size-11 place-items-center rounded-full border border-brand text-brand transition hover:bg-brand hover:text-white"
        >
          <MailHeart className="size-5" />
        </a>
        <a
          href={contact.phoneHref}
          className="flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-xs font-black tracking-wide text-white uppercase transition hover:bg-brand-dark"
        >
          <Phone className="size-4" />
          {contact.phone}
        </a>
      </div>

      {/* Bouton « burger » mobile */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="flex flex-col gap-1.5 p-1 lg:hidden"
      >
        <span className="h-0.5 w-6 rounded bg-ink" />
        <span className="h-0.5 w-6 rounded bg-ink" />
        <span className="h-0.5 w-4 self-end rounded bg-ink" />
      </button>

      <Sidebar open={open} onClose={closeMenu} active={active} />
    </header>
  )
}
