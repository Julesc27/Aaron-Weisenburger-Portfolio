import { useState } from 'react'
import { Link } from 'react-router-dom'
import TagList from './TagList.jsx'
import { allProjects } from '../data/projects.js'

const categories = ['All', 'Mechanical', 'Aerospace']

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory)

  return (
    <main className="projects-page">
      <div className="projects-page-glow" aria-hidden="true">
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
                <p className="feature-results">
                  <span className="results-divider"></span>
                  <span>
                    <strong>Results</strong>: {project.results}
                  </span>
                </p>
                <TagList tags={project.tags} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
