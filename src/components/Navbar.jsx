import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.png'
import './Navbar.css';

function Navbar() {
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

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='home' className="logo" smooth={true} duration={2000}>
                <img src={logo} alt="logo" />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="articles" smooth={true} duration={1000}>Aktualności</Link></li>
                <li><Link to="staff" smooth={true} duration={1000}>Członkowie</Link></li>
                <li><Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Kontakt</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
