import React, { useState } from "react";
import './Page.css'
import profilePic from './Asset/google-logo.png'
import profilePic1 from './Asset/facebook-logo.png'
import profilePic2 from './Asset/smartphone-logo.png'
import profilePic3 from './Asset/mail-logo.png'
import { Link } from "react-router-dom";

const Login = () => {

    const [menuLogin,setMenuLogin] = useState("login")

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'><h2> Login</h2> </div>                
            </div>
            <div className='Choice'>
                <div className='signup-google' onClick={() =>{setMenuLogin("goolge")}}>
                    
                    <img src={profilePic} className='google-img' alt="googleicon" />
                    <div className='text'> Login with Google </div>
                    
                </div>
                
                <div className='signup-facebook' onClick={() =>{setMenuLogin("facebook")}}>
                    <img src={profilePic1} className='facebook-img' alt="facebookicon" />
                    <div className='text'> Login with Facebook </div>
                    
                </div>
                
                <Link to="./MobileLogin">
                    <div className='signup-mobile' onClick={() =>{setMenuLogin("mobile")}}>                                     
                        <img src={profilePic2} className='mobile-img' alt="mobileicon" />
                        <div className='text'> Login with Mobile Number </div>                    
                    </div>
                </Link>    
                
                <Link to="./EmailLogin">
                    <div className='signup-email' onClick={() =>{setMenuLogin("email")}}>
                        <img src={profilePic3} className='mail-img' alt="mailicon" />
                        <div className='text'> Login with Email </div>                             
                    </div>
                </Link>

                <Link to="./EmailLogin">
                    <div className='signup-email' onClick={() =>{setMenuLogin("email")}}>
                        <img src={profilePic3} className='mail-img' alt="mailicon" />
                        <div className='text'> Login with Email </div>                             
                    </div>
                </Link>
                
                <div className='back-container' onClick={() =>{setMenuLogin("login")}}>                    
                    <div className='back'>Back</div>
                    
                </div>                 
            </div>                    
        </div>
    )
}

export default Login