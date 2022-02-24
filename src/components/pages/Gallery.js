import React from 'react'
import './Gallery.css'

import Gallery from 'react-grid-gallery';
import ResponsiveGallery from "react-responsive-gallery";


function GalleryPage() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    const PHOTO_SET = [
        {
          src: '/gallery/_NIK6501.jpg',
        },
        {
          src: '/gallery/_NIK3317.jpg ',
        },
        {
          src: '/gallery/_NIK6443.jpg',
        },
        {
          src: '/gallery/_MG_7187.jpg',
        },
        {
          src: '/gallery/_MG_7214.jpg ',
        },
        {
          src: '/gallery/_NIK3313.jpg ',
        },
        {
          src: '/gallery/_NIK6455.jpg ',
        },
        {
          src: '/gallery/Happy Friyay.jpg ',
        },
        {
          src: '/gallery/BW2.jpeg ',
        },
        {
          src: '/gallery/Poster Designs/Next Level.png'
        },
        {
          src: '/gallery/Poster Designs/Clientcare Double Up 2.png',
        },
        {
          src: '/gallery/Poster Designs/IMMUNIZATION MONTH 2.png ',
        },
        {
          src: '/gallery/Poster Designs/Level Purple (1).png ',
        },
      
        {
          src: '/gallery/Poster Designs/Raliemere.png ',
        },
        {
          src: '/gallery/Poster Designs/IYD.png  ',
        },
        {
          src: '/gallery/Poster Designs/Panelists Bedco (Day 1).png '
        }
      ];
    return (
        <div className = "g-container" style={{ overflowX: 'hidden' }}>

            <div className="page-hero">
                <h2>Gallery</h2>
            </div>
            
          

            <div className="gallery-container">
            <ResponsiveGallery useLightBox images={PHOTO_SET} />
{/* 

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
                </div> */}
            </div>

            <br></br>
            
        </div>
    )
}

export default GalleryPage
