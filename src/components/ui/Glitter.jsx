import { Sparkle } from '../icons'

// Générateur pseudo-aléatoire fixe : les paillettes sont toujours au même endroit
function seeded(seed) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

const rand = seeded(42)
const COLORS = ['#e2457a', '#f39ab8', '#f7c6d6', '#d4af37', '#ffffff']

const sparkles = Array.from({ length: 70 }, (_, i) => ({
  left: rand() * 100,
  top: rand() * 100,
  size: 2 + rand() * 4,
  color: COLORS[Math.floor(rand() * COLORS.length)],
  delay: rand() * 3,
  duration: 1.8 + rand() * 2.4,
  star: i % 7 === 0,
}))

// Fond pailleté : dégradé nacré, paillettes qui scintillent et reflet lumineux
export default function Glitter() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#fde7ef_0%,transparent_45%),radial-gradient(circle_at_90%_60%,#fbd5e2_0%,transparent_50%),radial-gradient(circle_at_10%_95%,#fdeef3_0%,transparent_45%)]" />

      {sparkles.map((s, i) =>
        s.star ? (
          <Sparkle
            key={i}
            className="animate-twinkle absolute"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size * 3,
              height: s.size * 3,
              color: s.color === '#ffffff' ? '#f39ab8' : s.color,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ) : (
          <span
            key={i}
            className="animate-twinkle absolute rounded-full"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              background: s.color,
              boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ),
      )}

      <div className="animate-shimmer absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  )
}
