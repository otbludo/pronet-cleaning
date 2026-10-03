import { useEffect, useRef, useState } from 'react'

/**
 * Fait apparaître son contenu une seule fois, quand il entre à l'écran.
 *
 * Le composant pose `data-reveal="<type>"` sur l'élément, puis ajoute la classe
 * `is-in` lorsqu'il devient visible : la transition elle-même est définie en CSS
 * (styles/index.css, section « Apparitions au défilement »).
 *
 * @param {object} props
 * @param {string|React.ElementType} [props.as='div'] Balise ou composant rendu (h2, span, img…).
 * @param {'up'|'left'|'right'|'zoom'|'rise'|'wipe'} [props.type='up'] Effet d'apparition.
 * @param {number} [props.delay=0] Délai en millisecondes, pour enchaîner plusieurs éléments en cascade.
 *
 * Les autres props (className, style, src, aria-*…) sont transmises à l'élément rendu.
 *
 * @example
 * <Reveal as="h2" type="up" delay={150}>Titre</Reveal>
 */
export default function Reveal({ as: Tag = 'div', type = 'up', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    // Les effets « rise » et « wipe » partent d'un état masqué par leur parent :
    // l'élément n'est donc jamais détecté comme visible, on observe le parent à sa place.
    const target = type === 'rise' || type === 'wipe' ? ref.current?.parentElement : ref.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // l'animation ne se joue qu'une fois
        }
      },
      // Déclenche quand 15 % de l'élément est visible, un peu avant le bas de l'écran
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(target)
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
