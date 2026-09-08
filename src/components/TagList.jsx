export default function TagList({ tags }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  )
}
