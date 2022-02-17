import React from 'react'
import './HeroSection.css'
import { Button } from '@material-ui/core';

function HeroSection() {
    return (
        <>
        <div className='hero-container' >
            <img src="" alt="" />
            <div className="hero-content">
                <h2>Your Go-To Content Marketing Agency</h2>
                <p>Offering social media marketing, content strategy, websites and digital marketing experiences 
                    that drive results for your brand</p>

            <Button className="button" color = "#fff" href="#" variant="contained" style={{margin: '0 auto', display: 'flex', marginTop:'2rem', width: 'fit-content', color:'#FFFFFF'}}>Get a Quote</Button>
            </div>
        </div>
        </>
    )
}

export default HeroSection
