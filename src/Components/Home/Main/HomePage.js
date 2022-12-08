import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';

import NavBar from '../../Navigation/NavBar'
import HomeBody from '../Body/HomeBody'

//Main page Component which has HomeBody Component with all details
export default function Home() {
    return (
        <div className="home-container">
            <div>
                <NavBar />
                <div className="main-container mt-4">
                    <HomeBody />
                </div>
            </div>
        </div>
    )
}
