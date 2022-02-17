import React from 'react'
import './Gallery.css'

function Gallery() {
    return (
        <div className = "g-container" style={{ overflowX: 'hidden' }}>

            <div className="page-hero">
                <h2>Gallery</h2>
            </div>
            

            <div className="gallery-container">
                <div className="box">
                <img src="/gallery/_NIK6501.jpg" alt="" />
                </div>

                <div className="box">
                <img src="/gallery/_NIK3317.jpg" alt="" />
                </div>

                <div className="box">
                <img src="/gallery/_NIK6443.jpg" alt="" />
                </div>


                <div className="box">
                <img src="/gallery/_MG_7187.jpg" alt="" />
                </div>

                <div className="box">
                <img src="/gallery/Poster Designs/Clientcare Double Up 2.png " alt="" />
                </div>

                <div className="box">
                <img src="/gallery/Poster Designs/Level Purple (1).png" alt="" />
                </div>

                <div className="box">
                <img src="/gallery/Poster Designs/WhatsApp Image 2021-08-18 at 15.29.08.jpeg " alt="" />
                </div>

                <div className="box">
                <img src="/gallery/Poster Designs/Panelists Bedco (Day 1).png" alt="" />
                </div>

                <div className="box">
                <img src="/gallery/Poster Designs/WhatsApp Image 2021-08-24 at 01.09.42.jpeg" alt="" />
                </div>

                
                <div className="box">
                <img src="/gallery/Poster Designs/IYD.png" alt="" />
                </div>

                <div className="box">
                <img src="/gallery/Poster Designs/Next Level.png" alt="" />
                </div>

                
                <div className="box">
                <img src="/gallery/Poster Designs/Spring Clean Campaign.png" alt="" />
                </div>
            </div>

            <br></br>
            
        </div>
    )
}

export default Gallery
