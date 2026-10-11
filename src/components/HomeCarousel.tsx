import { useEffect, useState } from 'react'
import sliderBg from '../assets/sliderbg-home.jpg'
import { navItems } from '../data/siteData'

const categories = navItems.find(n => n.label === 'Products')?.children ?? []
const totalMaterials = categories.reduce((sum, c) => sum + (c.count ?? 0), 0)

// Add more objects here to turn the banner into a rotating carousel
const slides = [
  {
    bg: sliderBg,
    eyebrow: 'B2B Chemical Procurement',
    lines: ['Source chemicals with', <><em>specifications</em> first.</>],
    text: 'Search verified materials, compare grades and packaging, then submit one structured request for technical and commercial review.',
  },
]

const stats = [
  { value: `${totalMaterials}+`, label: 'Verified materials' },
  { value: categories.length, label: 'Chemical categories' },
  { value: '40+', label: 'Countries served' },
]

const HomeCarousel = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return
    const id = setInterval(() => setActive(i => (i + 1) % slides.length), 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <div key={i} className={`hero__slide ${i === active ? 'is-active' : ''}`} aria-hidden={i !== active}>
          <img className="hero__bg" src={s.bg} alt="" fetchPriority={i ? 'low' : 'high'} />
          <div className="hero__overlay" />

          {/* key on `active` replays the entrance animations on every slide change */}
          <div className="site-container hero__content" key={`${i}-${i === active}`}>
            <div className="row">
              <div className="col-lg-9 col-xl-7">
                <span className="hero__eyebrow anim" style={{ '--d': '0.1s' } as React.CSSProperties}>
                  <span className="hero__pulse" />{s.eyebrow}
                </span>

                <h1 className="hero__title">
                  {s.lines.map((line, n) => (
                    <span key={n} className="hero__line">
                      <span style={{ '--d': `${0.25 + n * 0.15}s` } as React.CSSProperties}>{line}</span>
                    </span>
                  ))}
                </h1>

                <p className="hero__text anim" style={{ '--d': '0.65s' } as React.CSSProperties}>{s.text}</p>

                <ul className="hero__stats anim" style={{ '--d': '0.8s' } as React.CSSProperties}>
                  {stats.map(st => (
                    <li key={st.label}><strong>{st.value}</strong><span>{st.label}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <div className="hero__dots">
          {slides.map((_, i) => (
            <button key={i} className={i === active ? 'is-active' : ''} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      )}

      <span className="hero__scroll" aria-hidden="true"><span /></span>
    </section>
  )
}

export default HomeCarousel
