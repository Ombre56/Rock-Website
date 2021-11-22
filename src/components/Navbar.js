import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ navbarLinks }) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };
    return (
        <nav className="navbar">
            {menuClicked ? (
                <FiMenu size={25} className="navbar_menu" onClick={toggleMenuClick} />
            ) : (
                <FiX size={25} className="navbar_menu" onClick={toggleMenuClick} />
            )}
            <ul className={menuClicked ? "navbar_list" : "navbar_list navbar_list--active"}>
                {navbarLinks.map((item) => {
                    return (
                        <li className="navbar_item" key={item.title}>
                            <a className="navbar_link" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar
