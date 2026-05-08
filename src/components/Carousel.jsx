import { useState, useEffect, useRef } from 'react'

const INTERVAL = 4000

const Carousel = ({ images, alt }) => {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const next = () => setCurrent(i => (i + 1) % images.length)
  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, INTERVAL)
  }

  useEffect(() => {
    if (images.length <= 1) return
    timerRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [images.length])

  const handlePrev = () => { prev(); resetTimer() }
  const handleNext = () => { next(); resetTimer() }
  const handleDot  = (i) => { setCurrent(i); resetTimer() }

  return (
    <div className="carousel">
      <img
        className="carousel-image"
        src={images[current]}
        alt={`${alt} — photo ${current + 1} of ${images.length}`}
      />
      {images.length > 1 && (
        <>
          <button className="carousel-btn carousel-btn--prev" onClick={handlePrev} aria-label="Previous photo">‹</button>
          <button className="carousel-btn carousel-btn--next" onClick={handleNext} aria-label="Next photo">›</button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
                onClick={() => handleDot(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
