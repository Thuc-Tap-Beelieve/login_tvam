import React, { useState } from "react";
import axios from 'axios';
import '../Page.css'
import { Link, useNavigate } from 'react-router-dom';
// import Validation from "./LoginValidation.jsx"

function EmailLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // })

    // const [errors,setErrors] = useState({})
    // const handleInput = (e) => {
    //     setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
    // }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // setErrors(Validation(values))

        // Gửi yêu cầu đăng nhập đến API
        
            axios
            .post('http://localhost:5000/api/v1/auth/login', {
            email: email,
            password: password
        })
            .then((response) => {
                // Xử lý phản hồi thành công    
                         
                console.log(response.data);
                if (response.data.err === 0) {
                    localStorage.setItem('token', response.data['access token'])

                    navigate('/home')
                } else {
                    alert(response.data.mess)
                }
            })
            .catch((error) => {
                // Xử lý lỗi
                alert('that bai');
                console.error(error);
            });        
    };

    return (
        <div className='container'>            
            <div className='notification-text'><h2>Login With Email</h2></div>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>            
                    <div>
                        <p className="email-title">Email</p>                        
                        <input type='email' className='input-text' name='email' value={email}
                        onChange={handleEmailChange} required/>
                        {/* {errors.email && <span className='text-danger'> {errors.email} </span>} */}
                    </div>
                    <div>
                        <p className="password-title">Password</p>
                        <input type='password' className='input-text' name='password' value={password}
                        onChange={handlePasswordChange} required/>   
                        {/* {errors.password && <span className='text-danger'> {errors.password} </span>} */}
                    </div>             
                </div>           
                <button type="submit" className="Login-Button">Login</button>
                <Link to="../" style={{ textDecoration: 'none' , color:"black"}}><div className='Back-Button'>Back</div></Link>          
            </form>
        </div>
    )
}

export default EmailLogin