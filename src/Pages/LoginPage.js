import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import '../assets/styles/LoginPage.css'

import '@fortawesome/fontawesome-free/css/all.min.css';


function LoginPage(props) {
    const [hidePassword, setHidePassword] = useState(false);

    const handlePasswordHide = () => {
        setHidePassword(!hidePassword);
    }
    return (
        <div>
            <div>
                <h5 className="loginPageBigHeader">SIGN IN WITH YOUR NBA ID</h5>
                <div className="loginBody">

                    <div className="loginPageInputGroup">
                        <label className="loginPageLabel" id="title">Email</label>
                        <input
                            className="loginPageInput"
                            type="text"

                        />
                    </div>

                    <div className="loginPageInputGroup">
                        <label className="loginPageLabel" id="titleTwo">Password</label>
                        <input
                            className="loginPageInput"
                            type={hidePassword ? "text" : "password"}

                        />
                        <i className={hidePassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}
                           onClick={() => handlePasswordHide()} style={{float: "right"}}></i>
                    </div>

                    <a role="button" className="forgotPassword">Forgot Password?</a>
                    <Button className="signButton">Sign in</Button>
                    <a className="loginPageLinkNbaId" role="button">Don’t have an NBA ID?</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;