import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './HomeBody.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceGrinWink, faCopyright, faFaceLaughBeam, faHandPointLeft, faAngleDoubleLeft, faAngleDoubleRight, faHandPointRight, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';

// HomeBody Component which is added to Main Component
export default function HomeBody() {

    const handleClick = useNavigate();

    const user = JSON.parse(localStorage.getItem("token"));

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
                            exploring and experiencing your leisure 
                            time with our articles through reading and writing...&nbsp;
                            <FontAwesomeIcon icon={faAngleDoubleRight} />
                            &nbsp;
                        <FontAwesomeIcon icon={faFaceGrinWink} />
                        &nbsp;
                        <FontAwesomeIcon icon={faFaceGrinWink} />
                        </p>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-outline-primary" 
                        onClick={() => {handleClick('/all-articles')}}>
                            There you go!!! &nbsp;
                            <FontAwesomeIcon icon={faFaceLaughBeam} />
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
            <div className="cards-container bg-image" >
                <h2>Explore our creations...</h2>
                <div className="m-2 d-flex flex-row justify-content-center">
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/articles.jpg"}/>
                            <Card.Body>
                                <Card.Title>Articles</Card.Title>
                                <Card.Text>
                                Find your interested article and read it!!
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleClick('/all-articles')}>Articles</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/author.jpg"} />
                            <Card.Body>
                                <Card.Title>Authors</Card.Title>
                                <Card.Text>
                                You can find all the authors and their articles
                                </Card.Text>
                                <Button variant="primary"  onClick={() => handleClick('/authors')}>Authors</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/genres.png"} />
                            <Card.Body>
                                <Card.Title>Genres</Card.Title>
                                <Card.Text>
                                You can find all the genres and its articles
                                </Card.Text>
                                <Button variant="primary" onClick={() => handleClick('/genres')}>Genres</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
            </div>
            <div className="about-us-container" id="aboutUs">
                <h2>About Us</h2>
                <div className="about-us-inner-container">
                    <div className="img-container">
                        <img src={process.env.PUBLIC_URL + "/images/blogging.jpg"} />
                    </div>
                    <div className="elements-container">
                        <ul>
                            <li className="list-item">Read different genred articles by exploring our page and services</li>
                            <li className="list-item">Write any type of article by logging in! (Need to register first!)</li>
                            <li className="list-item">Find all types of genres of your interests!</li>
                            <li className="list-item">Find various authors worldwide here in one click!</li>
                            
                        </ul>
                        {!user &&
                        <button className="btn btn-primary" onClick={() => {handleClick('/login')}}>
                            <FontAwesomeIcon icon={faHandPointRight} /> &nbsp;
                            Login here to write an article!
                            &nbsp;
                            <FontAwesomeIcon icon={faHandPointLeft} />

                        </button>}

                        {user && 
                        <button className="btn btn-primary" onClick={() => {handleClick('/addarticle')}}>
                            <FontAwesomeIcon icon={faHandPointRight} /> &nbsp;
                            You can write an article here!
                            &nbsp;
                            <FontAwesomeIcon icon={faHandPointLeft} />

                        </button>}
                    </div>
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
                    <h6>Copyright &nbsp;
                    <FontAwesomeIcon icon={faCopyright} />&nbsp;
                    2022 &nbsp; Saga. All Rights Reserved
                    </h6>
                </div>
               
            </div>
           
        </div>
    )
}
