import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Doodle from '../doodle';
import axios from 'axios';


export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleClick = useNavigate();

    const [User, setUser] = useState([
        {
            "username" : "",
            "password" : ""
        }
    ]);

    function changeDetails(e) {
        let val = e.target.value;
        setUser({...User, [e.target.name]: val})
    }

    const verifyUser = async (e) => {

        let username = document.getElementById('username').value;
        let result;
        try {
            result = await axios.post("http://localhost:8080/saga/verifyUser", User);
        }
        catch(err) {
            alert("Enter Username and Password to Login!")
        }

        //Login button local storage functionality
        if(result.data !== null) {
            const user = {
                username : User.username
            }
            localStorage.setItem('token', JSON.stringify(user));
        }
        //---------
        
        if(result.data === username) {
            alert("Login successful!");
            const loginUser = result.data;
            // handleClick('/', {state: {loginUser: loginUser}});
            handleClick('/');            
        }
        else {
            alert(result.data);
        }
    }


    return (
        <div className="d-flex flex-row justify-content-center">
            <div>
                <Doodle
                            rule={`
                            :doodle {
                                @grid: 10 / 100vmax;
                                background: #0d284a;
                              }
                              @shape: clover 5;
                              background: hsla(
                                calc(360 - @i * 4), 70%, 68%, @r.8
                              );
                              transform:
                                scale(@r(.2, 1))
                                translate(@m2.@r(±50%)); `}
                 />
            </div>
            <div className="login-container">
                
                <div className="login-form">
                    <div className="logo-container d-flex flex-row m-0 pb-5">
                        <img src="logo-color.png" alt="logo"
                            className="logo-img" onClick={() => {handleClick('/')}} />
                        
                        <h1>LOG IN</h1>
                      
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" value={User.username} onChange={(e) => changeDetails(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" value={User.password} onChange={(e) => changeDetails(e)}/>
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <input className="btn btn-primary add-button" type="submit" value="Log In" name="login" onClick={(e) => verifyUser(e)} />
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <span className="register-here-container">New User ? &nbsp;
                                <Link to="/register">Register Here</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
