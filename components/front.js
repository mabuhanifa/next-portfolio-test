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
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  )
}
