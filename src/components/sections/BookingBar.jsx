import { contact } from '../../data/contact'
import { CalendarHeart } from '../icons'
import Blob from '../ui/Blob'
import Reveal from '../ui/Reveal'

/**
 * Barre « Prendre rendez-vous » sous le Hero (ancre #contact).
 * Le bouton ouvre la page de réservation Google Agenda, qui gère les créneaux
 * de 30 min et ajoute chaque rendez-vous à l'agenda.
 */
export default function BookingBar() {
  return (
    <section id="contact" className="relative isolate mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Blob tone="lilac" className="top-0 -right-24 h-48 w-[28rem]" />
      <Reveal className="grid items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:grid-cols-[1.3fr_2fr_auto] md:gap-6 md:px-8">
        <h2 className="text-2xl font-black uppercase">Prendre rendez-vous</h2>

        <p className="flex items-center gap-3 text-sm text-neutral-500">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-neutral-100 text-brand">
            <CalendarHeart className="size-5" />
          </span>
          Choisissez un créneau de 30 min disponible directement dans notre agenda.
        </p>

        <a
          href={contact.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shine rounded-full bg-brand px-8 py-4 text-center text-xs font-black text-white uppercase transition hover:bg-brand-dark"
        >
          Réserver
        </a>
      </Reveal>
    </section>
  )
}
