import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AllArticles.css'
import Button from 'react-bootstrap/Button';
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';
import Doodle from '../doodle';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';

//AllArticles Component which displays all the articles available
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

    const viewArticle = useNavigate();
    const navigateBack = useNavigate();

    // Search Functionality
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title"]);


    function searchArticles() {
        return articlesrecord.filter((article) => {
            return searchParam.some((newArticle) => {
                return (
                    article[newArticle]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <div>
            <NavBar />
            <div className="d-flex flex-column justify-content-center">
                <div className="searchbar-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" name="search-input" id="search-input" 
                    placeholder="Search for an Article here..." value={q} 
                    onChange={(e) => setQ(e.target.value)}
                    />
                </div>
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
                <div className="inner-container">
                    <h1>Articles</h1>
                    <div className="articles-holder-container">
                        {searchArticles(articlesrecord) && searchArticles(articlesrecord).map(record => (
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
                    <div className="d-flex flex-row justify-content-start m-3">
                        <Button variant="primary" type="button" onClick={() => {navigateBack('/')}}>
                            <FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
