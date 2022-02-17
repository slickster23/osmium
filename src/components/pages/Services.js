import React from 'react'
import Navbar from '../Navbar'
import '../../App.css'
import './Services.css'

function Services() {
    return (
        <>
 <div className="page-hero">
                <h2>Services</h2>
            </div>
            
        
        <div className="content" style={{ overflowX: 'hidden' }}>
           
       
            <div className="service-container">
            <div className="image">
                <img src="/gallery/strategy.jpg" alt="" />
            </div>

            <div className="text-box">
                <h3>Strategy</h3>
                <p> We take a clear holistic look at our client’s business model and brand positioning and 
                    walk the journey with them to formulate a strategy that will help them make their mission
                    possible. These goals are reached after a clear understanding of social media insights, user 
                    persona profiling, current social media analytics and goals and objectives the brand has. </p>

                    <p>Our Strategy Services Include:</p>
                    <ul>
                        <li>Brand Strategy</li>
                        <li>Social Media Content Strategy</li>
                        <li>Web Content Strategy</li>
                        <li>Brand Positioning</li>
                    </ul>
            </div>
            
            </div>

            <div className="service-container">

            <div className="image">

            <div className="text-box">
                <h3>Creative & Visual Design </h3>
                <p> We uniquely understand your brand’s vision and mission to go out of our way to stretch 
                    our creativity and give them the best visual and interactive content mediums we know how.  </p>

                  <ul>
                      <li>Corporate Identity</li>
                      <li>Logo Design</li>
                      <li>Photography & Videography</li>
                      <li>Motion Graphics</li>
                      <li>Web & App Development</li>
                      <li>Infographics & Poster Designs</li>
                      <li> Animation Videos</li>
                  </ul>
            </div>
            
            </div>
                <img src="/gallery/creativity.jpg" alt="" />
            </div>

            

            <div className="service-container">
            <div className="image">
                <img src="/gallery/social-media.jpg" alt="" />
            </div>

            <div className="text-box">
                <h3>Social Media</h3>
                <p> In a world where people are continuously consuming content, your brand cannot afford to be left out. 
                    Content is becoming part of our everyday lives, we will help you have the consistency, quality and 
                    engaging content needed to connect with users.  </p>

                    <p>We have a dedicated social management team to create and deliver relevant brand content to build 
                        communities on social platforms. This assists in building a brand message which is spread through 
                        the people that fall in love with the product or service. We specialise in social content, social 
                        media management, reputation management and targeted social media campaigns.</p>

                    <p>Services Under Social Media:</p>
                    <ul>
                        <li>Social Media campaigns</li>
                        <li>Communication Planning</li>
                        <li>Social Channel Strategy</li>
                        <li>Social Media Reputation & Crisis Management</li>
                        <li>Social Media Integration</li>
                        <li>Social Media Content Creation</li>
                        <li>Community Building</li>

                    </ul>
            </div>
            
            </div>

            <div className="service-container">

            <div className="text-box">
                <h3>Analytics Report and Listening</h3>
                <p> All things online are measurable. Using data analysis, we can assess their ROI. Being part of the 
                    “Big Data Era” may be overwhelming, however, at Osmium,  we condense information into bite-size chunks. 
                    Tracking brand progress ultimately helps build better websites, campaigns and products.  </p>
                   
            </div>

            <div className="image">
                <img src="/gallery/analytics.jpg" alt="" />
            </div>

           

            
            </div>


        </div>
          
        </>
    )
}

export default Services
