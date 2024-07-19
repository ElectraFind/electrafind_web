import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Benefits from '../Benefits/Benefits'
import Title from '../Title/Title'
import '../../index.css'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='container'>
            <Title title='What We Offer'/>
            <Benefits/>
        </div>
    </div>
  )
}

export default HomePage