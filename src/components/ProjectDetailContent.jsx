import { Link } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs.jsx'

export default function ProjectDetailContent({ detail, project }) {
  // Detail entries in projectDetails.js are hand-written case studies, and
  // not every project has finished every section yet — some are missing
  // photos, some don't have the materials breakdown written up, etc. Treat
  // every list/section as optional so a partially-filled-out entry still
  // renders the page instead of crashing on a missing .map().
  const heroParagraphs = detail.heroParagraphs ?? [];
  const badges = detail.badges ?? [];
  const materialsGroups = detail.materialsGroups ?? [];
  const resultsImages = detail.resultsImages ?? [];
  const resultsParagraphs = detail.resultsParagraphs ?? [];

  const hasMaterials = materialsGroups.length > 0;
  const hasResults =
    Boolean(detail.resultsHeading) || resultsImages.length > 0 || resultsParagraphs.length > 0;

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
          <div className="detail-hero-row">
            <div className="detail-hero-main">
              {detail.eyebrow && <p className="detail-eyebrow">{detail.eyebrow}</p>}
              <h1 className="detail-hero-title">{detail.heroTitle ?? project.title}</h1>
              {heroParagraphs.map((paragraph, i) => (
                <p className="detail-hero-text" key={i}>
                  {paragraph}
                </p>
              ))}
              {badges.length > 0 && (
                <div className="detail-badges">
                  {badges.map((badge) => (
                    <span className="detail-badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {detail.heroImage && (
              <img
                className="detail-hero-image"
                src={detail.heroImage.src}
                alt={detail.heroImage.alt}
              />
            )}
          </div>
        </div>
      </section>

      {hasMaterials && (
        <section className="detail-materials">
          <div className="detail-materials-inner">
            <h2 className="detail-materials-heading">{detail.materialsHeading}</h2>
            <div className="spec-card-row">
              {materialsGroups.map((group) => (
                <div className="spec-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <dl className="spec-rows">
                    {(group.rows ?? []).map((row) => (
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
      )}

      {hasResults && (
        <section className="detail-results">
          <div className="detail-results-glow" aria-hidden="true">
            <img src="/glow-ellipse-9.svg" alt="" />
          </div>
          <div className="detail-results-inner">
            <div className="detail-results-header">
              {detail.resultsHeading && (
                <h2 className="detail-results-heading">{detail.resultsHeading}</h2>
              )}
              {detail.skillsLine && <p className="detail-skills-line">{detail.skillsLine}</p>}
            </div>
            <div className="detail-results-body">
              {resultsImages.length > 0 && (
                <div className="detail-results-images">
                  {resultsImages.map((image, i) => (
                    <img
                      key={i}
                      className="detail-results-image"
                      src={image.src}
                      alt={image.alt}
                    />
                  ))}
                </div>
              )}
              {resultsParagraphs.length > 0 && (
                <div className="detail-results-text">
                  {resultsParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
