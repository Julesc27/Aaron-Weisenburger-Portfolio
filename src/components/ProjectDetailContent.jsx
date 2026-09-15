import { Link } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs.jsx'
import ImageCarousel from './ImageCarousel.jsx'

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

  // These project heroes' photos looked flush against the right edge,
  // far from the text — a one-off tweak (these pages only) to center them
  // in the empty space instead, via the .detail-hero-image-wrap flexbox
  // technique below.
  const CENTERED_HERO_IMAGE_PROJECTS = [
    'l2-rocket-mk1',
    'l2-rocket-mk2',
    'irec-rocket-2026',
    'glove-box-holder',
    'ammo-box',
  ];
  const centerHeroImage = CENTERED_HERO_IMAGE_PROJECTS.includes(project.id);

  // Each of these hero photos has its own aspect ratio, quite different
  // from the tall, narrow rocket shot the default box was sized for —
  // MK2's is an extremely tall, narrow full-body shot (default box, but
  // shown uncropped via `contain`); MK1's is a wider rocket-launch shot;
  // IREC 2026's is a landscape team photo; the glove box holder's is a
  // straight-on product shot; the ammo box's is a standard ~4:3 phone
  // photo. Everything except MK2 gets a box sized to match its own
  // photo, so plain `cover` already shows the whole photo with no need
  // for `contain`.
  const HERO_IMAGE_MODIFIERS = {
    'l2-rocket-mk2': 'detail-hero-image--contain',
    'l2-rocket-mk1': 'detail-hero-image--wide',
    'irec-rocket-2026': 'detail-hero-image--landscape',
    'glove-box-holder': 'detail-hero-image--product',
    'ammo-box': 'detail-hero-image--photo',
  };
  const heroImageModifierClass = HERO_IMAGE_MODIFIERS[project.id]
    ? ` ${HERO_IMAGE_MODIFIERS[project.id]}`
    : '';

  // A project with just one or two result photos lays them out as a
  // simple static row next to the write-up. A project with several
  // photos/drawings to show reads better as a carousel the visitor can
  // step through one at a time instead of a wall of small thumbnails.
  const useResultsCarousel = resultsImages.length > 2;

  // The carousel is its own light card, so it already reads as distinct
  // from the dark Hero above it — a project using one doesn't also need
  // the whole Results section flipped light for contrast.
  const needsSectionDivider = !hasMaterials;
  const needsLightResults = !hasMaterials && !useResultsCarousel;

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
          <div className={`detail-hero-row${centerHeroImage ? ' detail-hero-row--centered-image' : ''}`}>
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
            {detail.heroImage && centerHeroImage && (
              <div className="detail-hero-image-wrap">
                <img
                  className={`detail-hero-image${heroImageModifierClass}`}
                  src={detail.heroImage.src}
                  alt={detail.heroImage.alt}
                />
              </div>
            )}
            {detail.heroImage && !centerHeroImage && (
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
        // Hero and Results share the same dark background, and normally
        // the light Materials section in between keeps them from
        // blending together. A project with no Materials section needs
        // its own seam between them instead — either a full light
        // background, or (when a light carousel card is already sitting
        // in the section) just a thin accent divider.
        <section
          className={`detail-results${needsSectionDivider ? ' detail-results--divider' : ''}${
            needsLightResults ? ' detail-results--light' : ''
          }`}
        >
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
              {resultsImages.length > 0 && useResultsCarousel && (
                <ImageCarousel images={resultsImages} />
              )}
              {resultsImages.length > 0 && !useResultsCarousel && (
                <div className="detail-results-images">
                  {resultsImages.map((image, i) => (
                    <img
                      key={i}
                      className={`detail-results-image${image.className ? ` ${image.className}` : ''}`}
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
