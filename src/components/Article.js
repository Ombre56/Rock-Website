import React from 'react';
const Article = ({ title, date, text }) => {
    const styles = {
        marginTop: 10
    }
    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase"
            }}>{title}</h3>
            <span style={{
                display: 'block',
                marginBottom: 10,
                fontSize: 16,
                color: '#7b7b7b',
                textAlign: 'right',
                marginRight: 65
            }}>{date}</span>
            <p style={{ fontSize: 15 }}>{text}</p>
        </article>
    );
}
export default Article;