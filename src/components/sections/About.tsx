
import { skills } from "../../data/skills"
import Skillcard from "../rendering/SkillCard"

const About = () => {
  return (
    <section id="about" className="bg-zinc-700 text-white py-20">
        
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-40 md:flex-row md:items-start">
            <div className="flex-1">
                <h2 className="mb-4 text-2xl font-bold">About</h2>
                <p className="text-lg mb-4">
                I'm Alexandra and I'm currently studying to become a Frontend Developer at Medieinstitutet. I previously studied UX/UI Design and currently work part-time as an App Developer at Fogmaker International AB.
                </p>
                <p className="text-lg">
                At Fogmaker I developed an offline iOS application using Swift and Xcode, designed for exhibitions and client meetings. I enjoy creating user-focused digital experiences and continuously expanding my skills in frontend development, design and modern web technologies.
                </p>
            </div>
             <img src="/images/profile.jpeg" alt="Profile" className="size-56 shrink-0 rounded-2xl border border-white object-cover md:size-60" />
        </div>

        <div className="pt-20">
            <p className="text-xl font-bold mb-4">Skills</p>
            <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
               {skills.map((skill) => (
                    <Skillcard key={skill.id} skill={skill} />
                ))}
            </ul>
        </div>

      </div>
      
    </section>
  )
}

export default About