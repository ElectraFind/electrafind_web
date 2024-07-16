import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
              <li>Home</li>
              <li>Map</li>
              <li>Service Stations</li>
              <li>About Us</li>
              <li><button className='btn'>Register</button></li>
        </ul>
    </nav>
  )
}

export default Navbar