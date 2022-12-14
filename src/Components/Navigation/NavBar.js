import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

//Navigation bar component. It is added for every page
export default function NavBar() {

    const handleClick = useNavigate();

    const user = JSON.parse(localStorage.getItem("token"));

    return (
        <div className="navigation-container">
            <div className="logo-container" onClick={() => {handleClick('/')}}>
                <img src="logo-color.png" alt="logo"
                    className="logo-img" />
            </div>
            <div className="d-flex flex-column justify-content-center">
                <ul>
                    <NavLink>
                        <li class="list-item"><AnchorLink href="#aboutUs">About Us</AnchorLink></li>
                        <li class="list-item"><Link to="/all-articles">Articles</Link></li>
                        <li class="list-item"><Link to="/genres">Genres</Link></li>
                        <li class="list-item"><Link to="/authors">Authors</Link></li> 
                        
                        {user && <li class="list-item">
                            <Link to="/addarticle">
                                <button className="btn btn-primary">
                                <FontAwesomeIcon icon={faPenToSquare} />
                                &nbsp;&nbsp;
                                    Write an Article?
                                </button>
                            </Link>
                        </li> }
                        
                        {!user && <li class="list-item">
                            <Link to="/login">
                            <button className="btn btn-primary">
                                Log In &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </button>
                            </Link>
                            </li>
                            }
                        {user && <li class="list-item">
                            <Link to="/">
                            <button className="btn btn-primary" onClick={() => {localStorage.removeItem('token')}}>
                                Log Out &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </button>
                            </Link>
                            </li>}
                    </NavLink>
                </ul>
            </div>
        </div>

    )
}
