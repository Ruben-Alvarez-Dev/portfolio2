import React, { forwardRef } from 'react'
import './Main.css'
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Main = forwardRef(({ isDarkMode }, ref) => {
  return (
    <main ref={ref} className='main'>
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </main>
  )
})

Main.displayName = 'Main';

export default Main
