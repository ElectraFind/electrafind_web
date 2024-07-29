import React from 'react'
// import { Link } from 'react-router-dom';
import './About.css'
import image from '../../assets/logo-2.png'
// import arrow from '../../assets/arrow.png'

const About = () => {
    return (
        <div className='about-container'>
            <div className='heading-container'>
                <div className='about-text'>
                    <h1>ElectraFind</h1>
                    <h3>Power Up Anywhere</h3>
                    <p>ElectraFind was founded in 2024 by a group of students at the University of Colombo School of Computing. Initially EletraFind will be developed as a part of their curriculum. If we receive positive feedback from the users after the initial lauch we will take necessary actions to develop this further as a commercial app.</p>
                </div>
                <div className='image-container'>
                    <img src={image} alt="" />
                </div>
                {/* <Link to="/register"><button className='btn'>Register Now <img src={arrow} alt=""/></button></Link> */}
            </div>
            <div className='vision'>
                <h1>Our vision</h1>
            </div>
            <div className='mission'></div>
            <div className='social'></div>
        </div>
    )
}

export default About