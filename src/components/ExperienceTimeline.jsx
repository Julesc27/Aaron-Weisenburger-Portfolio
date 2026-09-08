import { experience } from '../data/experience.js'

export default function ExperienceTimeline() {
  return (
    <section className="experience">
      <div className="experience-inner">
        <div className="experience-header">
          <p className="eyebrow">EXPERIENCE</p>
          <h2 className="section-heading">Learning by doing</h2>
        </div>
        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item" key={item.id}>
              <span className="timeline-marker" aria-hidden="true"></span>
              <div className="experience-card">
                <div className="experience-card-image"></div>
                <div className="experience-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
