
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login.jsx';
import MobileLogin from './Pages/MobileLogin.jsx';
import MobileOTP from './Pages/MobileOTP.jsx';
import EmailLogin from './Pages/EmailLogin.jsx';
import EmailOTP from './Pages/EmailOTP.jsx';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast.jsx';
import Register from './Pages/Register/Register.jsx';

ReactDOM.render(<WeatherForecast />, document.getElementById('root'));

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar />
      <WeatherForecast />      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/MobileLogin' element={<MobileLogin/>}/>
        <Route path='/MobileOTP' element={<MobileOTP/>}/>                 
        <Route path='/EmailLogin' element={<EmailLogin/>}/>
        <Route path='/EmailOTP' element={<EmailOTP/>}/>         
        <Route path='/Home' element={<Home/>}/>   
        <Route path='/Register' element={<Register />}/>  
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
