import React, {useState} from 'react'
import Navbar from '../Navbar'
import '../../App.css'
import './Services.css'
import {BsChevronCompactRight, BsChevronCompactDown } from 'react-icons/bs'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Services() {
    const [strategyClicked, setStrategyClicked] = useState(false)
    const[designClicked, setDesignClicked] = useState(false)
    const[socialClicked, setSocialClicked] = useState(false);
    return (
        <>
 <div className="page-hero">
                <h2>Services</h2>
            </div>
            
        
        <div className="content">
           
       
            <div className="service-container">

                <div className="service-box">
                <div className="image">
                <img src="/gallery/strategy.jpg" alt="" />
            </div>

            <div className="text-box">
                <h3>Strategy</h3>

                <p> We take a clear holistic look at our client’s business model and brand positioning and 
                    walk the journey with them to formulate a strategy that will help them make their mission
                    possible. These goals are reached after a clear understanding of social media insights, user 
                    persona profiling, current social media analytics and goals and objectives the brand has. </p>

                <div className="row" onClick={() => setStrategyClicked(!strategyClicked)}>
                        <h4>Our Strategy Services Include:</h4>
                        {strategyClicked ? <BsChevronCompactDown /> : <BsChevronCompactRight /> }
                    

                </div>

                    {strategyClicked &&(
                    <div className="drop-down">
                            <ul>
                                <li>Brand Strategy</li>
                                <li>Social Media Content Strategy</li>
                                <li>Web Content Strategy</li>
                                <li>Brand Positioning</li>
                         </ul>
                    </div>

                    )}
            </div>


                </div>
            
           
            <div className="service-box">

            <div className="image">
            <img src="/gallery/creativity.jpg" alt="" />
        </div>

            <div className="text-box">
               
                <h3>Creative & Visual Design </h3>
              
                <p> We uniquely understand your brand’s vision and mission to go out of our way to stretch 
                    our creativity and give them the best visual and interactive content mediums we know how.  </p>
                   
                    <div className="row" onClick={() => setDesignClicked(!designClicked)}>
                        <h4>Our Creative & Visual Design Services include</h4>
                        {designClicked ? <BsChevronCompactDown /> : <BsChevronCompactRight /> }
                    

                    </div>
    
                   
                  
                    {designClicked &&( <div className="drop-down">
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
                    )}
            </div>
            
            </div>
                
            

            

            <div className="service-box">
            <div className="image">
                <img src="/gallery/social-media.jpg" alt="" />
            </div>

            <div className="text-box">
                <h3>Social Media</h3>

                    <p>We have a dedicated social management team to create and deliver relevant brand content to build 
                        communities on social platforms. This assists in building a brand message which is spread through 
                        the people that fall in love with the product or service. We specialise in social content, social 
                        media management, reputation management and targeted social media campaigns.</p>

                    <div className="row" onClick={() => setSocialClicked(!socialClicked)}>
                    <h4>Services Under Social Media:</h4>
                    {socialClicked ? <BsChevronCompactDown /> : <BsChevronCompactRight /> }
                    

                    </div>
                    {socialClicked &&( <div className="drop-down">
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
                    )}
                    
            </div>
            
            </div>

            <div className="service-box">
            <div className="image">
                <img src="/gallery/analytics.jpg" alt="" />
            </div>

            <div className="text-box">
                <h3>Analytics Report and Listening</h3>
                <p> All things online are measurable. Using data analysis, we can assess their ROI. Being part of the 
                    “Big Data Era” may be overwhelming, however, at Osmium,  we condense information into bite-size chunks. 
                    Tracking brand progress ultimately helps build better websites, campaigns and products.  </p>
                   
            </div>
            
            </div>

            </div>

            <h3>Client Testimonials</h3>

            <div className="testimonial">
            <Carousel swipeable = "true" autoPlay="true" centerMode= "true" interval={3000} centerSlidePercentage={20}infiniteLoop="true" width="100%" showArrows="true">
                <div className="testimonial-box">
                    <p>“The team did a really good job in assisting us with our marketing & communications activities. We were impressed 
                        with their professionalism, creativity and strategies. They helped us maintain an excellent communication strategy 
                        with our stakeholders on social media and emails”</p>
                    <p>Rethabile Shale - The Entrepreneurs Network.</p>
                </div>

                <div className="testimonial-box">
                    <p>“We were very impressed with Osmium’s analytical skills, unique understanding of social media algorithms, metrics and most 
                        importantly how well they understand social media users (behavior, trends and engagement).This is an activity we still 
                        engage with them to date on a regular basis. Their analysis and user centric strategies have really assisted us in improving 
                        our metrics and engagement rate.”</p>
                    <p>Daniela Gusman - RISE International</p>
                </div>

                <div className="testimonial-box">
                    <p>“ Osmium has really assisted my team and I in integrating business activities into Social Media and challenged us to be consistent 
                        and authentic in order to cement client relations. Their continued creativity helped us strategize our design thinking workshops to 
                        be more targeted and impact-driven.”</p>
                    <p>Maneo Seekane - Start Smart Lesotho.</p>
                </div>

                <div className="testimonial-box">
                    <p>“I have worked with Osmium for TKO’s Digital Strategy and I was really impressed with their turnaround time, quality of work and creativity 
                        with the team’s brand.”</p>
                    <p>Tokiso Nthebe - TKO Consultancy</p>
                </div>
                </Carousel>
            </div>
        </div>
          
        </>
    )
}

export default Services
