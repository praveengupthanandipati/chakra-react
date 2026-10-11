import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'
import ProductSearch from './ProductSearch'
import { certifications, contact, navItems } from '../data/siteData'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('offcanvas-open', menuOpen)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      {/* ─── Top bar ─── */}
      <div className="topbar d-none d-md-block">
        <div className="site-container">
          <div className="row align-items-center g-0">
            <div className="col-md-6 d-flex align-items-center gap-2">
              {certifications.map(c => (
                <span key={c} className="topbar__badge"><i className="bi bi-patch-check-fill" />{c}</span>
              ))}
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end gap-4">
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}><i className="bi bi-telephone" />{contact.phone}</a>
              <a href={`mailto:${contact.email}`}><i className="bi bi-envelope" />{contact.email}</a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main navbar ─── */}
      <nav className="mainnav">
        <div className="site-container">
          <div className="row align-items-center gx-3 flex-nowrap">
            <div className="col-auto">
              <Link to="/" className="mainnav__brand" aria-label="ChakraChem home">
                <img src={logo} alt="ChakraChem" />
              </Link>
            </div>

            <div className="col d-none d-md-block">
              <ProductSearch />
            </div>

            <div className="col-auto d-none d-xl-block">
              <ul className="mainnav__menu">
                {navItems.map(item => (
                  <li key={item.label} className="mainnav__item">
                    <NavLink to={item.to} className="mainnav__link">
                      {item.label}
                      {item.children && <i className="bi bi-chevron-down" />}
                    </NavLink>
                    {item.children?.[0].count !== undefined ? (
                      <div className="mainnav__dropdown mainnav__dropdown--mega">
                        <div className="mega__head">
                          <span>Our {item.children.length} chemical categories</span>
                          <Link to={item.to}>All Categories <i className="bi bi-arrow-right" /></Link>
                        </div>
                        <div className="row g-3">
                          {item.children.map(c => (
                            <div key={c.to} className="col-6">
                              <Link to={c.to} className="mega__card">
                                <span className="mega__top">
                                  <span className="mainnav__dropdown-icon"><i className={`bi bi-${c.icon}`} /></span>
                                  <span className="mega__count">{c.count}</span>
                                </span>
                                <strong>{c.label}</strong>
                                <small>{c.desc}</small>
                              </Link>
                            </div>
                          ))}
                        </div>
                        <div className="mega__foot">
                          <span><i className="bi bi-patch-check-fill" /> Direct manufacturer specifications &amp; ready stock</span>
                          <Link to={item.to}>
                            View All {item.children.reduce((sum, c) => sum + (c.count ?? 0), 0)} Materials Catalog <i className="bi bi-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    ) : item.children && (
                      <div className="mainnav__dropdown">
                        {item.children.map(c => (
                          <Link key={c.to} to={c.to} className="mainnav__dropdown-link">
                            <span className="mainnav__dropdown-icon"><i className={`bi bi-${c.icon}`} /></span>
                            <span>
                              <strong>{c.label}</strong>
                              <small>{c.desc}</small>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-auto ms-auto d-xl-none">
              <button className="mainnav__toggler" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Mobile off-canvas ─── */}
      <aside className={`offcanvas offcanvas-end site-offcanvas ${menuOpen ? 'show' : ''}`} aria-hidden={!menuOpen}>
        <div className="offcanvas-header">
          <img src={logo} alt="ChakraChem" height={42} />
          <button className="site-offcanvas__close" onClick={close} aria-label="Close menu">
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="offcanvas-body">
          <div className="d-md-none mb-4"><ProductSearch onSelect={close} /></div>

          <ul className="site-offcanvas__menu">
            {navItems.map(item => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className={expanded === item.label ? 'is-open' : ''}
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    >
                      {item.label}<i className="bi bi-chevron-down" />
                    </button>
                    <div className={`site-offcanvas__sub ${expanded === item.label ? 'is-open' : ''}`}>
                      <div>
                        {item.children.map(c => (
                          <Link key={c.to} to={c.to} onClick={close}>
                            <i className={`bi bi-${c.icon}`} />{c.label}
                            {c.count !== undefined && <span className="mega__count ms-auto">{c.count}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink to={item.to} onClick={close}>{item.label}</NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="site-offcanvas__contact">
            {certifications.map(c => (
              <span key={c} className="topbar__badge"><i className="bi bi-patch-check-fill" />{c}</span>
            ))}
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}><i className="bi bi-telephone" />{contact.phone}</a>
            <a href={`mailto:${contact.email}`}><i className="bi bi-envelope" />{contact.email}</a>
          </div>
        </div>
      </aside>
      {menuOpen && <div className="offcanvas-backdrop fade show" onClick={close} />}
    </header>
  )
}

export default Header
