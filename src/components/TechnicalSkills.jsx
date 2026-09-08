import SkillCard from './SkillCard.jsx'
import { skills } from '../data/skills.js'

export default function TechnicalSkills() {
  return (
    <section className="skills">
      <div className="skills-glow">
        <img src="/glow-ellipse-3.svg" alt="" />
      </div>

      <div className="skills-inner">
        <div className="skills-header">
          <p className="eyebrow eyebrow--cyan">TECHNICAL SKILLS</p>
          <h2 className="section-heading section-heading--light">
            Digital models to physical hardware
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
