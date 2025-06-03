import React from 'react'
import About from './About'
import Features from './features'
import Contact from './contact'
import Gallery from './gallery'
import Navigation from './navigation'

function HomePage() {
  return (
    <div>
        <Navigation />
        <About />
        <Features />
        <Contact />
        <Gallery />
    </div>
  )
}

export default HomePage