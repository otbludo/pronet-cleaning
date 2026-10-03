import { useState } from 'react'
import { images } from '../images'
import { Play } from './icons'
import Blob from './ui/Blob'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="relative isolate mx-auto max-w-5xl px-4 pb-24 sm:px-6">
      <Blob tone="pink" className="top-1/3 -left-24 size-[24rem]" />
      <Blob tone="peach" className="-right-24 bottom-10 size-[24rem]" />
      <h2 className="text-center text-4xl leading-tight font-black uppercase sm:text-6xl">
        Votre <span className="accent">satisfaction</span>
        <br />
        ma priorité
      </h2>

      <div className="relative mt-12 overflow-hidden rounded-2xl bg-ink">
        {playing ? (
          <video
            src={images.videoFile}
            poster={images.video}
            controls
            autoPlay
            playsInline
            className="aspect-video w-full object-cover"
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
              src={images.video}
              alt="Salon propre et rangé"
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/10 transition group-hover:bg-ink/25" />
            <span className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center sm:size-24">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2s]" />
              <span className="relative grid size-full place-items-center rounded-full bg-white text-brand shadow-xl transition group-hover:scale-110">
                <Play className="ml-1 size-8 sm:size-10" />
              </span>
            </span>
            <span className="absolute right-6 bottom-6 rounded-full bg-white/90 px-5 py-2 font-script text-2xl text-brand">
              Propreté · Confiance · Qualité
            </span>
          </button>
        )}
      </div>
    </section>
  )
}
