import { useCallback, useRef, useState } from 'react'
import { Check, SwashDown } from '../icons'
import useClickOutside from './useClickOutside'

export default function Select({ value, onChange, options, placeholder, label }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const close = useCallback(() => setOpen(false), [])
  useClickOutside(ref, open, close)

  const choose = (opt) => {
    onChange(opt)
    setOpen(false)
  }

  const onKeyDown = (e) => {
    if (!open && ['ArrowDown', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      setActive(Math.max(0, options.indexOf(value)))
      setOpen(true)
    } else if (open && e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, options.length - 1))
    } else if (open && e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (open && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      choose(options[active])
    }
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between gap-3 rounded-full bg-neutral-100 py-2 pr-2 pl-6 text-left text-xs outline-none transition focus-visible:ring-2 focus-visible:ring-brand ${
          open ? 'ring-2 ring-brand' : ''
        } ${value ? 'text-ink' : 'text-neutral-500'}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm">
          <SwashDown className={`size-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute top-full left-0 z-30 mt-2 w-full max-h-72 min-w-64 overflow-y-auto rounded-2xl border border-neutral-100 bg-white p-2 shadow-xl shadow-neutral-900/10"
        >
          {options.map((opt, i) => {
            const selected = opt === value
            return (
              <li
                key={opt}
                role="option"
                aria-selected={selected}
                onPointerEnter={() => setActive(i)}
                onClick={() => choose(opt)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  i === active ? 'bg-brand-light text-brand-dark' : 'text-neutral-700'
                } ${selected ? 'font-bold' : ''}`}
              >
                {opt}
                {selected && <Check className="size-3.5 shrink-0 text-brand" />}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
