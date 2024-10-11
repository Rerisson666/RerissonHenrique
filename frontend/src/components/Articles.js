import React, { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/articles')
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div className="articles">
            <h2>Últimos Artigos</h2>
            <div className="article-list">
                {articles.map((article, index) => (
                    <div key={index} className="article-card">
                        <img src={article.image_url} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
