import { useParams, Link } from 'react-router-dom'
import { allProjects } from '../data/projects.js'
import { projectDetails } from '../data/projectDetails.js'
import ProjectDetailContent from '../components/ProjectDetailContent.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = allProjects.find((item) => item.id === projectId)
  const detail = projectId ? projectDetails[projectId] : undefined

  if (project && detail) {
    return <ProjectDetailContent detail={detail} project={project} />
  }

  return (
    <main className="page-main">
      <div className="detail-topbar detail-topbar--light">
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: 'Projects', to: '/projects' },
            { label: project ? project.title : 'Not found' },
          ]}
        />
        <Link to="/projects" className="back-link back-link--light">
          ← Back to Projects
        </Link>
      </div>
      <h1>{project ? project.title : 'Project not found'}</h1>
      <p>
        {project
          ? 'A full write-up of this project is coming soon.'
          : "That project doesn't exist — it may have moved."}
      </p>
    </main>
  )
}
