import React from 'react';
import '../styles/Slider.css';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/slider1.jpg';
import img2 from '../images/slider2.jpg';
import img3 from '../images/slider3.jpg';


function Slider() {
    return (
        <div>
            <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} transitionTime={1500}>
            <div>
                <img src={img1} alt="slider1" />
            </div>
            <div>
                <img src={img2} alt="slider1"  />
            </div>
            <div>
                <img src={img3} alt="slider1"  />
            </div>
            </Carousel>
        </div>
    )
}

export default Slider;
