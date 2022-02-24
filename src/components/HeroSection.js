import React from 'react'
import './HeroSection.css'
import { Button } from '@material-ui/core';
import image from "./images/bg.jpg";


function HeroSection() {
    return (
        <>
        <div className='hero-container' >
        <img src={image} alt="" />
            <div className="hero-content">
                <h2>Your Go-To Content Marketing Agency</h2>
                <p>Offering social media marketing, content strategy, websites and digital marketing experiences 
                    that drive results for your brand</p>

            <div className="button">
            <a href="">Get Quote</a>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default HeroSection
