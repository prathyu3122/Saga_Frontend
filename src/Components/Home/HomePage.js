import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';

import NavBar from './NavBar';
import CarouselPart from './CarouselPart'

export default function Home() {
    return (
        <div className="home-container">
            <div>
                <div className="header-container">
                    <div>
                        <img src="logo-color.png" alt="logo"
                        className="logo-img" />
                    </div>
                    <div>
                        <NavBar />
                    </div>
                </div>
                <div className="main-container mt-4">
                    <CarouselPart />
                </div>
            </div>
        </div>
    )
}
