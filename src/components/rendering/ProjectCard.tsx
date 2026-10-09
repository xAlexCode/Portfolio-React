
import type { Project } from "../../types/types"

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const{ title, description, image, tags, liveLink, repoLink } = project

    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white/15 shadow-sm transition-shadow hover:shadow-md">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="flex-1 text-base ">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-white/15 px-3 py-1 text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-800 px-4 py-2 text-white transition-colors hover:bg-blue-900"
            >
              Live demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white px-4 py-2 text-white transition-colors hover:bg-blue-900/30"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  )



}

export default ProjectCard