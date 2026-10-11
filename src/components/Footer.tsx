import { Link } from 'react-router-dom'
import logo from '../assets/svg/logo.svg'
import { certifications, contact, footerCompanyLinks, footerLegalLinks, navItems } from '../data/siteData'

const categories = navItems.find(n => n.label === 'Products')?.children ?? []
const totalMaterials = categories.reduce((sum, c) => sum + (c.count ?? 0), 0)

const contactCards = [
  { icon: 'telephone-fill', label: 'Telephone / Inquiries', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: 'envelope-fill', label: 'Official Inquiry Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'geo-alt-fill', label: 'Manufacturing Facility', value: contact.address, href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}` },
]

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container position-relative">
      <div className="row g-5">
        {/* ─── Brand ─── */}
        <div className="col-lg-12 col-xl-3">
          <Link to="/" className="site-footer__logo" aria-label="ChakraChem home">
            <img src={logo} alt="ChakraChem" />
          </Link>
          <p className="site-footer__about">
            Leading manufacturer of pharmaceutical intermediates, specialty chemicals, fine building blocks,
            and natural extracts. Engineered for global regulatory compliance.
          </p>
          <div className="site-footer__badges">
            {certifications.map(c => (
              <span key={c}><i className="bi bi-check-circle-fill" />{c.replace(' Facility', '')}</span>
            ))}
          </div>
        </div>

        {/* ─── Products ─── */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <h4 className="site-footer__heading">Products</h4>
          <ul className="site-footer__links">
            {categories.map(c => <li key={c.to}><Link to={c.to}><i className="bi bi-chevron-right" />{c.label}</Link></li>)}
            <li>
              <Link to="/products"><i className="bi bi-chevron-right" />All Products Catalog <span className="site-footer__count">{totalMaterials}</span></Link>
            </li>
          </ul>
        </div>

        {/* ─── Company ─── */}
        <div className="col-sm-6 col-lg-4 col-xl-2">
          <h4 className="site-footer__heading">Company</h4>
          <ul className="site-footer__links">
            {footerCompanyLinks.map(l => <li key={l.to}><Link to={l.to}><i className="bi bi-chevron-right" />{l.label}</Link></li>)}
          </ul>
        </div>

        {/* ─── Contact ─── */}
        <div className="col-lg-4 col-xl-4">
          <h4 className="site-footer__heading">Contact</h4>
          <div className="site-footer__contact">
            {contactCards.map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="site-footer__icon"><i className={`bi bi-${c.icon}`} /></span>
                <span>
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </span>
              </a>
            ))}
          </div>
          <Link to="/contact" className="site-footer__cta">
            Request Commercial Quote <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>

      {/* ─── Bottom bar ─── */}
      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} ChakraChem Lifesciences. All rights reserved. Professional Chemical Procurement.</p>
        <nav>
          {footerLegalLinks.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <i className="bi bi-arrow-up" /> Top
          </button>
        </nav>
      </div>
    </div>

    <span className="site-footer__watermark" aria-hidden="true">ChakraChem</span>
  </footer>
)

export default Footer
