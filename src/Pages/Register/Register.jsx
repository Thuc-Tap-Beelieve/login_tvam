import React, { useState } from "react";
import axios from 'axios';
import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');    
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');    
  const [address, setAdress] = useState('');   
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const validatePassword = (password) => {
    return password.length > 8;
  };

  const validateMobile = (mobile) => {
    const regex = /^0\d{9}$/;
    return regex.test(mobile);
  };


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleAdressChange = (e) => {
    setAdress(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Email không hợp lệ');
      return;
    }

    if (!validatePassword(password)) {
      setError('Mật khẩu phải dài hơn 8 ký tự');
      return;
    }

    if (!validateMobile(mobile)) {
      setError('Số điện thoại phải bắt đầu bằng số 0 và có đúng 10 chữ số');
      return;
    }

    setError('');
    
    axios.post('http://localhost:5000/api/v1/auth/register', {
      email,
      password,
      name,
      mobile,
      address,
    })
    .then ((response) => {
      console.log(response.data);
      if (response.data.err === 0) {
        alert('Đăng ký thành công!');
        navigate('/');
      } else {
        alert(response.data.mess);
      }
    })
    .catch ((error) => {
      console.error('Đã xảy ra lỗi khi đăng ký', error);
      alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau.');
    });      
};
      

  return (
    <div className="register">
      <div className="register-container">
        <form className="register__form" onSubmit={handleRegister}>
          <h1 className="register__form__title">Đăng ký</h1>
          <div className="register__form__field">
            <label className="register__form__label">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              required
              className="register__form__input"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="register__form__field">
            <label className="register__form__label">Mật khẩu</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="register__form__input"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="register__form__field">
            <label className="register__form__label">Họ và tên</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="register__form__input"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="register__form__field">
            <label className="register__form__label">Số điện thoại</label>
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              required
              className="register__form__input"
              onChange={handleMobileChange}
              value={mobile}
            />
          </div>
          <div className="register__form__field">
            <label className="register__form__label">Địa chỉ</label>
            <input
              name="address"
              type="text"
              placeholder="Address"
              required
              className="register__form__input"
              onChange={handleAdressChange}
              value={address}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="register__btn__submit">
            <button type="submit" className="register__form__submit">
              Đăng ký
            </button>
          </div>
          <div className="from__login">
            <p className="register__form__text-register">
              Bạn đã có tài khoản?
              <Link to="../"  className="register__form__register"> 
                Đăng nhập
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;