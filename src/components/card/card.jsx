import './card.css'

function Card({ title, description, technologies, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
    >
      <div className="project-card">
        <h2>{title}</h2>

        <p>{description}</p>

        <div className="project-tech">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default Card