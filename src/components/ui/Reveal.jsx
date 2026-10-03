import { useEffect, useRef, useState } from 'react'

// Fait apparaître son contenu quand il entre à l'écran (styles dans index.css, [data-reveal])
// type : up | left | right | zoom | rise | wipe
export default function Reveal({ as: Tag = 'div', type = 'up', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // Un élément masqué par son parent (rise, wipe) n'est jamais « visible » : on observe le parent
    const el = type === 'rise' || type === 'wipe' ? ref.current?.parentElement : ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [type])

  return (
    <Tag
      ref={ref}
      data-reveal={type}
      className={`${inView ? 'is-in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
