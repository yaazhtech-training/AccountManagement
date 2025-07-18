
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Userupload from './components/Userupload'; 
import Contactus from './components/Contactus';
import LoanSection from './components/LoanSection';
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
      <Route path='/upload' element={<Userupload/>}/>
      <Route path='/loan' element={<LoanSection/>}/>
      <Route path='/contact' element={<Contactus/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
