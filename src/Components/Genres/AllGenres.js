import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './AllGenres.css'
import NavBar from '../Navigation/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function AllGenres() {
   
    const [genresrecord, setGenresrecord] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/saga/all-genres")
        .then(genres => genres.json())
        .then((genres) => {
            setGenresrecord(genres);
        });

    }, [])


    return (
        <div>
            <NavBar />
            <div className="d-flex flex-column justify-content-center">
                <div className="searchbar-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Search for Genre here..." />
                </div>
                <h1>Genres</h1>
                <div className="genres-holder-container">
                    {genresrecord && genresrecord.map(record => (
                        <div key={record.id} className="card">
                        <img className="card-img-top" src={record.gimage} alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">{record.gname}</h5>
                            <a href="" className="btn btn-primary">View Articles &nbsp;
                            <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
