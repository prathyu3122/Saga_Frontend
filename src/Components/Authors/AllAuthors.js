import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AllAuthors.css'
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';

export default function AllAuthors() {
   
    const [authorsrecord, setAuthorsrecord] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/saga/all-authors")
        .then(authors => authors.json())
        .then((authors) => {
            setAuthorsrecord(authors);
        });

    }, [])

    const viewArticlesOfAuthor = useNavigate();


    return (
        <div>
            <NavBar />
            <div className="d-flex flex-column justify-content-center">
                <div className="searchbar-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Search for Author here..." />
                </div>
                <h1>Authors</h1>
                <div className="genres-holder-container">
                    {authorsrecord && authorsrecord.map(record => (
                        <div key={record.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">{record.author}</h5>
                                <button className="btn btn-primary" onClick={() => {viewArticlesOfAuthor('/author-articles', {state: {authorName: record.author}})}}>View Articles &nbsp;
                                <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
