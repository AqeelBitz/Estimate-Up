import React from 'react'
import '../components/fontawesome/FontIndex'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from '../components/Navbar';
// import Router1 from './routes/Router1';
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NoPage from '../pages/Nopage'
import Delphi from '../EstimationMethods/delphi/delphi'
import Cocomo from '../EstimationMethods/Cocomo/Cocomo';
import FunctionF from '../EstimationMethods/Cocomo/FunctionF';
import Sloc from '../EstimationMethods/Cocomo/Sloc';
import CEstimate from '../EstimationMethods/Cocomo/CEstimate';
import Cocomo2 from '../EstimationMethods/cocomo2/Cocomo2';
import Login from '../loginSignUp/Login';
import Signup from '../loginSignUp/Signup';
import MyForm from '../components/MyForm';

const Router1 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Navbar />}>
      <Route exact path="/" element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
        <Route exact index element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="*" element={<NoPage />} />
        <Route exact path="/delphi" element={<Delphi />} />
        <Route exact path="/cocomo" element={<Cocomo />} />
        <Route exact path="/function" element={<FunctionF />} />
        <Route exact path="/sloc" element={<Sloc/>} />
        <Route exact path="/estimate" element={<CEstimate/>} />
        <Route exact path="/cocomo2" element={<Cocomo2/>} />
        <Route exact path="/form" element={<MyForm/>} />
        </Route>

    </Routes>
  </BrowserRouter>
  )
}

export default Router1
