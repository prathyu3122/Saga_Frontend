import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Doodle from '../doodle';
import { Link, useNavigate } from 'react-router-dom';

//Registration Component with validations
export default function Register() {

    function handleForm() {
        handleUsername();
        handleEmail();
        handlePassword();
        handleConfirmPassword();
    }

    function handleUsername() {

        let name = document.getElementById('username').value;

        let regName = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        if (name === "") {
            window.alert("Please enter your username!");
            name.focus();
            return false;
        }
    }
    function handleEmail() {
        
        let email = document.getElementById('email').value;

        let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        if (email === "" || !regEmail.test(email)) {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
        }

    }
    function handlePassword() {

        let password = document.getElementById('password').value;

        let regPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if(!regPassword.test(password)) {
            alert("Please enter correct password with all types of characters included.");
            password.focus();
            return false;
        }
    }
    function handleConfirmPassword() {

        let password = document.getElementById('password').value;
        let confirmpassword = document.getElementById('cpassword').value;

        if(password !== confirmpassword) {
            alert("Confirm Password should match with password");
            confirmpassword.focus();
            return false;
        }
    }

    const handleClick = useNavigate();

    const [User, setUser] = useState([
        {
            "username" : "",
            "email" : "",
            "password" : ""
        }
    ]);

    function changeDetails(e) {
        let val = e.target.value;
        setUser({...User, [e.target.name]: val})
    }

    const insertUser = async (e) => {
        await axios.post("http://localhost:8080/saga/addUser", User);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleForm();
        alert("Successfully Registered!!");
        handleClick('/');
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
            <div className="registration-container">
                
                <div className="registration-form">
                    <div className="logo-container d-flex flex-row m-0 pb-5" >
                        <img src="logo-color.png" alt="logo"
                            className="logo-img" onClick={() => {handleClick('/login')}} />
                        
                        <h1>SIGN UP</h1>
                      
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" value={User.username} onChange={(e) => changeDetails(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email ID:</label>
                            <input type="email" className="form-control" id="email" name="email" value={User.email} onChange={(e) => changeDetails(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" value={User.password} onChange={(e) => changeDetails(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password:</label>
                            <input type="password" className="form-control" id="cpassword" name="cpassword" />
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <input className="btn btn-primary add-button" type="submit" name="insert" value="Register" onClick={(e) => insertUser(e)} />
                        </div>
                        <div className="d-flex flex-row justify-content-center">
                            <span className="login-here-container">Already a User ? &nbsp;
                                <Link to="/login">Login Here</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
