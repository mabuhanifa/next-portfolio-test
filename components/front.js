import React from 'react'
import About from './About'
import Main from './Main'
import Nav from './Nav'
import Services from './Services'

export default function Front() {
  return (
    <div>
      <Nav/>
      <Main/>
      <About/>
      <Services/>
    </div>
  )
}
