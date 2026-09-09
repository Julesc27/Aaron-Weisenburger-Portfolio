import { Link } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs.jsx'

export default function ProjectDetailContent({ detail, project }) {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-glow" aria-hidden="true">
          <img src="/glow-ellipse-8.svg" alt="" />
        </div>
        <div className="detail-hero-inner">
          <div className="detail-topbar">
            <Breadcrumbs
              variant="dark"
              items={[
                { label: 'Home', to: '/' },
                { label: 'Projects', to: '/projects' },
                { label: project.title },
              ]}
            />
            <Link to="/projects" className="back-link back-link--dark">
              ← Back to Projects
            </Link>
          </div>
          <p className="detail-eyebrow">{detail.eyebrow}</p>
          <h1 className="detail-hero-title">{detail.heroTitle}</h1>
          {detail.heroParagraphs.map((paragraph, i) => (
            <p className="detail-hero-text" key={i}>
              {paragraph}
            </p>
          ))}
          <div className="detail-badges">
            {detail.badges.map((badge) => (
              <span className="detail-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-materials">
        <div className="detail-materials-inner">
          <h2 className="detail-materials-heading">{detail.materialsHeading}</h2>
          <div className="spec-card-row">
            {detail.materialsGroups.map((group) => (
              <div className="spec-card" key={group.title}>
                <h3>{group.title}</h3>
                <dl className="spec-rows">
                  {group.rows.map((row) => (
                    <div className="spec-row" key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-results">
        <div className="detail-results-glow" aria-hidden="true">
          <img src="/glow-ellipse-9.svg" alt="" />
        </div>
        <div className="detail-results-inner">
          <div className="detail-results-header">
            <h2 className="detail-results-heading">{detail.resultsHeading}</h2>
            <p className="detail-skills-line">{detail.skillsLine}</p>
          </div>
          <div className="detail-results-body">
            <div className="detail-results-images">
              {detail.resultsImages.map((image, i) => (
                <img
                  key={i}
                  className="detail-results-image"
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
            <div className="detail-results-text">
              {detail.resultsParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
