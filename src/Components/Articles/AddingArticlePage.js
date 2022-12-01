import React , { useState } from 'react'
import axios from 'axios';
import NavBar from '../Navigation/NavBar'
import './AddingArticlePage.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router';

export default function AddingArticlePage() {

    const backNavigate = useNavigate();

    const [Articles, setArticles] = useState([
        {
            "author" : "",
            "description" : "",
            "genre" : "",
            "imageurl" : "",
            "publishing_date" : "",
            "title": "",
            "subtitle" : ""
        }
    ]);

    function changeDetails(e) {
        let val = e.target.value;
        setArticles({...Articles, [e.target.name]: val})
    }

    const insertRecord = async (e) => {
        await axios.post("http://localhost:8080/saga/addarticle", Articles);
        
    }

    return (
        <div className="">
            <NavBar />
            <div className="addingForm-container">
                <h1>Add your article here &nbsp;
                <FontAwesomeIcon icon={faArrowDown} />
                </h1>
                <form id="addingArticleForm" className="p-4 ml-5 mr-5">
                    <div className="form-group m-4">
                        <label for="title">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" value={Articles.title} onChange={(e) => changeDetails(e)} />
                    </div>
                    <div className="form-group m-4">
                        <label for="subtitle">Sub Title:</label>
                        <input type="text" id="subtitle" className="form-control" name="subtitle" value={Articles.subtitle} onChange={(e) => changeDetails(e)} />
                    </div>
                    <div className="form-group m-4">
                        <label for="genre">Genre:</label>
                        <input type="text" id="genre" className="form-control" name="genre" value={Articles.genre} onChange={(e) => changeDetails(e)}/>
                    </div>
                    <div className="form-group m-4">
                        <label>Description:</label>
                        <textarea className="form-control" form="addingArticleForm" name="description" rows="20" onChange={(e) => changeDetails(e)}></textarea>
                        {/* <input type="text" className="form-control" name="description" value={Articles.description}/> */}
                    </div>
                    <div className="form-group m-4">
                        <label>Author:</label>
                        <input type="text" className="form-control" name="author" value={Articles.author} onChange={(e) => changeDetails(e)}/>
                    </div>
                    <div className="form-group m-4">
                        <label>Image Url:</label>
                        <input type="text" className="form-control" name="imageurl" value={Articles.imageurl}  onChange={(e) => changeDetails(e)}/>
                    </div>
                    <div className="form-group m-4">
                        <label>Publishing Date:</label>
                        <input type="text" className="form-control" name="publishingdate" value={Articles.publishing_date} onClick={(e) => insertRecord(e)} />
                    </div>
                    
                    <input className="btn btn-primary add-button" type="button" name="insert" value="Add Article +" onClick={(e) => insertRecord(e)} />
                </form>
            </div>
            <div className="d-flex flex-row justify-content-start m-3">
                <Button variant="primary" type="button">
                    <FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;
                    Back
                </Button>
            </div>
        </div>
    )
}