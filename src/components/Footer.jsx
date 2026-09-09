import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="footer-copyright">© 2026 Aaron Weisenburger</p>
        <nav className="footer-links">
          <a href="/aaron-weisenburger-resume.png" download="Aaron-Weisenburger-Resume.png">
            Resume
          </a>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
