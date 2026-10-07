import css from "../../assets/icons/css.png"

const About = () => {
  return (
    <div className="bg-teal-700 text-white py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-md">
          I am a passionate developer with experience in creating dynamic web applications. I specialize in React and TypeScript, and I am always looking to improve my skills and take on new challenges.
        </p>
        <img src={css} alt="Profile" className="mx-auto my-4 rounded-full" />
        <p>Skills</p>
        <div className="skills"></div>
      </div>
    </div>
  )
}

export default About