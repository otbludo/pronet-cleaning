import { useCallback, useRef, useState } from 'react'
import { CalendarHeart, SwashDown } from '../icons'
import useClickOutside from './useClickOutside'

const DAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate())
const sameDay = (a, b) => a && b && a.toDateString() === b.toDateString()
const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6

// Grille du mois, semaine commençant le lundi
function monthGrid(year, month) {
  const first = new Date(year, month, 1)
  const offset = (first.getDay() + 6) % 7
  return Array.from({ length: 42 }, (_, i) => new Date(year, month, i - offset + 1))
}

// Calendrier sur mesure : dates passées et week-ends désactivés (service du lundi au vendredi)
export default function DatePicker({ value, onChange, placeholder, label }) {
  const today = startOfDay(new Date())
  const [open, setOpen] = useState(false)
  const [view, setView] = useState(() => {
    const d = value ?? today
    return { year: d.getFullYear(), month: d.getMonth() }
  })
  const ref = useRef(null)
  const close = useCallback(() => setOpen(false), [])
  useClickOutside(ref, open, close)

  const shift = (step) =>
    setView(({ year, month }) => {
      const d = new Date(year, month + step, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    })

  const canGoBack =
    view.year > today.getFullYear() ||
    (view.year === today.getFullYear() && view.month > today.getMonth())

  const title = new Date(view.year, view.month).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between gap-3 rounded-full bg-neutral-100 py-2 pr-2 pl-6 text-left text-xs outline-none transition focus-visible:ring-2 focus-visible:ring-brand ${
          open ? 'ring-2 ring-brand' : ''
        } ${value ? 'text-ink' : 'text-neutral-500'}`}
      >
        <span className="truncate">
          {value
            ? value.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
            : placeholder}
        </span>
        <span
          className={`grid size-8 shrink-0 place-items-center rounded-full shadow-sm transition-colors ${
            open ? 'bg-brand text-white' : 'bg-white text-brand'
          }`}
        >
          <CalendarHeart className="size-[1.1rem]" />
        </span>
      </button>

      {open && (
        <div className="absolute top-full right-0 z-30 mt-2 w-72 rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl shadow-neutral-900/10 md:left-0">
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="Mois précédent"
              disabled={!canGoBack}
              onClick={() => shift(-1)}
              className="grid size-8 place-items-center rounded-full transition hover:bg-brand-light hover:text-brand disabled:pointer-events-none disabled:opacity-30"
            >
              <SwashDown className="size-5 rotate-90" />
            </button>
            <span className="text-sm font-bold capitalize">{title}</span>
            <button
              type="button"
              aria-label="Mois suivant"
              onClick={() => shift(1)}
              className="grid size-8 place-items-center rounded-full transition hover:bg-brand-light hover:text-brand"
            >
              <SwashDown className="size-5 -rotate-90" />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center">
            {DAYS.map((d, i) => (
              <span key={i} className="py-1 text-[0.65rem] font-bold text-neutral-400 uppercase">
                {d}
              </span>
            ))}
            {monthGrid(view.year, view.month).map((d) => {
              const outside = d.getMonth() !== view.month
              const disabled = d < today || isWeekend(d)
              const selected = sameDay(d, value)
              return (
                <button
                  key={d.toISOString()}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    onChange(d)
                    setOpen(false)
                  }}
                  className={`grid aspect-square place-items-center rounded-full text-xs transition ${
                    selected
                      ? 'bg-brand font-bold text-white'
                      : disabled
                        ? 'text-neutral-300'
                        : 'hover:bg-brand-light hover:text-brand-dark'
                  } ${outside && !selected ? 'opacity-40' : ''} ${
                    sameDay(d, today) && !selected ? 'ring-1 ring-brand' : ''
                  }`}
                >
                  {d.getDate()}
                </button>
              )
            })}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3 text-xs">
            <span className="text-neutral-400">Du lundi au vendredi</span>
            {value && (
              <button
                type="button"
                onClick={() => {
                  onChange(null)
                  setOpen(false)
                }}
                className="font-bold text-brand hover:text-brand-dark"
              >
                Effacer
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
