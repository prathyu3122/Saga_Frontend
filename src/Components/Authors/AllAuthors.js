import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AllAuthors.css'
import Button from 'react-bootstrap/Button';
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';
import Doodle from '../doodle';

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
    const navigateBack = useNavigate();

    // Search Functionality
    const [q, setQ] = useState("");
    const [searchParam] = useState(["author"]);


    function searchAuthors() {
        return authorsrecord.filter((author) => {
            return searchParam.some((newAuthor) => {
                return (
                    author[newAuthor]
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
                    <input type="search" placeholder="Search for Author here..."
                    name="search-input" value={q} 
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
                <div className="container">
                    <h1>Authors</h1>
                    <div className="genres-holder-container">
                        {searchAuthors(authorsrecord) && searchAuthors(authorsrecord).map(record => (
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
