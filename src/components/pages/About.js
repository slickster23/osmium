import React from 'react'
import '../../App.css'
import './About.css'

function About() {
    return (
        <>

        <div className="body ">

        <div className="about-content">
            <h2>About Us</h2>
            <div className="container">
                <div className="box">
                    <h3>“Content KING, Content Marketing Is Queen”</h3>
                <p>We understand you want a brand that will generate leads, connect more with consumers and build a lasting impression that cements trust, authority and reassurance. The Power of Content Marketing to do that for you is a mission, we are here to make it possible.</p>
                <p>Osmium Lesotho is a trusted content marketing Agency making sure your brand stays ahead with user centric Digital Content Marketing Strategy solutions including Social Media Marketing, Brand Strategy, Website and App Development and Brand Development. </p>
                <p>With more than six (6) years doing digital Marketing in Lesotho, our trusted team has developed the experience, credibility and skills to make sure your brand generates conversion, leads and awareness. </p>
                </div>

                <div className="box">
                    <img src="/gallery/about.jpg" alt="" />
                </div>
            </div>

            <div className="team-section">
                <h2>Nice to Meet You </h2>
                <p>Our team is made up of dedicated core and external content developers, creators and curators. </p>
                <div className="team-container">
                    <div className="team-box">
                        <img src="/Staff Images/Shekeshe_2.jpg" alt="" />
                        <h6>Shekeshe Rankhasa</h6>
                        <p>Marketing Project Manager</p>

                        <div className="socials">
                             <a href="https://twitter.com/rankhasas" target="_blank">
                            <i class="fab fa-twitter-square"/>
                            </a>

                            <a href="https://instagram.com/rankhasas" target="_blank">
                            <i class="fab fa-instagram-square"></i>
                            </a>
                       
                        </div>
                        <p>Skills: Photography, Project Management</p>

                       
                        {/* <p>Social Media Reach: 300 - 800 Profiles</p> */}
                    </div>

                    <div className="team-box">
                        <img src="/Staff Images/Motebang_2.jpg" alt="" />
                        <h6>Motebang Senaoana</h6>
                        <p>Business Development Manager</p>

                        <div className="socials">
                        <a href="https://twitter.com/msenaoana" target="_blank">
                            <i class="fab fa-twitter-square"/>
                            </a>

                            <a href="https://instagram.com/msenaoana" target="_blank">
                            <i class="fab fa-instagram-square"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/msenaoana/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                            </a>

                            <a href="https://msenaoana.medium.com/" target="_blank">
                            <i class="fab fa-medium"></i>
                            </a>
                            </div>
                       
                        <p>Skills: Blogging, Content Creation Strategy</p>
                        
                       
                        {/* <p>Social Media Reach: 500 - 2k Profiles</p> */}
                    </div>

                    <div className="team-box">
                        <img src="/Staff Images/Seeng_2.jpg" alt="" />
                        <h6>Seeng ‘Matheko Theko</h6>
                        <p>Creative Strategist</p>
                          <div className="socials">
                        <a href="https://twitter.com/s_theko" target="_blank">
                            <i class="fab fa-twitter-square"/>
                            </a>

                            <a href="https://instagram.com/s_theko" target="_blank">
                            <i class="fab fa-instagram-square"></i>
                            </a>
                        </div>
                        <p>Skills: Photography, Creative Design and Strategy, Content Curation</p>
                        
                      
                        {/* <p>Social Media Reach: 250 - 800 Profiles </p> */}
                    </div>

                    <div className="team-box">
                        <img src="/Staff Images/Lele_1.jpg" alt="" />
                        <h6>Relebohile Mafisa </h6>
                        <p>Marketing Administrator</p>

                        <div className="socials">
                        <a href="https://twitter.com/s_theko" target="_blank">
                            <i class="fab fa-twitter-square"/>
                            </a>

                            <a href="https://instagram.com/s_theko" target="_blank">
                            <i class="fab fa-instagram-square"></i>
                            </a>
                        </div>
                        
                        <p>Skills: Administration, Creative Writing </p>
                    
                       
                        {/* <p>Social Media Reach: 250 - 800 Profiles </p> */}
                    </div>
                </div>
            </div>

        </div>
        </div>
            
        </>
    )
}

export default About
