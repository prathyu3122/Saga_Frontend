import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router';

export default function Article() {
   
    const [articlesrecord, setArticlesrecord] = useState([]);
    const {state} = useLocation();
    console.log(state.articleName);

    useEffect(() => {
        fetch("http://localhost:8080/saga/article/" + state.articleName)
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
                <div>
                    {articlesrecord && articlesrecord.map(record => (
                        <div>
                            <h1>{record.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
