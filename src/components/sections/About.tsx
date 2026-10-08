import css from "/icons/css.png"
import { skills } from "../../data/skills"
import Skillcard from "../rendering/SkillCard"

const About = () => {
  return (
    <section id="about" className="bg-teal-700 text-white py-20">
        
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-row ">
            <div>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-base">
                I am a passionate developer with experience in creating dynamic web applications. I specialize in React and TypeScript and I am always looking to improve my skills and take on new challenges.
                </p>
            </div>
             <img src={css} alt="Profile" className="mx-auto rounded-full size-60" />
        </div>

        <div className="py-20">
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