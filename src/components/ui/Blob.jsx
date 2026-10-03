/** Teintes disponibles pour les taches de fond. */
const tones = {
  pink: 'bg-brand/15',
  light: 'bg-brand-light',
  peach: 'bg-orange-100/70',
  lilac: 'bg-fuchsia-100/70',
}

/**
 * Tache de couleur floue et animée, posée en arrière-plan d'une section.
 *
 * La section parente doit avoir les classes `relative isolate` : la tache passe
 * ainsi derrière le contenu tout en restant au-dessus du fond de la section.
 *
 * @param {object} props
 * @param {keyof tones} [props.tone='pink'] Teinte de la tache.
 * @param {string} props.className Position et taille (ex. "top-10 -left-40 size-[28rem]").
 */
export default function Blob({ tone = 'pink', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-drift pointer-events-none absolute -z-10 rounded-full blur-3xl ${tones[tone]} ${className}`}
      // Durée de dérive différente d'une tache à l'autre, pour éviter un mouvement synchronisé
      style={{ '--drift': `${14 + (className.length % 9)}s` }}
    />
  )
}
