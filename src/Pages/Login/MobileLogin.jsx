<<<<<<< HEAD
import React from "react";
import '../Page.css'
import { Link } from "react-router-dom";

const MobileLogin = () => {
    return (
        <div className='container'>            
            <div className='notification-text'><h2>Enter your number</h2></div>
            <div className='number-field'>
                <div className='text'>+84</div>                
                <input type="tel" className='input-text'/>                
            </div>            
            <Link to="/MobileOTP" style={{ textDecoration: 'none' , color:"black"}}><div className='Login-Button-number'>Login</div></Link>
            <Link to="/login" style={{ textDecoration: 'none' , color:"black"}}><div className='Back-Button'>Back</div></Link>
        </div>
    )
}

=======
import React from "react";
import '../Page.css'
import { Link } from "react-router-dom";

const MobileLogin = () => {
    return (
        <div className='container'>            
            <div className='notification-text'><h2>Enter your number</h2></div>
            <div className='number-field'>
                <div className='text'>+84</div>                
                <input type="tel" className='input-text'/>                
            </div>            
            <Link to="/MobileOTP" style={{ textDecoration: 'none' , color:"black"}}><div className='Login-Button-number'>Login</div></Link>
            <Link to="../" style={{ textDecoration: 'none' , color:"black"}}><div className='Back-Button'>Back</div></Link>
        </div>
    )
}

>>>>>>> e75cd1c1b953a9aef5cb9b82ed97700cfa853101
export default MobileLogin