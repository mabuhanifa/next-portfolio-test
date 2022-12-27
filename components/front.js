import React from 'react'
import About from './About'
import Main from './Main'
import Nav from './Nav'
import Services from './Services'
import Skills from './Skills'

export default function Front() {
  return (
    <div>
      <Nav/>
      <Main/>
      <About/>
      <Skills/>
      <Services/>
    </div>
  )
}
