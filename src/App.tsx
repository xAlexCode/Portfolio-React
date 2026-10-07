import Navbar from './components/layout/Navbar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'


function App() {

  return (
    <>
    <Navbar />

    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    </>
  )
}

export default App
