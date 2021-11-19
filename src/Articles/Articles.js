import React from 'react'
import Article from '../components/Article';
import './style.css';

const articles = [
    {
        id: 1,
        title: "Koncert życzeń",
        date: "24.05.2021",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam vero aspernatur nemo reprehenderit magnam voluptatum repudiandae, itaque, asperiores accusantium molestiae hic? Ullam doloremque saepe totam dolorum aperiam esse sint. Nesciunt.
        Ipsum eum blanditiis error tempora, fugiat ullam non beatae minus nulla, aut quidem! Numquam vel voluptate facere tempora, error ea minima officia illum dolore excepturi cumque! Minus ducimus ut illo!
        Neque hic consectetur a accusamus deleniti, inventore aspernatur! Sapiente mollitia animi quo? Blanditiis, esse fugiat laborum possimus consequuntur consequatur ex sed deleniti. Voluptatum, excepturi! Aspernatur cupiditate omnis provident quam magni.
        Reprehenderit eum molestias ex incidunt ipsa enim soluta. Ut quisquam doloremque praesentium iste molestiae dolor eveniet? Provident illum deleniti debitis amet ut blanditiis, consequuntur ea, labore cum velit possimus voluptatem!`
    },
    {
        id: 2,
        title: "Spotkanie z fanami",
        date: "5.02.2021",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam vero aspernatur nemo reprehenderit magnam voluptatum repudiandae, itaque, asperiores accusantium molestiae hic? Ullam doloremque saepe totam dolorum aperiam esse sint. Nesciunt.
        Ipsum eum blanditiis error tempora, fugiat ullam non beatae minus nulla, aut quidem! Numquam vel voluptate facere tempora, error ea minima officia illum dolore excepturi cumque! Minus ducimus ut illo!
        Neque hic consectetur a accusamus deleniti, inventore aspernatur! Sapiente mollitia animi quo? Blanditiis, esse fugiat laborum possimus consequuntur consequatur ex sed deleniti. Voluptatum, excepturi! Aspernatur cupiditate omnis provident quam magni.
        Reprehenderit eum molestias ex incidunt ipsa enim soluta. Ut quisquam doloremque praesentium iste molestiae dolor eveniet? Provident illum deleniti debitis amet ut blanditiis, consequuntur ea, labore cum velit possimus voluptatem!`
    },
    {
        id: 3,
        title: "Sprzedaż koszulek ",
        date: "14.08.2021",
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam vero aspernatur nemo reprehenderit magnam voluptatum repudiandae, itaque, asperiores accusantium molestiae hic? Ullam doloremque saepe totam dolorum aperiam esse sint. Nesciunt.
        Ipsum eum blanditiis error tempora, fugiat ullam non beatae minus nulla, aut quidem! Numquam vel voluptate facere tempora, error ea minima officia illum dolore excepturi cumque! Minus ducimus ut illo!
        Neque hic consectetur a accusamus deleniti, inventore aspernatur! Sapiente mollitia animi quo? Blanditiis, esse fugiat laborum possimus consequuntur consequatur ex sed deleniti. Voluptatum, excepturi! Aspernatur cupiditate omnis provident quam magni.
        Reprehenderit eum molestias ex incidunt ipsa enim soluta. Ut quisquam doloremque praesentium iste molestiae dolor eveniet? Provident illum deleniti debitis amet ut blanditiis, consequuntur ea, labore cum velit possimus voluptatem!`
    },
]

const Articles = () => {
    const artlist = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    const header = "cos innego";
    return (
        <div className="articles">
            <h1 className="header_article">{header}</h1>
            {artlist}
        </div >
    );
}

export default Articles
