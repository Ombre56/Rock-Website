import React from 'react'
import './style.css';

function Navigation() {
    return (
        <nav className="main">
            <ul>
                <li><a href="/#articles">Aktualności</a></li>
                <li><a href="/#staff">Członkowie</a></li>
                <li><a href="/#portfolio">Portfolio</a></li>
                <li><a href="/#contact">Kontakt</a></li>
            </ul>
        </nav>
    );
}

export default Navigation
