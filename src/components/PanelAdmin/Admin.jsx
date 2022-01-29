import React, { useState } from 'react'
import { useBetween } from 'use-between';
import '../../styles/Admin.css';
import AddArticle from './AddArticle';
import StateArticles from './StateArticles';

function Admin() {
    const { articlesData, articles, setArticlesData } = useBetween(StateArticles);
    const [showAddArticle, setShowAddArticle] = useState(false);

    let articleId = 1;

    const deleteArticle = (id) => {
        if (window.confirm("Jesteś tego pewny?")) {
            setArticlesData(articlesData.filter(item => item.id !== id))
        }
    }

    const handleShowAddArticle = () => {
        setShowAddArticle(!showAddArticle)
    }


    return (
        <>
            {articles ?
                <div className='admin-container'>
                    <hr />
                    <div className="admin-title">Lista artykułów</div>
                    <hr />
                    <div className="admin-container-records">
                        {articlesData.map(({ id, title }) => (
                            <ul key={id} className="admin-records">
                                <li>Nr.: {articleId++ }</li>
                                <li>{title}</li>
                                <div className="admin-button-delete" onClick={() => deleteArticle(id)}>Usuń</div>
                            </ul>
                        ))}
                    </div>
                    <div className="admin-button-add" onClick={handleShowAddArticle}>Dodaj nowy</div>
                    <div className={showAddArticle ? "form-add-article" : "form-add-article-none"} >
                        <AddArticle />
                    </div>
            </div> : null
            }
        </>
    )
}

export default Admin
