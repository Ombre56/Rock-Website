import React, { useState } from 'react'
import { useBetween } from 'use-between';
import '../../styles/AddArticle.css';
import StateArticles from './StateArticles';

function AddArticle() {
    const [form, setForm] = useState({
        id: '',
        title: '',
        date: '',
        image: '',
        text: ''
    });
    const { articlesData, articles, showAddArticle ,setArticlesData, setArticles, setShowAddArticle } = useBetween(StateArticles);

    const newId = Math.round(Math.random(form.id)*(30-4)+4);
    const today = new Date()
    const localeDate = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

    const changeArticlesData = () => {
        const newArticlesData = articlesData.concat(form)
        setArticlesData(newArticlesData);
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
                setForm({ ...form, image: reader.result })
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const addNewArticle = e => {
        e.preventDefault();
        form.date = localeDate;
        form.id++;
        form.id = newId;

        changeArticlesData();
        setForm({
            title: '',
            image: '',
            text: ''
        });

        setArticles(!articles);
        setShowAddArticle(!showAddArticle);
    }
    
    return (
        <div>
             <hr />
            <form onSubmit={addNewArticle} className='add-article-container'>
                <label htmlFor="title">Tytuł:
                    <input
                        type="text"
                        name="title"
                        id='title'
                        maxLength={16}
                        className='add-article-title'
                        value={form.title}
                          onChange={(e) => setForm({...form, title: e.target.value})}
                    />
                </label><br />
                <label htmlFor="file">Zdjęcie:
                    <input
                        type="file"
                        id='file'
                        name="image"
                        accept='image/png, image/jpeg'
                        max-size="20"
                        className='add-article-image'
                        onChange={imageHandler}
                    />
                </label><br />
                <label htmlFor="description">Opis: <br />
                    <textarea
                        style={{ resize: "none" }}
                        rows="4"
                        id='text'
                        cols="30"
                        value={form.text}
                        className='add-article-description'
                        onChange={(e) => setForm({...form, text: e.target.value})}
                    />
                </label><br />
                <button type="submit" className='add-article-button'>Dodaj</button>
            </form>
        </div>
    )
}

export default AddArticle
