import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';

import NavBar from './NavBar';

export default function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="header-container">
                    <div>
                        <img src="logo-color.png" alt="logo"
                        className="logo-img" />
                    </div>
                    <NavBar />
                </div>
            </div>
        </div>
    )
}
