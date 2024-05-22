
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import MobileLogin from './Pages/Login/MobileLogin.jsx';
import MobileOTP from './Pages/Login/MobileOTP.jsx';
import EmailLogin from './Pages/Login/EmailLogin.jsx';
import EmailOTP from './Pages/Login/EmailOTP.jsx';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast.jsx';
import Sidebar from './Components/SideBar/SideBar.jsx';
import Register from './Pages/Register/Register.jsx';
import Profile from './Pages/UserProfile/Profile.jsx';
import { AuthProvider } from './AuthContext.js';

ReactDOM.render(<WeatherForecast />, document.getElementById('root'));

function App() {
  return (
    <div className=''>
      
      <BrowserRouter>
        <AuthProvider>
          <Navbar />      
          <Routes>
            <Route path='/' element={<Home/>}/>   
            <Route path='/login' element={<Login/>}/>
            <Route path='/MobileLogin' element={<MobileLogin/>}/>
            <Route path='/MobileOTP' element={<MobileOTP/>}/>                 
            <Route path='/EmailLogin' element={<EmailLogin/>}/>
            <Route path='/EmailOTP' element={<EmailOTP/>}/>         
            <Route path='/Register' element={<Register />}/>   
            <Route path='/Profile' element={<Profile />}/>   
          </Routes>      
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
