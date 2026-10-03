const tones = {
  pink: 'bg-brand/15',
  light: 'bg-brand-light',
  peach: 'bg-orange-100/70',
  lilac: 'bg-fuchsia-100/70',
}

// Tache de couleur floue en arrière-plan : la section parente doit être `relative isolate`
export default function Blob({ tone = 'pink', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-drift pointer-events-none absolute -z-10 rounded-full blur-3xl ${tones[tone]} ${className}`}
      // Durée différente selon la tache pour qu'elles ne bougent pas en même temps
      style={{ '--drift': `${14 + (className.length % 9)}s` }}
    />
  )
}
