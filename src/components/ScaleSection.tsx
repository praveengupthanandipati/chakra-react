import { scalePoints, scaleSteps } from '../data/siteData'
import { useInView } from '../hooks/useInView'

const ScaleSection = () => {
  const [ref, visible] = useInView<HTMLElement>(0.25)

  return (
    <section ref={ref} className={`scale ${visible ? 'is-visible' : ''}`}>
      <div className="site-container">
        <div className="row g-5 align-items-center">
          {/* ─── Visual: rising scale ladder ─── */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="scale-visual">
              <div className="scale-visual__head">
                <span>Production Scale</span>
                <strong>mg <i className="bi bi-arrow-right" /> MT</strong>
              </div>

              <div className="scale-visual__bars">
                {scaleSteps.map((s, i) => (
                  <div key={s.unit} className="scale-visual__step" style={{ '--i': i } as React.CSSProperties}>
                    <span className="scale-visual__icon"><i className={`bi bi-${s.icon}`} /></span>
                    <div className="scale-visual__bar"><strong>{s.unit}</strong></div>
                    <small>{s.label}</small>
                  </div>
                ))}
              </div>

              <div className="scale-visual__chips">
                <span><i className="bi bi-award" /> ISO 9001</span>
                <span><i className="bi bi-patch-check" /> GMP</span>
                <span><i className="bi bi-link-45deg" /> Peptides mg → multi-kg</span>
              </div>
            </div>
          </div>

          {/* ─── Content ─── */}
          <div className="col-lg-6 order-1 order-lg-2">
            <span className="section-eyebrow">Scalable Manufacturing</span>
            <h2 className="section-title">From <em>Milligrams</em> to Metric Tons</h2>

            <ul className="scale__points">
              {scalePoints.map((p, i) => (
                <li key={p.icon} style={{ '--i': i } as React.CSSProperties}>
                  <span className="scale__point-icon"><i className={`bi bi-${p.icon}`} /></span>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScaleSection
