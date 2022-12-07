import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AllGenres.css'
import Button from 'react-bootstrap/Button';
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';
import Doodle from '../doodle';

export default function AllGenres() {
   
    const [genresrecord, setGenresrecord] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/saga/all-genres")
        .then(genres => genres.json())
        .then((genres) => {
            setGenresrecord(genres);
        });

    }, [])

    const viewArticlesOfGenre = useNavigate();
    const navigateBack = useNavigate();

    return (
        <div>
            <NavBar />
            <div className="d-flex flex-column justify-content-center">
                <div className="searchbar-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Search for Genre here..." />
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
                    <h1>Genres</h1>
                    <div className="genres-holder-container">
                        {genresrecord && genresrecord.map(record => (
                            <div key={record.id} className="card">
                            <img className="card-img-top" src={record.gimage} alt="Card Image" />
                            <div className="card-body">
                                <h5 className="card-title">{record.gname}</h5>
                                <button className="btn btn-primary" onClick={() => {viewArticlesOfGenre('/genre-articles', {state: {genreName: record.gname}})}}>View Articles &nbsp;
                                <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="d-flex flex-row justify-content-start m-3">
                        <Button variant="primary" type="button" onClick={() => {navigateBack('/home')}}>
                            <FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;
                            Back
                        </Button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
