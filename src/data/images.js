/**
 * Visuels du site.
 *
 * Les chemins commençant par « / » pointent vers le dossier `public/`.
 * Les autres sont des photos Unsplash provisoires, à remplacer par vos propres
 * photos : déposez le fichier dans `public/` puis indiquez son chemin ici.
 */

/** Construit l'URL d'une photo Unsplash recadrée et optimisée à la largeur voulue. */
const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export const images = {
  /** Portrait détouré (fond transparent) affiché dans le Hero. */
  hero: '/portrait-buste.png',

  // Section « Mes prestations »
  serviceOffice: '/pulverise.jpeg',
  serviceHome: '/menagevitre.jpeg',
  serviceRenovation: unsplash('1556911220-bff31c812dba', 1000),

  // Section « Pourquoi me choisir ? »
  whyServices: '/aspire.jpeg',
  whyContact: unsplash('1527515637462-cff94eecc1ac', 500),

  // Section vidéo
  /** Image d'aperçu affichée avant la lecture. */
  videoPoster: unsplash('1558317374-067fb5f30001', 1600),
  /** Fichier vidéo lu au clic (à déposer dans `public/`, format MP4 conseillé). */
  videoFile: '/video.mp4',
}
