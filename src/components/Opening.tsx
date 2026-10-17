import { useEffect, useState } from 'react'
import './Opening.css'

const HOLD_MS = 1600
const FADE_MS = 700

export default function Opening() {
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (done) return
    document.body.style.overflow = 'hidden'
    const hold = setTimeout(() => setLeaving(true), HOLD_MS)
    return () => {
      clearTimeout(hold)
      document.body.style.overflow = ''
    }
  }, [done])

  useEffect(() => {
    if (!leaving) return
    const timer = setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
    }, FADE_MS)
    return () => clearTimeout(timer)
  }, [leaving])

  if (done) return null

  return (
    <div
      className={`opening${leaving ? ' is-leaving' : ''}`}
      aria-hidden="true"
      onClick={() => setLeaving(true)}
    >
      <img
        className="opening__logo"
        src="ogp-transparent.png"
        alt=""
        width={690}
        height={362}
        fetchPriority="high"
      />
    </div>
  )
}
