import React from 'react'
import logo from '../images/logo.png';
import youtube from '../images/youtube_icon.png';
import facebook from '../images/facebook_icon.png';
import './style.css';

function Header() {
    const telephone = "+48 123 456 789";
    return (
        <div className="container">
            <div className="social_media">
                <a href="https://www.youtube.com">
                    <img
                        sizes="(max-width: 64px) 100vw, 64px"
                        srcset={youtube}
                        src={youtube}
                        alt="Youtube" />
                </a>
                <a href="https://www.facebook.com">
                    <img
                        sizes="(max-width: 64px) 100vw, 64px"
                        srcset={facebook}
                        src={facebook}
                        alt="Youtube" />
                </a>
            </div>
            <div className="logo">
                <picture>
                    <img src={logo} alt="logo" />
                </picture>
            </div>
            <div className="telephone">
                <p className="number_telephone">
                    {telephone}
                </p>
            </div>
        </div>
    )
}

export default Header
