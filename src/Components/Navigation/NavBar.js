import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

export default function NavBar() {

    const handleClick = useNavigate();

    return (
        <div className="navigation-container">
            <div className="logo-container" onClick={() => {handleClick('/')}}>
                <img src="logo-color.png" alt="logo"
                    className="logo-img" />
            </div>
            <div className="d-flex flex-column justify-content-center">
                <ul>
                    <NavLink>
                        <li class="list-item"><Link to="/About-Us">About Us</Link></li>
                        <li class="list-item"><Link to="/all-articles">Articles</Link></li>
                        <li class="list-item"><Link to="/genres">Genres</Link></li>
                        <li class="list-item"><Link to="/authors">Authors</Link></li> 
                        <li class="list-item d-block">
                            <Link to="/addarticle">
                                <button className="btn btn-primary">
                                <FontAwesomeIcon icon={faPenToSquare} />
                                &nbsp;&nbsp;
                                    Write an Article?
                                </button>
                            </Link>
                        </li> 
                        <li class="list-item">
                            <Link to="/login">
                                <button className="btn btn-primary">
                                    Log In &nbsp;&nbsp;
                                    <FontAwesomeIcon icon={faRightToBracket} />
                                </button>
                            </Link>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>

    )
}
