import { useState } from "react";
import { projectdata } from "../../data/projects";
import ProjectCard from "../rendering/ProjectCard";
import ProjectFilter from "../rendering/ProjectFilter";

const tags = ["HTML", "CSS", "Javascript", "Typescript", "Express", "SCSS"];

const Projects = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]); // Valda taggar, i detta fall tom lista vilket betyder att inga taggar är valda och då visas alla projekt

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag)) // selectedTag är varje tagg i listan, tag är den som klickades
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    };

    const visibleProjects = projectdata.filter((project) => {
        if (selectedTags.length === 0) return true;
        return selectedTags.every((tag) => project.tags.includes(tag)); //hade some först men då visades projekt som matchade bara en av taggarna. Medans every "måste" ha alla taggar och det passade bättre.
    });

  return (
    <section id="projects" className=" bg-zinc-700 scroll-mt-16 py-20 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-4 text-2xl font-bold">Projects</h2>
        <p className="text-base mb-10">
          Here are some of the projects I have worked on. Most projects are school assignments which are built in both group and individual.
        </p>

        <h3 className="mb-4 text-xl font-semibold">Filter Projects</h3>
        <ProjectFilter 
            tags={tags}
            selectedTags={selectedTags}
            onToggle={toggleTag}
            onClear={() => setSelectedTags([])}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;