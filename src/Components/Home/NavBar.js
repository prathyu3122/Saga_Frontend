import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';

export default function NavBar() {

    return (
        <div className="navigation-container d-flex flex-column justify-content-center">
            <ul className="">
                <NavLink>
                    <li class="list-item"><Link to="/aboutus">About Us</Link></li>
                    <li class="list-item"><Link to="/genres">Genres</Link></li>
                    <li class="list-item"><Link to="/authors">Authors</Link></li> 
                    <li class="list-item"><Link to="/login">
                            <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faPenToSquare} />
                            &nbsp;&nbsp;
                                Write an Article?
                            </button>
                        </Link></li> 
                    <li class="list-item">
                        <Link to="/login">
                            <button className="btn btn-primary">
                                Log In &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </button>
                        </Link>
                    </li>
                    {/* <li class="list-item">
                        <Link to="/login">
                            <button className="btn btn-primary">
                                Sign Up
                            </button>
                        </Link>
                    </li> */}
                </NavLink>
            </ul>
        </div>
    )
}
