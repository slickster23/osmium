import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const [button, setButton] = useState(true)

    const showButton = () => {
        if(window.innerWidth <= 1653) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)
    return (
        <>
        <nav className='navbar'>
            <div className='nav-container'>
               <Link to='/' className="navbar-logo">
                   <img src="logos/osmium logo.png" alt="" /></Link>  
               <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to ='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                </li>

                <li className='nav-item'>
                    <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                </li>

                <li className='nav-item'>
                    <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                </li>

                <li className='nav-item'>
                    <Link to ='/blog' className='nav-links' onClick={closeMobileMenu}>Blog</Link>
                </li>

                <li className='nav-item'>
                    <Link to ='/gallery' className='nav-links' onClick={closeMobileMenu}>Gallery</Link>
                </li>
               </ul>
            </div>
        </nav>
            
        </>
    )
}

export default Navbar
