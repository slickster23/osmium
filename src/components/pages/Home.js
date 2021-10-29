import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import './Home.css'

function Home() {
    return (
        <>
        <div className="body">
        <HeroSection/> 
         <div className="section">
          <div className="client-section">
              <h2>Some Of Our <span> Trusted Clients </span></h2>
            
            <div className="client-container">
                <div className="client-box">
                <img src="/logos/Bedco.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Black Hair Logo.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Client Care.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Higherself.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/rise.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Limomonane logo design.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Logo2[Full Colour].png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/MC LOGO - FULL COLOUR.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Metropolitan-Logo-2-300x189.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/New Logo-3.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/StartSmart Logo-1.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/trans.png" alt="" />
                </div>

            </div>
          </div>
          </div>
          </div>
        </>
    )
}

export default Home
