import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" end onClick={closeMenu}>
        Aaron <span className="weisenburger">Weisenburger</span>
      </NavLink>

      <button
        type="button"
        className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`}>
        <div className="nav-links">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <a
          href="/aaron-weisenburger-resume.png"
          download="Aaron-Weisenburger-Resume.png"
          className="resume-btn"
          onClick={closeMenu}
        >
          <span>Resume</span>
          <img src="/arrow.svg" className="resume-icon" alt="" />
        </a>
      </div>
    </nav>
  )
}
