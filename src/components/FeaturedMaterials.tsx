import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredMaterials, slugify } from '../data/siteData'

const images = import.meta.glob<string>('../assets/products-samples/*.jpg', { import: 'default', eager: true })
const imageFor = (cas: string) => images[`../assets/products-samples/${cas}.jpg`]

const FeaturedMaterials = () => {
  const track = useRef<HTMLDivElement>(null)
  const paused = useRef(false)
  const [progress, setProgress] = useState(0)
  const [atStart, setAtStart] = useState(true)

  // Move by one card (card width + gap)
  const slide = (dir: 1 | -1) => {
    const el = track.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    const step = card.offsetWidth + parseFloat(getComputedStyle(el).columnGap)
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
    el.scrollTo({ left: dir === 1 && atEnd ? 0 : el.scrollLeft + dir * step, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = track.current
    if (!el) return
    setProgress((el.scrollLeft + el.clientWidth) / el.scrollWidth)
    setAtStart(el.scrollLeft < 4)
  }

  useEffect(() => {
    onScroll()
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => !paused.current && slide(1), 4500)
    return () => clearInterval(id)
  }, [])

  const hold = () => { paused.current = true }
  const release = () => { paused.current = false }

  return (
    <section className="featured">
      <div className="site-container">
        <div className="featured__head">
          <div>
            <span className="section-eyebrow">Direct Specifications · Immediate Inquiry</span>
            <h2 className="section-title">Featured ChakraChem materials with <em>direct CAS specifications</em></h2>
            <p className="section-lead">Verified chemical intermediates and active reagents with certified CAS purity and direct manufacturer specifications.</p>
          </div>
          <div className="featured__controls">
            <button onClick={() => slide(-1)} disabled={atStart} aria-label="Previous products"><i className="bi bi-arrow-left" /></button>
            <button onClick={() => slide(1)} aria-label="Next products"><i className="bi bi-arrow-right" /></button>
            <Link to="/products" className="featured__more">View More <i className="bi bi-arrow-right" /></Link>
          </div>
        </div>

        <div
          ref={track}
          className="featured__track"
          onScroll={onScroll}
          onMouseEnter={hold} onMouseLeave={release}
          onTouchStart={hold} onTouchEnd={release}
          onFocus={hold} onBlur={release}
          role="region" aria-label="Featured materials" tabIndex={0}
        >
          {featuredMaterials.map(m => (
            <Link key={m.cas} to={`/products/${slugify(m.name)}`} className="material-card">
              <div className="material-card__media">
                <img src={imageFor(m.cas)} alt={`${m.name} chemical structure`} loading="lazy" width={500} height={500} />
                <span className="material-card__cas">CAS: {m.cas}</span>
                <span className="material-card__purity">{m.purity}</span>
              </div>
              <div className="material-card__body">
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                <div className="material-card__foot">
                  <span>{m.category}</span>
                  <strong>Inquire Material <i className="bi bi-arrow-right" /></strong>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="featured__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  )
}

export default FeaturedMaterials
