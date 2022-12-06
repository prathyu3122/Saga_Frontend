import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './HomeBody.css';
import CarouselPart from './CarouselPart';
import DescriptionCard from './DescriptionCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinWink, faAngleDoubleLeft, faAngleDoubleRight, faHandPointRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';


export default function HomeBody() {

    const handleClick = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="blogging-img-container">
                <div className="page-description">
                    <div>
                        <h1><span className="welcome-container">Welcome to </span>Saga</h1>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />&nbsp;
                            Tinker your perplexed mind by 
                            exploring and experiencing your leisure time with our articles...&nbsp;
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                            &nbsp;
                        <FontAwesomeIcon icon={faFaceGrinWink} />
                        &nbsp;
                        <FontAwesomeIcon icon={faFaceGrinWink} />
                        </p>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-outline-primary" onClick={() => {handleClick('/all-articles')}}>There you go!!! &nbsp;
                        <FontAwesomeIcon icon={faHandPointRight} />
                        </button>
                    </div>
                </div>
                <div className="img-container">
                    <img src={process.env.PUBLIC_URL + "/images/blogging2.jpg"} />
                </div>
            </div>
            {/* <div className="carousel-container">
                <CarouselPart />
            </div> */}
            <div className="cards-container bg-image">
                <h2>Explore our creations...</h2>
                <div className="m-2 d-flex flex-row justify-content-center">
                    <DescriptionCard />
                    <DescriptionCard />
                    <DescriptionCard />
                </div>
                
            </div>
            <div className="footer-container">
                <div className="">
                    <h3>Follow Us</h3>
                    <ul className="d-flex flex-column justify-content-start">
                        <li>
                            <a href="https://www.instagram.com/accounts/login/">
                                <img src={process.env.PUBLIC_URL + "/images/instagram.png"} /> &nbsp;
                                saga_articles
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/">
                                <img src={process.env.PUBLIC_URL + "/images/facebook.png"} /> &nbsp;
                                saga_articles
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3>Contact Us</h3>
                    <ul className="d-flex flex-column justify-content-start">
                        <li><a>
                            <img src={process.env.PUBLIC_URL + "/images/gmail.png"} />&nbsp;
                            saga_articles@gmail.com</a>
                        </li>
                        <li><a>
                            <img src={process.env.PUBLIC_URL + "/images/call.png"} />&nbsp;
                            9876543210</a>
                        </li>
                    </ul>
                </div>
               
            </div>
           
        </div>
    )
}
