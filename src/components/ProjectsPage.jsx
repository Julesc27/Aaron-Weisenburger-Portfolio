import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import TagList from './TagList.jsx'
import { allProjects } from '../data/projects.js'

const categories = ['All', 'Mechanical', 'Aerospace']

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [glowHidden, setGlowHidden] = useState(false)
  const bottomSentinelRef = useRef(null)

  const visibleProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory)

  // The glow is `position: fixed` (see index.css) so it stays visible for
  // however long the project list scrolls. A sentinel just past the end
  // of the list lets us fade the glow out slightly before the footer
  // scrolls into view, instead of letting it bleed on top of the footer.
  useEffect(() => {
    const node = bottomSentinelRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(([entry]) => setGlowHidden(entry.isIntersecting), {
      rootMargin: '0px 0px 150px 0px',
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="projects-page">
      <div
        className={`projects-page-glow${glowHidden ? ' projects-page-glow--hidden' : ''}`}
        aria-hidden="true"
      >
        <img src="/glow-ellipse-7.svg" alt="" />
      </div>
      <div className="projects-page-inner">
        <div className="projects-page-header">
          <h1 className="section-heading section-heading--light">Featured Projects</h1>
          <div className="filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-pill${category === activeCategory ? ' filter-pill--active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-list">
          {visibleProjects.map((project) => (
            <Link to={`/projects/${project.id}`} className="feature-card" key={project.id}>
              <div className="feature-card-image">picture</div>
              <div className="feature-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.results && (
                  <p className="feature-results">
                    <span className="results-divider"></span>
                    <span>
                      <strong>Results</strong>: {project.results}
                    </span>
                  </p>
                )}
                <TagList tags={project.tags} />
              </div>
            </Link>
          ))}
        </div>
        <div ref={bottomSentinelRef} aria-hidden="true" style={{ height: 1 }} />
      </div>
    </main>
  )
}
