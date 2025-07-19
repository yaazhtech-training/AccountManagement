
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import OtpVerification from './components/OtpVerification';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar /> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
