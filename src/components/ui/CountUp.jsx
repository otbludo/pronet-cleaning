import { useEffect, useRef, useState } from 'react'

/**
 * Nombre qui compte de 0 jusqu'à `to` lorsqu'il entre à l'écran (une seule fois).
 * Si le visiteur a demandé à réduire les animations, la valeur finale s'affiche directement.
 *
 * @param {object} props
 * @param {number} props.to Valeur finale.
 * @param {number} [props.duration=1400] Durée du comptage en millisecondes.
 */
export default function CountUp({ to, duration = 1400 }) {
  const ref = useRef(null)
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [value, setValue] = useState(reduced ? to : 0)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    let frame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ralentit en fin de course (ease-out cubique)
        setValue(Math.round(to * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, duration, reduced])

  return <span ref={ref}>{value}</span>
}
