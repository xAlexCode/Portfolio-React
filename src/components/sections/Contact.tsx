import ContactForm from "../rendering/ContactForm"

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-800 text-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mb-4 text-2xl font-bold">Contact</h2>

        <div className="mb-8 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Mail:</span>{" "} 
            <a href="mailto:alexandrahenriksson00@gmail.com" className="hover:text-blue-400">
              alexandrahenriksson00@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a href="https://github.com/xAlexCode" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              xAlexCode
            </a>
          </p>

          <p>
            <span className="font-semibold">LinkedIn:</span>{" "} 
            <a
              href="https://www.linkedin.com/in/alexandra-henriksson-456949197"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              Alexandra Henriksson
            </a>
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
} //{" "} ger ett mellanslag mellan elementen (minnesanteckning)



export default Contact