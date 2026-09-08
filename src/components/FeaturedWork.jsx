import { Link } from 'react-router-dom'
import TagList from './TagList.jsx'
import ProjectCard from './ProjectCard.jsx'
import { featuredProject, projects } from '../data/projects.js'

export default function FeaturedWork() {
  return (
    <section className="featured-work">
      <div className="featured-work-inner">
        <div className="featured-header">
          <div>
            <p className="eyebrow">FEATURED WORK</p>
            <h2 className="section-heading">Engineering in action</h2>
          </div>
          <Link to="/projects" className="view-all-link">
            View all projects
            <img src="/arrow-blue.svg" className="view-all-arrow" alt="" />
          </Link>
        </div>

        <article className="feature-card">
          <div className="feature-card-image">picture</div>
          <div className="feature-card-body">
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <p className="feature-results">
              <span className="results-divider"></span>
              <span>
                <strong>Results</strong>: {featuredProject.results}
              </span>
            </p>
            <TagList tags={featuredProject.tags} />
          </div>
        </article>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
