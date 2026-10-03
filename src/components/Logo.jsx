import { HomeRoof } from './icons'

export default function Logo({ light = false }) {
  return (
    <a href="#accueil" className="flex flex-col items-start leading-none">
      <HomeRoof className="ml-3 h-3.5 w-8 text-brand" />
      <span className={`font-serif text-2xl ${light ? 'text-white' : 'text-ink'}`}>
        Pro<span className="text-brand">net</span>
      </span>
      <span className={`mt-0.5 text-[0.55rem] font-bold tracking-[0.2em] uppercase ${light ? 'text-neutral-400' : 'text-neutral-500'}`}>
        Femme de ménage
      </span>
    </a>
  )
}
