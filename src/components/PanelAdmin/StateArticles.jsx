import { useState } from 'react'
import { data } from '../../data/Articles';

function StateArticles() {
    const [articlesData, setArticlesData] = useState(data);
    const [articles, setArticles] = useState(false);
    const [checkAdmin, setCheckAdmin] = useState(false);
    const [showAddArticle, setShowAddArticle] = useState(false);
    return {
        articlesData,
        setArticlesData,
        articles,
        setArticles,
        checkAdmin,
        setCheckAdmin,
        showAddArticle,
        setShowAddArticle
    };
};

export default StateArticles;
