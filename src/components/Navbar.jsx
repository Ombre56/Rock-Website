import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';
import LoginForm from './PanelAdmin/LoginForm';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { ImYoutube } from 'react-icons/im';
import { RiAdminFill } from 'react-icons/ri';
import { IoLogoFacebook } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import '../styles/Navbar.css';
import { useBetween } from 'use-between';
import StateArticles from './PanelAdmin/StateArticles';
import Admin from './PanelAdmin/Admin';

function Navbar() {
    const [click, setClick] = useState(false);
    const [nav, setNav] = useState(false);
    const [login, setLogin] = useState(false);
    const { articles, checkAdmin , setArticles, setCheckAdmin } = useBetween(StateArticles);

    const openFormLogin = () => setLogin(!login);

    const changeBackground = () => {
        const scrollWindow = window.scrollY >= 50;
        setNav(scrollWindow)
    }

    window.addEventListener('scroll', changeBackground);
    const handleClick = () => setClick(!click);
    const handleClickArticles = () => setArticles(!articles);
    const closeMobileMenu = () => setClick(false);

    const handleClickLogout = () => {
        if (window.confirm("Jesteś tego pewny?")) {
            setCheckAdmin(!checkAdmin);
            setArticles(false);
            alert("Wylogowałeś się!");
        }
    }

    const telephone = "+48 123 456 789";

    const handleForm  = () => setLogin(false);
  
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
                <li><Link to="articles"  smooth={true} duration={1000} onClick={closeMobileMenu}>Aktualności</Link></li>
                <li><Link to="staff" smooth={true} duration={1000} onClick={closeMobileMenu}>Członkowie</Link></li>
                <li><Link to="portfolio" smooth={true} duration={1000} onClick={closeMobileMenu}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duration={1000} onClick={closeMobileMenu}>Kontakt</Link></li>
                <li className={checkAdmin ? "articles_list" : "articles_list-none"} onClick={handleClickArticles}>Lista artykułów</li>
                <li>
                    <Link to='' className="admin-button" onClick={openFormLogin}>
                            {
                                checkAdmin ?
                                    <AiOutlineLogout className='admin-button-logout' onClick={handleClickLogout}/>
                                    : <RiAdminFill />
                            }
                    </Link>
                </li>
            </ul>
        </nav>
            <div className="admin-articles">
                <Admin/>
            </div>    
        <div className={login ? "admin-form" : "admin-form-none"}>
            <FaRegTimesCircle className="buttonCloseForm" onClick={handleForm}>X</FaRegTimesCircle>
            <LoginForm />      
            </div>
        </>
    );
  }

export default Navbar;
