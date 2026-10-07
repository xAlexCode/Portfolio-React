

const Home = () => {
  return (
    <section id="home" className="mx-auto flex max-w-5xl flex-col justify-center gap-6 px-5 py-12">
        <h1 className="text-3xl font-bold sm:text-5xl ">Alexandra Henriksson</h1>
        <p className="max-w-xl text-lg">I'm a frontend developer student who loves clean structured code.</p>

        <div className="flex gap-5">
            <a href="#projects" className="rounded-lg border px-3 py-2.5">
                View Projects
            </a>
            <a href="../../src/assets/pdf/AlexandraHenrikssonCV.pdf" download className="rounded-lg border px-3 py-2.5">
            Download CV
            </a>
        </div>
    </section>
  )
}

export default Home