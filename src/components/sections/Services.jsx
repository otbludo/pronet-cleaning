import { images } from '../../data/images'
import { ArrowUpRight } from '../icons'
import Blob from '../ui/Blob'
import Reveal from '../ui/Reveal'

/**
 * Photo d'une prestation avec sa légende numérotée.
 *
 * @param {object} props
 * @param {string} props.img Chemin de l'image.
 * @param {string} props.index Numéro affiché dans la légende (ex. "01").
 * @param {string} props.title Nom de la prestation (sert aussi de texte alternatif).
 * @param {string} [props.className] Classes du bloc <figure>.
 * @param {string} [props.imgClass] Classes de l'image (format, hauteur).
 * @param {number} [props.delay] Délai d'apparition en millisecondes.
 */
function ServiceCard({ img, index, title, className = '', imgClass = '', delay = 0 }) {
  return (
    <figure className={className}>
      {/* La photo se dévoile comme un rideau */}
      <div className="overflow-hidden rounded-xl">
        <Reveal as="img" type="wipe" delay={delay} src={img} alt={title} className={`w-full object-cover ${imgClass}`} />
      </div>
      <figcaption className="mt-3 text-xs uppercase">
        <span className="font-light text-neutral-500 italic">{index}/</span>{' '}
        <span className="font-bold">{title}</span>
      </figcaption>
    </figure>
  )
}

/** Section « Mes prestations » (ancre #prestations) : galerie des types de ménage. */
export default function Services() {
  return (
    <section id="prestations" className="relative isolate mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Blob tone="pink" className="top-1/3 -right-64 size-[34rem]" />
      <Blob tone="peach" className="bottom-40 -left-56 size-[24rem]" />
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 className="text-5xl leading-[1.05] font-black uppercase sm:text-6xl">
          Mes <span className="accent">prestations</span>
          <br />
          de ménage
        </h2>
        <p className="max-w-xs text-sm text-neutral-500">
          Du ménage régulier au grand nettoyage avant un déménagement, je m’adapte
          à votre logement et à vos besoins. Contactez-moi pour en parler.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-[1fr_2fr]">
        <ServiceCard
          img={images.serviceOffice}
          index="01"
          title="Bureaux"
          className="md:mt-6"
          imgClass="aspect-[4/5] md:aspect-auto md:h-[30rem]"
        />
        <ServiceCard
          img={images.serviceHome}
          index="02"
          title="Maison & appartement"
          delay={200}
          className="md:[&>figcaption]:text-center"
          imgClass="aspect-[4/3] md:aspect-auto md:h-[31.5rem]"
        />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
        <ServiceCard
          img={images.serviceRenovation}
          index="03"
          title="Fin de chantier & déménagement"
          className="md:max-w-[36rem]"
          imgClass="aspect-[16/10]"
        />
        {/* Raccourci vers les formules */}
        <Reveal type="zoom" delay={200} className="self-center justify-self-end">
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
        </Reveal>
      </div>
    </section>
  )
}
