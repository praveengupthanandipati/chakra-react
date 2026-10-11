import { useState } from 'react'
import { countries, navItems, partnerChips, partnerFeatures } from '../data/siteData'
import { useInView } from '../hooks/useInView'

// "Looking for" options = product categories + capabilities from the menu
const lookingFor = [
  ...['Products', 'Capabilities'].flatMap(l => navItems.find(n => n.label === l)?.children?.map(c => c.label) ?? []),
  'Other',
]

const PartnerSection = () => {
  const [ref, visible] = useInView<HTMLElement>()
  const [sentTo, setSentTo] = useState<string | null>(null)

  // Native HTML validation runs first; this only fires for a valid form.
  // TODO: send `data` to the inquiry API / email service.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setSentTo(String(data.name).split(' ')[0])
    e.currentTarget.reset()
  }

  return (
    <section ref={ref} className={`partner ${visible ? 'is-visible' : ''}`}>
      <div className="site-container position-relative">
        <div className="row g-5">
          {/* ─── Content ─── */}
          <div className="col-lg-6 col-xl-7">
            <span className="section-eyebrow">Partner with ChakraChem · Direct Collaboration</span>
            <h2 className="section-title">Accelerate your chemical &amp; <em>pharmaceutical innovation</em></h2>
            <p className="section-lead mb-4">
              From research-grade building blocks and custom synthesis to audited commercial manufacturing, partner
              directly with certified chemists, dedicated pilot suites, and resilient global supply chains.
            </p>

            <ul className="partner__features">
              {partnerFeatures.map((f, i) => (
                <li key={f.title} style={{ '--i': i } as React.CSSProperties}>
                  <span className="partner__icon"><i className={`bi bi-${f.icon}`} /></span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="partner__chips">
              {partnerChips.map(c => (
                <span key={c.label}><i className={`bi bi-${c.icon}`} />{c.label}</span>
              ))}
            </div>
          </div>

          {/* ─── Form ─── */}
          <div className="col-lg-6 col-xl-5">
            <div className="inquiry-card">
              {sentTo ? (
                <div className="inquiry-card__success">
                  <span><i className="bi bi-check2-circle" /></span>
                  <h3>Thank you, {sentTo}!</h3>
                  <p>Your inquiry has reached our technical sourcing team. Expect a response within 24 hours.</p>
                  <button className="inquiry-card__submit" onClick={() => setSentTo(null)}>Send another inquiry</button>
                </div>
              ) : (
                <>
                  <span className="inquiry-card__badge">Technical &amp; Commercial Inquiry</span>
                  <h3 className="inquiry-card__title">Partner With Us</h3>
                  <p className="inquiry-card__lead">Speak directly with our technical sourcing specialists and synthesis team.</p>

                  <form className="row g-3" onSubmit={onSubmit}>
                    <div className="col-sm-6">
                      <label htmlFor="pf-name">Name *</label>
                      <input id="pf-name" name="name" required placeholder="Enter your full name" autoComplete="name" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="pf-email">Work Email *</label>
                      <input id="pf-email" name="email" type="email" required placeholder="procurement@company.com" autoComplete="email" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="pf-country">Country *</label>
                      <select id="pf-country" name="country" required defaultValue="India" autoComplete="country-name">
                        {countries.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="pf-company">Company Name *</label>
                      <input id="pf-company" name="company" required placeholder="Enterprise / institution" autoComplete="organization" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="pf-phone">Phone Number *</label>
                      <input id="pf-phone" name="phone" type="tel" required pattern="[+0-9 ()\-]{7,20}" placeholder="+91 98765 43210 / +1 (555) 000-0000" autoComplete="tel" />
                    </div>
                    <div className="col-12">
                      <label htmlFor="pf-looking">Looking For *</label>
                      <select id="pf-looking" name="lookingFor" required>
                        {lookingFor.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="pf-message">Message / Specifications *</label>
                      <textarea id="pf-message" name="message" rows={4} required
                        placeholder="Specify material name, CAS number, required assay purity, quantity (g/kg/MT), delivery destination, or technical questions..." />
                    </div>
                    <div className="col-12">
                      <label className="inquiry-card__consent">
                        <input type="checkbox" name="consent" required defaultChecked />
                        <span>I hereby agree to ChakraChem's Terms of Service and Privacy Policy for official technical communications.</span>
                      </label>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="inquiry-card__submit">
                        Submit Technical Inquiry <i className="bi bi-send-fill" />
                      </button>
                      <p className="inquiry-card__note"><i className="bi bi-lock-fill" /> Confidential: direct NDA protection &amp; fast 24h commercial review</p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
