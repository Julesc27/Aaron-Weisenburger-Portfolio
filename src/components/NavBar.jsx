import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" end>
        Aaron <span className="weisenburger">Weisenburger</span>
      </NavLink>

      <div className="nav-menu">
        <div className="nav-links">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <a href="/resume.pdf" className="resume-btn">
          <span>Resume</span>
          <img src="/arrow.svg" className="resume-icon" alt="" />
        </a>
      </div>
    </nav>
  )
}
