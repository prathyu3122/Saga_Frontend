import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Articles/AllArticles.css'
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router';

export default function AuthorPage() {
   
    const [articlesrecord, setArticlesrecord] = useState([]);
    const {state} = useLocation();
    console.log(state.authorName);

    useEffect(() => {
        fetch("http://localhost:8080/saga/author_articles/" + state.authorName)
        .then(articles => articles.json())
        .then((articles) => {
            console.log(articles);
            setArticlesrecord(articles);
        });

    }, []);

    return (
        <div>
            <NavBar />
            <div className="d-flex flex-column justify-content-center">
                <br />
                <h1>{state.authorName} Articles</h1>
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
                               <button className="btn btn-primary">View Article</button>
                           </div>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
