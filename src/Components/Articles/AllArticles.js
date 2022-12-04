import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AllArticles.css'
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';

export default function AllArticles() {
   
    const [articlesrecord, setArticlesrecord] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/saga/all_articles")
        .then(articles => articles.json())
        .then((articles) => {
            console.log(articles);
            setArticlesrecord(articles);
        });

    }, []);

    const [newArticleList, setNewArticlesList] = useState(articlesrecord);

    function displaySearchedResults() {
        let searchInput = document.getElementById('search-input').value;
        const searchedList = (newArticleList).filter(article => (article.title).includes(searchInput));
        setArticlesrecord(searchedList);
    }

    const viewArticle = useNavigate();

    return (
        <div>
            <NavBar />
            <div className="d-flex flex-column justify-content-center">
                <div className="searchbar-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" id="search-input" 
                    placeholder="Search for an Article here..."
                    onChange={displaySearchedResults} />
                </div>
                <h1>Articles</h1>
                <div className="articles-holder-container">
                    {articlesrecord && articlesrecord.map(record => (
                       <div key={record.id} className="card">
                           <img className="card-img-top" src={record.imageurl} alt="Card Image" />
                           <div className="card-body">
                                <div className="genre-container">
                                    <div className="genre-head d-flex flex-column justify-content-center">{(record.genre).charAt(0)}</div>
                                    <div className="d-flex flex-column justify-content-center genre-title">
                                        {record.genre}
                                    </div>
                                </div>
                                <div className="author-container">
                                    <div className="author-head d-flex flex-column justify-content-center">{(record.author).charAt(0)}</div>
                                    <div className="d-flex flex-column justify-content-center author-title">
                                        {record.author}
                                    </div>
                                </div>
                               <h5 className="card-title">{record.title}</h5>
                               <button className="btn btn-primary" 
                               onClick={() => {
                                   viewArticle('/article', {state: {articleName: record.title, 
                                                                    articleImage: record.imageurl, 
                                                                    articleDescription: record.description,
                                                                    articlePublishingDate: record.publishingdate,
                                                                    articleAuthor: record.author
                                                                }})}
                                   }>View Article</button>
                           </div>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
