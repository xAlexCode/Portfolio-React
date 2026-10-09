
const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-800 text-white py-20">
      <div className="container mx-auto max-w-5xl px-5">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-md">
          Feel free to reach out to me! I'm always open to discussing new opportunities or just having a chat.
        </p>

        <form className="mt-4 ">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-teal-600 text-white placeholder:text-teal-300 border border-teal-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-teal-600 text-white placeholder:text-teal-300 border border-teal-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="bg-teal-600 text-white placeholder:text-teal-300 border border-teal-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact