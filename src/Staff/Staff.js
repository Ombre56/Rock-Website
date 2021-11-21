import React from 'react'
import './style.css';
import Card1 from '../images/card1.jpg';
// import * as Icon from 'react-bootstrap-icons';
import Card2 from '../images/card2.jpg';
import Card3 from '../images/card3.jpg';

function Staff(title, body) {
    const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam vero aspernatur nemo reprehenderit magnam voluptatum repudiandae, itaque,`;
    return (
        <div className="container_staff">
            <h3 className="header_staff">CZLONKOWIE</h3>
            <div className="profiles">
                <div className="profile">
                    <img src={Card1} alt="Card1" className="profile_img" />
                    <h3 className="username">ZDZICHU Z CIEPLIC</h3>
                    <h5>Perkusista</h5>
                    <p>{text}</p>
                </div>
                <div className="profile">
                    <img src={Card2} alt="Card2" className="profile_img" />
                    <h3 className="username">GADGA MESSLER</h3>
                    <h5>Wokalista</h5>
                    <p>{text}</p>
                </div>
                <div className="profile">
                    <img src={Card3} alt="Card3" className="profile_img" />
                    <h3 className="username">EDZIU III WIELKI</h3>
                    <h5>Gitarzysta</h5>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Staff