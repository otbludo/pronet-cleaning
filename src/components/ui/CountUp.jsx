import { useEffect, useRef, useState } from 'react'

// Compte de 0 jusqu'à `to` quand le nombre entre à l'écran
export default function CountUp({ to, duration = 1400 }) {
  const ref = useRef(null)
  // Sans animation (préférence « réduire les animations »), on affiche directement la valeur finale
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
        const t = Math.min((now - start) / duration, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))))
        if (t < 1) frame = requestAnimationFrame(tick)
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
