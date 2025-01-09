import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className="container h-full w-full mx-auto px-4 md:px-0">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home