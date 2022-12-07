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
            "title": ""
        }
    ]);


    function changeDetails(e) {
        let val = e.target.value;
        setArticles({...Articles, [e.target.name]: val})
    }

    const onSubmission = (event) => {
        event.preventDefault();
    }

    const insertRecord = async (e) => {
        try {
            await axios.post("http://localhost:8080/saga/addarticle", Articles);
            await alert("Article added Successfully!!!");
            await backNavigate('/home');
        }
        catch(message) {
            alert("Enter all the values for successful uploading!!");
        }
        
    }

    return (
        <div className="">
            <NavBar />
            <div className="addingForm-container" id="addingFormContainer">
                <h1>Add your article here &nbsp;
                <FontAwesomeIcon icon={faArrowDown} />
                </h1>
                <form id="addingArticleForm" className="p-4 ml-5 mr-5" onSubmit={onSubmission}>
                    <div className="form-group m-4">
                        <label for="title">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" value={Articles.title} onChange={(e) => changeDetails(e)} />
                    </div>
                    <div className="form-group m-4">
                        <label for="genre">Genre:</label>
                        <input type="text" id="genre" className="form-control" name="genre" value={Articles.genre} onChange={(e) => changeDetails(e)}/>
                    </div>
                    <div className="form-group m-4">
                        <label>Description:</label>
                        <textarea className="form-control" id="description" form="addingArticleForm" name="description" rows="20" onChange={(e) => changeDetails(e)}></textarea>
                        {/* <input type="text" className="form-control" name="description" value={Articles.description}/> */}
                    </div>
                    <div className="form-group m-4">
                        <label>Author:</label>
                        <input type="text" className="form-control" name="author" value={Articles.author} onChange={(e) => changeDetails(e)}/>
                    </div>
                    <div className="form-group m-4">
                        <label>Image Url:</label>
                        <input type="text" className="form-control" id="imgUrl" name="imageurl" value={Articles.imageurl}  onChange={(e) => changeDetails(e)}/>
                    </div>
                    <div className="form-group m-4">
                        <label>Publishing Date:</label>
                        <input type="text" className="form-control" id="pdate" name="publishingdate" value={Articles.publishing_date} onClick={(e) => insertRecord(e)} />
                    </div>
                    
                    <input className="btn btn-primary add-button" type="submit" name="insert" value="Add Article +" onClick={(e) => insertRecord(e)} />
                </form>
            </div>
            {/* <div id="messageContainer" className="d-none" onClick={onSubmission}>
                <h1>{message}</h1>
            </div> */}
            <div className="d-flex flex-row justify-content-start m-3">
                <Button variant="primary" type="button" onClick={() => backNavigate('/home')}>
                    <FontAwesomeIcon icon={faArrowLeft} />&nbsp;&nbsp;
                    Back
                </Button>
            </div>
        </div>
    )
}
