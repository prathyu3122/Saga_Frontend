import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../Navigation/NavBar'
import './Article.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router';
import "css-doodle";
import Doodle from '../doodle';

//Article Component is for displaying an article while viewing
export default function Article() {
   
    const {state} = useLocation();
    const {articleImage, articleName, articleDescription, articlePublishingDate, articleAuthor} = state;

    return (
        <div className="body-container">
            <NavBar />
            <div className="article-container">
                <div>
                <Doodle
                            rule={`
                            :doodle {
                                @grid: 40 / 100vmax;
                              }
                              
                              --hue: calc(200 + .1 * @row() * @col());
                                background: hsla(var(--hue), 50%, 70%, @r(.1, .6));
                              clip-path: ellipse(100% 100% at @pick('0 0', '0 100%', '100% 0', '100% 100%')); `}
                        />
                </div>
                <div className="content-container">
                    <div className="image-container">
                        <img src={articleImage} />
                    </div>
                    <div className="description-container">
                        <p className="title">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        &nbsp;
                        {articleName}
                        &nbsp;
                        <FontAwesomeIcon icon={faQuoteRight} />&nbsp;
                        </p>
                        <p className="description">
                        {articleDescription}
                        </p>
                        <p className="author">
                            <FontAwesomeIcon icon={faFeather} />
                            <span className="side-heading">Author : </span>
                            {articleAuthor}
                        </p>
                        {/* <p className="author"><span className="side-heading">Published On:</span>{articlePublishingDate}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
