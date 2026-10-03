// Photos Unsplash de remplacement : remplace ces URLs par tes propres visuels
// (ex. import hero from './assets/hero.png') quand tu les auras.
const unsplash = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  hero: '/portrait-buste.png',
  commercial: '/pulverise.jpeg',
  regular: '/menagevitre.jpeg',
  kitchen: unsplash('1556911220-bff31c812dba', 1000),
  choice1: '/aspire.jpeg',
  choice2: unsplash('1527515637462-cff94eecc1ac', 500),
  video: unsplash('1558317374-067fb5f30001', 1600),
  // Vidéo lue au clic sur la photo ci-dessus : dépose le fichier dans public/
  videoFile: '/video.mp4',
  footer: '/cleaningoutil.png',
  avatar1: unsplash('1494790108377-be9c29b29330', 200),
  avatar2: unsplash('1507003211169-0a1dd7228f2d', 200),
  avatar3: unsplash('1438761681033-6461ffad8d80', 200),
}
