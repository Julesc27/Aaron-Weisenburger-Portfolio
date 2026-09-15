import { useState } from 'react'

// A light, patterned card that steps through a set of images one at a
// time — used in project Results sections that have several photos or
// drawings worth showing individually rather than all at once.
export default function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  const current = images[index]
  const hasMultiple = images.length > 1

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="image-carousel">
      <div className="image-carousel-frame">
        <img className="image-carousel-image" src={current.src} alt={current.alt} />
        {hasMultiple && (
          <>
            <button
              type="button"
              className="image-carousel-nav image-carousel-nav--prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M15 4L7 12L15 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="image-carousel-nav image-carousel-nav--next"
              onClick={goNext}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M9 4L17 12L9 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>
      {current.alt && <p className="image-carousel-caption">{current.alt}</p>}
      {hasMultiple && (
        <div className="image-carousel-dots" role="tablist" aria-label="Image carousel slides">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              className={`image-carousel-dot${i === index ? ' image-carousel-dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1} of ${images.length}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
