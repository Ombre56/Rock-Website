import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';

const list = [
    { name: "Home", path: "/", exact: true },
    { name: "Aktualności", path: "/articles" },
    { name: "Członkowie", path: "/staff" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Kontakt", path: "/contact" },
]
function Navigation() {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation
