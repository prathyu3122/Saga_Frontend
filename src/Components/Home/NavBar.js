import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="navigation-container">
            <ul>
                <NavLink>
                    <li class="list-item"><Link to="/aboutus">About Us</Link></li>
                    <li class="list-item"><Link to="/genres">Genres</Link></li>
                    <li class="list-item"><Link to="/authors">Authors</Link></li> 
                    <li class="list-item"><Link to="/login">
                            <button className="btn btn-primary">
                                Write an Article?
                            </button>
                        </Link></li> 
                    <li class="list-item">
                        <Link to="/login">
                            <button className="btn btn-primary">
                                Log In
                            </button>
                        </Link>
                    </li>
                    <li class="list-item">
                        <Link to="/login">
                            <button className="btn btn-primary">
                                Sign Up
                            </button>
                        </Link>
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}
