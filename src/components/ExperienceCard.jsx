export default function ExperienceCard({
  title,
  date,
  description,
  tags,
  mirror,
}) {
  return (
    <div className={`exp-card${mirror ? " exp-card--mirror" : ""}`}>
      <div className="exp-card-glow" aria-hidden="true"></div>
      <div className="exp-card-body">
        <div className="exp-card-meta">
          <p className="exp-card-title">{title}</p>
          <p className="exp-card-date">{date}</p>
          <p className="exp-card-desc">{description}</p>
        </div>
        <div className="exp-tags">
          {tags.map((tag) => (
            <span className="exp-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
