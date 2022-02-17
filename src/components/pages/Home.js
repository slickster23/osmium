import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import './Home.css'

function Home() {
    return (
        <>
        <div className="body">
        <HeroSection/> 
        <div className="section" style={{ overflowX: 'hidden' }}>
           

           <div className="home-container">
            <h2>What Sets Us Apart?</h2>
               <div className="container">
               <div className="box">
               <i class="fas fa-star"></i>
                   <h3>Experience</h3>
                   <p>We have worked with over ten (10) businesses from all sectors stretching 
                       from insurance, banking, parastal and the tourism industries. Our unique 
                       creative skills allow us to turn any brand’s mission into reality.</p>
               </div>

               <div className="box">
               <i class="fas fa-lightbulb"></i>
                   <h3>Creativity</h3>
                   <p>We have a specialized set of skills that allow us to provide quality long-term 
                       value for our clients. These encompass storytelling, creative writing, visual 
                       work and innovative designs. </p>
               </div>

               <div className="box">
               <i class="fas fa-check-square"></i>
                   <h3>Quality Service Delivery</h3>
                   <p>Our administrative and sales departments come specially equipped to cater to your brand’s 
                    needs and cultures. We invest heavily in our client acquisition strategies to make sure you
                    receive the best 360 service.</p>
               </div>

               <div className="box">
               <i class="fas fa-chess"></i>
                   <h3>Client Centric Strategies</h3>
                   <p>We not only put your brand at heart but your customers and clients as well. We carry out 
                       designs and strategies that put the best interests of your client at heart. </p>
               </div>
               </div>
       
           </div>
        </div>
         <div className="section">
          <div className="client-section">
              <h2>Some Of Our <span> Trusted Clients </span></h2>

    
              <h2>Small Businesses</h2> 
            <div className="client-container">

           
            <div className="client-box">

               
                <img src="/logos/Logo2[Full Colour].png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Black Hair Logo.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Limomonane logo design.png" alt="" />
                </div>

                
                <div className="client-box">
                <img src="/logos/New Logo-3.png" alt="" />
                </div>



                </div>

                <h2>Medium Businesses</h2>

                <div className="client-container">

                <div className="client-box">
                <img src="/logos/trans.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Client Care.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/MC LOGO - FULL COLOUR.png" alt="" />
                </div>


                <div className="client-box">
                <img src="/logos/StartSmart Logo-1.png" alt="" />
                </div>


                </div>

                <h2>NGO</h2>

                <div className="client-container">
                <div className="client-box">
                <img src="/logos/rise.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Higherself.png" alt="" />
                </div>


                </div>

                <h2>Corporate</h2>

                <div className="client-container">

                <div className="client-box">
                <img src="/logos/Bedco.png" alt="" />
                </div>

                <div className="client-box">
                <img src="/logos/Metropolitan-Logo-2-300x189.png" alt="" />
                </div>


                </div>

              
             
              


          </div>
          </div>
          </div>
        </>
    )
}

export default Home
