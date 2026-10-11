import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { products, slugify } from '../data/siteData'

// Renders digits in a formula as subscripts: C8H9NO2 → C₈H₉NO₂
const Formula = ({ value }: { value: string }) => (
  <>{value.split(/(\d+)/).map((part, i) => (i % 2 ? <sub key={i}>{part}</sub> : part))}</>
)

const ProductSearch = ({ onSelect }: { onSelect?: () => void }) => {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    return products.filter(p =>
      [p.name, p.cas, p.formula, p.category].some(f => f.toLowerCase().includes(q)),
    )
  }, [query])

  const open = focused && query.trim().length >= 2

  const select = (name: string) => {
    navigate(`/products/${slugify(name)}`)
    setQuery('')
    onSelect?.()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') setActive(i => Math.min(i + 1, results.length - 1))
    else if (e.key === 'ArrowUp') setActive(i => Math.max(i - 1, 0))
    else if (e.key === 'Enter' && results[active]) select(results[active].name)
    else if (e.key === 'Escape') setQuery('')
    else return
    e.preventDefault()
  }

  return (
    <div className="product-search" role="search">
      <i className="bi bi-search product-search__icon" />
      <input
        type="search"
        className="product-search__input"
        placeholder="Search by CAS, name, or formula..."
        aria-label="Search products"
        value={query}
        onChange={e => { setQuery(e.target.value); setActive(0) }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={onKeyDown}
      />

      {open && (
        <div className="product-search__results">
          {results.length ? (
            <>
              <div className="product-search__count">{results.length} product{results.length > 1 && 's'} found</div>
              <ul>
                {results.map((p, i) => (
                  <li
                    key={p.cas}
                    className={i === active ? 'is-active' : ''}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={e => { e.preventDefault(); select(p.name) }}
                  >
                    <span className="product-search__formula"><Formula value={p.formula} /></span>
                    <span className="flex-grow-1 min-w-0">
                      <strong className="d-block text-truncate">{p.name}</strong>
                      <small>CAS {p.cas}</small>
                    </span>
                    <span className="product-search__tag">{p.category}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="product-search__empty">
              <i className="bi bi-flask" /> No products match “{query}”. <br />
              <small>Try a CAS number like 103-90-2</small>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ProductSearch
