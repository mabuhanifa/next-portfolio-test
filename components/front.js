import React from 'react'
import About from './About'
import Contact from './Contact'
import Main from './Main'
import Projects from './Projects'
import Services from './Services'
import Skills from './Skills'

export default function Front() {
  return (
    <div>
      <Main/>
      <Skills/>
      <Services/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  )
}
