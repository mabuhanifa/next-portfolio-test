import React from 'react'
import About from './About'
import Contact from './Contact'
import Main from './Main'
import Services from './Services'
import Skills from './Skills'

export default function Front() {
  return (
    <div>
      <Main/>
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
    </div>
  )
}
