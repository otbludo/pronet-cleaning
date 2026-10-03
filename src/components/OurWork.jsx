import { images } from '../images'
import { ArrowUpRight } from './icons'
import Blob from './ui/Blob'

function WorkCard({ img, index, title, className = '', imgClass = '' }) {
  return (
    <figure className={className}>
      <img src={img} alt={title} className={`w-full rounded-xl object-cover ${imgClass}`} />
      <figcaption className="mt-3 text-xs uppercase">
        <span className="font-light text-neutral-500 italic">{index}/</span>{' '}
        <span className="font-bold">{title}</span>
      </figcaption>
    </figure>
  )
}

export default function OurWork() {
  return (
    <section id="prestations" className="relative isolate mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Blob tone="pink" className="top-1/3 -right-64 size-[34rem]" />
      <Blob tone="peach" className="bottom-40 -left-56 size-[24rem]" />
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 className="text-5xl leading-[1.05] font-black uppercase sm:text-6xl">
          Mes <span className="accent">prestations</span>
          <br />
          de ménage
        </h2>
        <p className="max-w-xs text-sm text-neutral-500">
          Du ménage régulier au grand nettoyage avant un déménagement, je m’adapte
          à votre logement et à vos besoins. Contactez-moi pour en parler.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-[1fr_2fr]">
        <WorkCard
          img={images.commercial}
          index="01"
          title="Bureaux"
          className="md:mt-6"
          imgClass="aspect-[4/5] md:aspect-auto md:h-[30rem]"
        />
        <WorkCard
          img={images.regular}
          index="02"
          title="Maison & appartement"
          className="md:[&>figcaption]:text-center"
          imgClass="aspect-[4/3] md:aspect-auto md:h-[31.5rem]"
        />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
        <WorkCard
          img={images.kitchen}
          index="03"
          title="Fin de chantier & déménagement"
          className="md:max-w-[36rem]"
          imgClass="aspect-[16/10]"
        />
        <a
          href="#tarifs"
          className="group flex h-56 w-full max-w-[16rem] flex-col items-center justify-center gap-5 self-center justify-self-end rounded-xl border border-neutral-200 p-8 text-center transition hover:shadow-lg"
        >
          <span className="text-lg font-black uppercase">
            5 prestations
            <br />à découvrir
          </span>
          <span className="grid size-9 place-items-center rounded-full bg-brand text-white transition group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </a>
      </div>
    </section>
  )
}
