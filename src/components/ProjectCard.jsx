import TagList from './TagList.jsx'

export default function ProjectCard({ title, description, results, tags }) {
  return (
    <article className="project-card">
      <div className="project-card-image"></div>
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {results && (
          <p className="feature-results">
            <span className="results-divider"></span>
            <span>
              <strong>Results</strong>: {results}
            </span>
          </p>
        )}
        <TagList tags={tags} />
      </div>
    </article>
  )
}
