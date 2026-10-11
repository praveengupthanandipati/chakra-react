import { useEffect, useRef, useState } from 'react'

// Returns a ref and `true` once that element has scrolled into view (fires once)
export const useInView = <T extends HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView] as const
}
