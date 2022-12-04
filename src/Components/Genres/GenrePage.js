import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../Articles/AllArticles.css'
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import Doodle from '../doodle';

export default function GenrePage() {
   
    const [articlesrecord, setArticlesrecord] = useState([]);
    const {state} = useLocation();
    // console.log(state.genreName);

    useEffect(() => {
        fetch("http://localhost:8080/saga/genre_articles/" + state.genreName)
        .then(articles => articles.json())
        .then((articles) => {
            console.log(articles);
            setArticlesrecord(articles);
        });

    }, []);

    console.log(articlesrecord);
    const viewArticle = useNavigate();

    return (
        <div>
            <NavBar />
            <div className="d-flex flex-column justify-content-center">
                <div>
                <Doodle
                            rule={`
                            :doodle {
                                @grid: 40 / 100vmax;
                              }
                              
                              --hue: calc(200 + .1 * @row() * @col());
                                background: hsla(var(--hue), 50%, 78%, @r(.1, .6));
                              clip-path: ellipse(100% 100% at @pick('0 0', '0 100%', '100% 0', '100% 100%')); `}
                        />
                </div>
                <div className="container">
                    <h1>{state.genreName} Articles</h1>
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
                                <button className="btn btn-primary" onClick={() => {
                                    viewArticle('/article', {state: {articleName: record.title, 
                                                                        articleImage: record.imageurl, 
                                                                        articleDescription: record.description,
                                                                        articlePublishingDate: record.publishingdate,
                                                                        articleAuthor: record.author
                                                                    }})}
                                    }
                                >View Article</button>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
