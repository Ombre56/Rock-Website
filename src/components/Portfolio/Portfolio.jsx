import React from 'react'
import './Portfolio.css'

import ReactAudioPlayer from 'react-audio-player';

function Portfolio() {

    return (
        <div>
            <h3 className="header_portfolio">PORTFOLIO</h3>
            <div className="portfolio">
                <div className="list">
                    <h1><p>Zespół Rockowy - McRollen Rock</p>
                        <p>Zespół Rockowy - Guitar Hero</p>
                        <p>Zespół Rockowy - Coś Miałem w Głowie</p>
                        <p>Zespół Rockowy - Na Wieży Leży Jerzy</p>
                        <p>Zespół Rockowy - Łamacz Nóg</p>
                        <p>Zespół Rockowy - Dżemowy Leń</p>
                        <p>Zespół Rockowy - Rozsądek za Żołądkiem</p></h1>
                </div>
                <div className="list2">
                    <h1><p>Zespół Rockowy - Łamacz Nóg</p>
                        <p>Zespół Rockowy - Dżemowy Leń</p>
                        <p>Zespół Rockowy - Rozsądek za Żołądkiem</p>
                        <p>Zespół Rockowy - McRollen Rock</p>
                        <p>Zespół Rockowy - Guitar Hero</p>
                        <p>Zespół Rockowy - Coś Miałem w Głowie</p>
                        <p>Zespół Rockowy - Na Wieży Leży Jerzy</p></h1>
                </div>
            </div>
            <div className="songTitle">
                <p>Zespół Rockowy - Chill Theme</p>
            </div>
            <div className="ReactAudioPlayer">
                <ReactAudioPlayer
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
                    autoPlay
                    controls
                />
            </div>
        </div>
    )
}

export default Portfolio
