import { contact } from '../contact'
import { images } from '../images'
import { Phone, Quote, Sparkle } from './icons'
import Blob from './ui/Blob'
import Reveal from './ui/Reveal'

export default function Hero() {
  return (
    <section id="accueil" className="relative isolate mx-auto max-w-6xl px-4 pt-4 sm:px-6">
      <Blob tone="light" className="top-24 -left-56 size-[30rem]" />
      <Blob tone="peach" className="-top-10 -right-48 size-[26rem]" />
      {/* Chaque ligne du titre monte depuis un masque ; un trait se dessine sous « soigné » */}
      <h1 className="relative z-10 text-5xl leading-[1.05] font-black uppercase sm:text-7xl lg:text-[5.5rem]">
        <span className="-mb-[0.2em] block overflow-hidden pb-[0.2em]">
          <Reveal as="span" type="rise" className="block">
            Un intérieur{' '}
            <span className="accent relative inline-block">
              soigné
              <svg
                viewBox="0 0 200 20"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="draw-line absolute -bottom-[0.05em] left-0 h-[0.25em] w-full text-brand"
              >
                <path d="M3 14C50 4 120 2 197 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" pathLength="1" />
              </svg>
            </span>
          </Reveal>
        </span>
        <span className="block overflow-hidden">
          <Reveal as="span" type="rise" delay={150} className="block">
            sans effort
          </Reveal>
        </span>
      </h1>

      <div className="relative mt-6 grid items-center gap-8 lg:-mt-16 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Valeurs */}
        <div className="order-2 flex flex-col gap-2 justify-self-start lg:order-1 lg:-mt-24">
          {['Propreté', 'Confiance', 'Qualité'].map((v, i) => (
            <Reveal
              key={v}
              as="span"
              type="left"
              delay={700 + i * 120}
              className="flex items-center gap-2 font-script text-2xl text-brand"
            >
              <Sparkle className="size-3.5 animate-[spin_6s_linear_infinite]" style={{ animationDelay: `${i * -2}s` }} />
              {v}
            </Reveal>
          ))}
        </div>

        {/* Image centrale */}
        <div className="order-1 lg:order-2 lg:pt-20">
          {/* Forme douce derrière la photo, la tête dépasse ; le fondu du bas s'applique aux deux */}
          <div className="relative mx-auto w-fit [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
            <Reveal type="zoom" delay={250} className="absolute inset-x-2 top-[24%] bottom-0">
              <div className="animate-morph size-full rounded-[58%_42%_50%_50%/48%_52%_48%_52%] bg-brand-light" />
            </Reveal>
            <Reveal type="up" delay={450} className="relative">
              <img
                src={images.hero}
                alt="Femme de ménage Pronet souriante, plumeau à la main"
                className="h-[26rem] w-auto object-contain sm:h-[30rem] lg:h-[34rem]"
              />
            </Reveal>
          </div>
        </div>

        {/* Texte + appel */}
        <Reveal type="right" delay={850} className="relative order-3 flex flex-col gap-10">
          <Quote className="absolute -top-16 right-0 size-40 text-brand-light" />
          <p className="relative text-lg leading-snug uppercase">
            Un service à la hauteur de vos attentes, pour votre maison comme pour vos bureaux.
          </p>
          <div className="relative">
            <p className="font-script text-2xl text-neutral-700">Intéressé ? Contactez-moi !</p>
            <a
              href={contact.phoneHref}
              className="shine mt-3 inline-flex items-center gap-3 rounded-full bg-brand px-5 py-3 text-xl font-black text-white transition hover:bg-brand-dark"
            >
              <span className="grid size-8 place-items-center rounded-full bg-white text-brand">
                <Phone className="size-4" />
              </span>
              {contact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
