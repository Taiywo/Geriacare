import React from 'react'
import Hero from '../component/Hero'

import Services from '../pages/Services'
import Caregivers from '../pages/Caregivers'
import Contact from '../pages/Contact'

import About from '../pages/About'


const Home = () => {
  return (
    <div className='md:mt-40 mt-36 drop-in-2'>
        <Hero/>
        <Services/>
        <Caregivers/>
        <About/>
        <Contact/>
      
      
        
    </div>
  )
}

export default Home