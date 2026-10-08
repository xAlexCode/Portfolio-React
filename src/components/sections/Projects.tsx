import { projectdata } from "../../data/projects";
import ProjectCard from "../rendering/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16 py-20 text-black">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-4 text-2xl font-bold">Projects</h2>
        <p className="text-base">
          Here are some of the projects I have worked on. Each project
          represents a unique challenge and solution.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectdata.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;