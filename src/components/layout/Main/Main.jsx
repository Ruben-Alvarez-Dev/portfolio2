import './Main.css'
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Main = ({ isDarkMode }) => {
  return (
    <main className='main'>
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </main>
  )
}

export default Main
