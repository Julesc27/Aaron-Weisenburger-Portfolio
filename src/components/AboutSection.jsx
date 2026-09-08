export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-glow" aria-hidden="true">
        <img src="/glow-ellipse-4.svg" alt="" />
      </div>
      <div className="about-inner">
        <div className="about-content">
          <div className="about-text">
            <p className="eyebrow eyebrow--cyan">ABOUT AARON</p>
            <h2 className="section-heading section-heading--light">
              My Engineering Approach:
            </h2>
          </div>
          <p className="about-description">
            I'm pursuing a B.S. in Aerospace Engineering at RPI, expected May 2029. My
            experience spans aerospace structures, CAD, Additive Manufacturing, and hands on
            fabrication. Through my work with RPI's student organizations and personal
            projects, I've gained experience designing, prototyping, and building.
          </p>
        </div>
      </div>
    </section>
  )
}
