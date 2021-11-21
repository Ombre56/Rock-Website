import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Navbar from '../components/Navbar/Navbar';
import logo from '../images/logo.png';
import youtube from '../images/youtube_icon.png';
import facebook from '../images/facebook_icon.png';
import './style.css';

function Header() {
    const telephone = "+48 123 456 789";
    return (
        <div className="container">
            <div className="left_container">
                <div className="telephone">
                    <p className="number_telephone">
                        <Icon.TelephoneFill className="telephone_icon" /> {telephone}
                    </p>
                </div>
                <div className="social_media">
                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                        <img
                            sizes="(max-width: 67px) 100vw, 67px"
                            srcSet={youtube}
                            src={youtube}
                            alt="Youtube" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img
                            sizes="(max-width: 67px) 100vw, 67px"
                            srcSet={facebook}
                            src={facebook}
                            alt="Youtube" />
                    </a>
                </div>
            </div>
            <div className="logo">
                <a href="#home">
                    <picture>
                        <img src={logo} alt="logo" />
                    </picture>
                </a>
            </div>
            <div className="navigation">
                <Navbar />
            </div>
        </div>
    )
}

export default Header
