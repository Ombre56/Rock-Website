import React from 'react';
import '../styles/Articles.css';
import { data } from '../data/Articles';

function Articles() {
    const header = "Aktualnosci";

    return (
        <div className="articles-container">
            <h1 className="header_article">{header}</h1>
            {data.map(({  id, title, date, image,  text }) => (
                    <div key={id} className="article-container">
                        <div className="left-side">
                            <h3 className="article-title">{title}</h3>
                            <img className="article-image" src={image} alt={id} />
                        </div>
                        <div className="right-side">
                            <span className="article-date">{date}</span>
                            <p className="article-text">{text}</p>
                        </div>
                    </div> 
                ))}
        </div >
    );
}

export default Articles
