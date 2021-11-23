import React from 'react';
import Navbar from '../components/Navbar';
import logo from '../images/logo.png';
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";
import './Header.css';

const navbarLinks = [
    {
        url: '#articles',
        title: 'Aktualności'
    },
    {
        url: '#staff',
        title: 'Członkowie'
    },
    {
        url: '#portfolio',
        title: 'Portfolio'
    },
    {
        url: '#contact',
        title: 'Kontakt'
    }
];

function Header() {
    const telephone = "+48 123 456 789";
    return (
        <div className="container">
            <p className="telephone">
                <BsFillTelephoneFill className="telephone_icon" /> {telephone}
            </p>
            <div className="social_media_container">
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <ImYoutube className="social_media" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <IoLogoFacebook className="social_media" />
                </a>
            </div>
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="navigation">
                <Navbar navbarLinks={navbarLinks} />
            </div>
        </div>
    )
}

export default Header
