import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow--primary">
        <img src="/glow-ellipse-1.svg" alt="" />
      </div>

      <p className="hero-eyebrow">AREOSPACE ENGINEERING STUDENT - RPI</p>

      <h1 className="hero-heading">
        Engineering Solutions <br />
        for <span className="accent">Complex Problems</span>
      </h1>

      <p className="hero-text">
        I’m Aaron Weisenburger, a sophomore Aerospace Engineering student
        focused on rocketry, CAD design, composite fabrication, and hands-on
        engineering.
      </p>

      <div className="hero-actions">
        <Link to="/projects" className="btn btn-primary">
          View Projects
        </Link>
        <a href="/aaron-weisenburger-resume.png" className="btn btn-outline">
          Download Resume
        </a>
      </div>

      <div className="hero-card-frame"></div>
      <div className="hero-glow hero-glow--secondary">
        <img src="/glow-ellipse-2.svg" alt="" />
      </div>
      <img className="hero-card" src="/aaron-headshot.jpeg"></img>
    </section>
  );
}
