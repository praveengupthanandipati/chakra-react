import { Link } from 'react-router-dom'
import { navItems } from '../data/siteData'
import { useInView } from '../hooks/useInView'

// Inline SVG markup (needed for the stroke-offset animation), keyed by file name
const icons = import.meta.glob<string>('../assets/svg/*.svg', { query: '?raw', import: 'default', eager: true })
const iconFor = (to: string) => icons[`../assets/svg/${to.split('/').pop()}.svg`] ?? ''

const categories = navItems.find(n => n.label === 'Products')?.children ?? []

const Categories = () => {
  // Reveal the cards once the section scrolls into view
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section ref={ref} className={`categories ${visible ? 'is-visible' : ''}`}>
      <div className="site-container">
        <div className="categories__head">
          <span className="section-eyebrow">Our Products Category</span>
          <h2 className="section-title">Chemistry for every <em>stage</em> of your pipeline</h2>
          <p className="section-lead">Explore the complete chemical catalog across all {categories.length} official ChakraChem categories.</p>
        </div>

        <div className="row g-4">
          {categories.map((c, i) => (
            <div key={c.to} className="col-sm-6 col-xl-3">
              <Link to={c.to} className="cat-card" style={{ '--i': i } as React.CSSProperties}>
                <div className="cat-card__visual">
                  <span className="cat-card__ring" />
                  <span className="cat-card__icon" dangerouslySetInnerHTML={{ __html: iconFor(c.to) }} />
                  <span className="cat-card__count">{c.count} products</span>
                </div>
                <div className="cat-card__body">
                  <h3>{c.label}</h3>
                  <p>{c.desc}</p>
                  <span className="cat-card__more">Explore range <i className="bi bi-arrow-right" /></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
