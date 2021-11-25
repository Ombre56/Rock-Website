import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { ImYoutube } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackground);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const telephone = "+48 123 456 789";
  
    return (
        <>
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='home' className="logo" smooth={true} duration={1000} onClick={closeMobileMenu}>
                <img src={logo} alt="logo" />
            </Link>
            <div className="social_media_container">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <ImYoutube className="social_media" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <IoLogoFacebook className="social_media" />
                </a><br />
                <p className="telephone">
                <BsFillTelephoneFill className="telephone_icon" /> {telephone}
            </p>
            </div>
            <div className="menu-icon" onClick={handleClick}>
               {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "menu" : "menu active"}>
                <li><Link to="articles" smooth={true} duration={1000} onClick={closeMobileMenu}>Aktualności</Link></li>
                <li><Link to="staff" smooth={true} duration={1000} onClick={closeMobileMenu}>Członkowie</Link></li>
                <li><Link to="portfolio" smooth={true} duration={1000} onClick={closeMobileMenu}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duration={1000} onClick={closeMobileMenu}>Kontakt</Link></li>
            </ul>
        </nav>
        </>
    );
  }

export default Navbar
