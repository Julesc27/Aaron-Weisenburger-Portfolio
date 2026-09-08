import { Link } from 'react-router-dom'

// Reusable breadcrumb trail for sub-pages (e.g. a project detail page nested
// under /projects). `items` is an array of { label, to } — omit `to` (or
// leave it on the last item) to render that crumb as plain, non-link text
// for the current page. `variant="dark"` swaps in light/cyan colors for use
// on a dark section background; the default styling assumes a light background.
export default function Breadcrumbs({ items, variant = 'light' }) {
  const className =
    variant === 'dark' ? 'breadcrumbs breadcrumbs--dark' : 'breadcrumbs'

  return (
    <nav className={className} aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span className="breadcrumb-item" key={item.label}>
            {i > 0 && (
              <span className="breadcrumb-sep" aria-hidden="true">
                /
              </span>
            )}
            {isLast || !item.to ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link to={item.to}>{item.label}</Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
