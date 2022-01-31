import React, { useState } from 'react'
import { useBetween } from 'use-between';
import '../../styles/Admin.css';
import AddArticle from './AddArticle';
import StateArticles from './StateArticles';
import { FaRegTimesCircle } from 'react-icons/fa';

function Admin() {
    const { articlesData, articles, setArticlesData, setArticles } = useBetween(StateArticles);
    const [showAddArticle, setShowAddArticle] = useState(false);

    let articleId = 1;

    const deleteArticle = (id) => {
            setArticlesData(articlesData.filter(item => item.id !== id))
    }

    const handleShowAddArticle = () => {
        setShowAddArticle(!showAddArticle)
    }

    const handleCloseArticles = () => setArticles(!articles);

    return (
        <>
            {articles ?
                <div className='admin-container'>
                    <hr />
                    <div className="admin-title">Lista artykułów</div>
                    <FaRegTimesCircle className='buttonCloseArticlesForm' onClick={handleCloseArticles} >X</FaRegTimesCircle>
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
