

const Home = () => {
  return (
    <section id="home" className="mx-auto flex max-w-6xl text-white flex-col justify-center gap-6 px-5 py-48">
        <video 
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        aria-hidden="true"
        >
            <source src="/video/colors.mp4" type="video/mp4" />
        </video>
        
        <h1 className="text-3xl font-bold sm:text-5xl ">Alexandra Henriksson</h1>
        <p className="max-w-xl text-lg">I'm a frontend developer student who loves clean structured code.</p>

        <div className="flex gap-5">
            <a href="#projects" className="rounded-lg border px-3 py-2.5">
                View Projects
            </a>
            <a href="/pdf/AlexandraHenrikssonCV.pdf" download className="rounded-lg border px-3 py-2.5">
            Download CV
            </a>
        </div>
    </section>
  )
}

export default Home