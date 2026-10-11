import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { aboutStats, trustPoints } from '../data/siteData'
import { useInView } from '../hooks/useInView'

// Counts from 0 to `to` (ease-out) once `start` is true
const CountUp = ({ to, start }: { to: number; start: boolean }) => {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1800, 1)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, start])

  return <>{n}</>
}

const AboutSection = () => {
  const [ref, visible] = useInView<HTMLElement>(0.2)

  return (
    <section ref={ref} className={`about ${visible ? 'is-visible' : ''}`}>
      {/* decorative layers */}
      <span className="about__orbit about__orbit--1" />
      <span className="about__orbit about__orbit--2" />
      <i className="bi bi-globe-americas about__globe" aria-hidden="true" />

      <div className="site-container position-relative">
        <div className="row align-items-end g-4 mb-5">
          <div className="col-lg-8">
            <span className="section-eyebrow">Scale · Experience · Global Credibility</span>
            <h2 className="section-title">Proven track record across <em>global geographies</em></h2>
            <p className="section-lead">
              Backed by world-class laboratory infrastructure, certified chemists, and trusted manufacturing
              execution across regulated chemical and pharmaceutical programs worldwide.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <Link to="/company/about" className="about__link">
              About Our Infrastructure <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>

        <div className="row g-3 g-xl-4 about__stats">
          {aboutStats.map((s, i) => (
            <div key={s.label} className="col-sm-6 col-lg-4 col-xl">
              <div className="stat-card" style={{ '--i': i } as React.CSSProperties}>
                <div className="stat-card__top">
                  <span className="stat-card__icon"><i className={`bi bi-${s.icon}`} /></span>
                  <span className="stat-card__tag">{s.tag}</span>
                </div>
                <div className="stat-card__value"><CountUp to={s.value} start={visible} /><span>+</span></div>
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <ul className="trust-strip">
          {trustPoints.map(t => (
            <li key={t.title}>
              <span className="trust-strip__icon"><i className={`bi bi-${t.icon}`} /></span>
              <span>
                <strong>{t.title}</strong>
                <small>{t.text}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection
