import TagList from './TagList.jsx'

export default function ProjectCard({ title, description, tags }) {
  return (
    <article className="project-card">
      <div className="project-card-image"></div>
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <TagList tags={tags} />
      </div>
    </article>
  )
}
