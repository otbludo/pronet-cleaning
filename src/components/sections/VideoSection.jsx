import { useState } from 'react'
import { images } from '../../data/images'
import { Play, Sparkle } from '../icons'
import Blob from '../ui/Blob'
import Reveal from '../ui/Reveal'

/** Bulles de savon autour de la vidéo : position, taille, durée et décalage du flottement. */
const bubbles = [
  { className: '-left-9 top-6 size-10 md:-left-24 md:size-16', float: '7s', delay: '0s' },
  { className: '-left-6 top-44 size-5 md:-left-12 md:size-7', float: '5s', delay: '-2s' },
  { className: '-left-10 bottom-40 size-7 md:-left-36 md:size-10', float: '6s', delay: '-4s' },
  { className: '-right-8 top-24 size-6 md:-right-20 md:size-9', float: '6.5s', delay: '-1s' },
  { className: '-right-10 bottom-24 size-12 md:-right-32 md:size-20', float: '8s', delay: '-3s' },
  { className: '-right-5 bottom-6 size-5 md:-right-10 md:size-6', float: '5.5s', delay: '-5s' },
]

/** Bulle de savon : cercle translucide avec un reflet. */
function Bubble({ className, float, delay }) {
  return (
    <span
      className={`animate-float absolute rounded-full border border-white bg-gradient-to-br from-white/80 via-brand-light/50 to-fuchsia-100/60 shadow-[inset_-3px_-5px_10px_rgb(255_255_255/0.9),0_6px_16px_rgb(0_0_0/0.06)] ${className}`}
      style={{ '--float': float, animationDelay: delay }}
    >
      <span className="absolute top-[18%] left-[22%] size-[22%] rounded-full bg-white" />
    </span>
  )
}

/**
 * Section « Votre satisfaction, ma priorité » : vidéo de témoignage client.
 * Une image d'aperçu avec bouton lecture est affichée ; la vidéo n'est chargée
 * qu'au clic, ce qui allège le chargement initial de la page.
 * Autour de la vidéo : carte inclinée, points, bulles, étoiles et note manuscrite,
 * pour habiller l'espace libre. Sur téléphone, la vidéo est un peu rétrécie
 * pour laisser de la place aux motifs, rapprochés et plus petits.
 */
export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="relative isolate mx-auto max-w-5xl px-4 pb-24 sm:px-6">
      <Blob tone="pink" className="top-1/3 -left-24 size-[24rem]" />
      <Blob tone="peach" className="-right-24 bottom-10 size-[24rem]" />
      <Reveal as="h2" className="text-center text-4xl leading-tight font-black uppercase sm:text-6xl">
        Votre <span className="accent">satisfaction</span>
        <br />
        ma priorité
      </Reveal>

      <div className="relative isolate mx-auto mt-16 w-[78%] max-w-sm md:mt-12 md:w-full">
        {/* Décor */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          {/* Carte rose inclinée qui dépasse derrière la vidéo */}
          <div className="absolute inset-0 translate-x-3 translate-y-2 rotate-6 md:translate-x-5 md:translate-y-3 rounded-3xl bg-brand-light" />
          {/* Trames de points */}
          <div className="absolute -top-6 -right-8 size-24 md:-top-8 md:-right-14 md:size-40 bg-[radial-gradient(currentColor_1.6px,transparent_1.6px)] bg-[length:16px_16px] text-brand/35" />
          <div className="absolute -bottom-6 -left-8 size-24 md:-bottom-8 md:-left-14 md:size-36 bg-[radial-gradient(currentColor_1.6px,transparent_1.6px)] bg-[length:16px_16px] text-fuchsia-300/60" />

          {bubbles.map((b) => (
            <Bubble key={b.className} {...b} />
          ))}

          {/* Étoiles scintillantes */}
          <Sparkle className="absolute top-2 -left-6 size-4 md:-left-8 md:size-5 animate-[spin_8s_linear_infinite] text-brand motion-reduce:animate-none" />
          <Sparkle className="absolute -right-7 bottom-1/3 size-3 md:-right-16 md:size-4 animate-[spin_6s_linear_infinite] text-fuchsia-400 motion-reduce:animate-none" />
          <Sparkle className="absolute -top-4 right-10 size-3 animate-[spin_7s_linear_infinite] text-brand/70 motion-reduce:animate-none" />

          {/* Note manuscrite : au-dessus de la vidéo sur téléphone… */}
          <p className="absolute -top-11 -left-4 -rotate-6 font-script text-2xl text-brand lg:hidden">
            Témoignage client&nbsp;!
          </p>

          {/* … et sur le côté, avec une flèche vers la vidéo, sur grand écran */}
          <div className="absolute top-8 -right-64 hidden w-48 -rotate-6 text-brand lg:block">
            <p className="font-script text-3xl leading-none">Témoignage client&nbsp;!</p>
            <svg viewBox="0 0 120 60" fill="none" className="mt-1 h-12 w-28">
              <path
                d="M100 6C90 34 60 50 12 46"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
              <path d="M22 36 10 46l13 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Vidéo verticale (format téléphone) : largeur limitée et centrée */}
        <Reveal type="zoom" className="relative overflow-hidden rounded-2xl bg-ink shadow-2xl shadow-brand/20">
          {playing ? (
            <video
              src={images.videoFile}
              poster={images.videoPoster}
              controls
              autoPlay
              playsInline
              className="aspect-[464/848] w-full object-cover"
            />
          ) : (
            // Photo d'aperçu : un clic lance la vidéo
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Lire la vidéo"
              className="group relative block w-full"
            >
              <img
                src={images.videoPoster}
                alt="Témoignage client en vidéo"
                className="aspect-[464/848] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink/10 transition group-hover:bg-ink/25" />
              <span className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center sm:size-24">
                <span className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2s]" />
                <span className="relative grid size-full place-items-center rounded-full bg-white text-brand shadow-xl transition group-hover:scale-110">
                  <Play className="ml-1 size-8 sm:size-10" />
                </span>
              </span>
              <span className="absolute inset-x-4 bottom-4 rounded-full bg-white/90 px-4 py-2 text-center font-script text-xl text-brand">
                Propreté · Confiance · Qualité
              </span>
            </button>
          )}
        </Reveal>
      </div>
    </section>
  )
}
