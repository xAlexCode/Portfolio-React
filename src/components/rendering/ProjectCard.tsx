
import type { Project } from "../../types/types"

type ProjectCardProps = {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const{ title, description, image, tags, liveLink, repoLink } = project

    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="flex-1 text-base text-slate-600">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-teal-700/10 px-3 py-1 text-sm text-teal-800"
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
              className="rounded-lg bg-teal-700 px-4 py-2 text-white transition-colors hover:bg-teal-800"
            >
              Live demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-teal-700 px-4 py-2 text-teal-700 transition-colors hover:bg-teal-700/10"
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