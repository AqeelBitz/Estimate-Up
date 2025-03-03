import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItsWork from '../pages/HowItsWork';
import Terms from '../pages/Terms';
import Cocomo from '../EstimationMethods/Cocomo/Cocomo';
import FunctionF from '../EstimationMethods/Cocomo/FunctionF';
import Sloc from '../EstimationMethods/Cocomo/Sloc';
import CEstimate from '../EstimationMethods/Cocomo/CEstimate';
import Cocomo2 from '../EstimationMethods/cocomo2/Cocomo2';
import Login from '../loginSignUp/Login';
import Signup from '../loginSignUp/Signup';
import MyForm from '../components/MyForm';
import FunctionPoint from '../EstimationMethods/Fp/Fp';
import ThreePoint from '../EstimationMethods/ThreeP/ThreeP';
import Services from '../components/Services';
import Questionnaire from '../EstimationMethods/delphi/components/Questionnaire';
import Delphi from '../EstimationMethods/delphi/components/Delphi';
import Round1 from '../EstimationMethods/delphi/components/Round1';
import Round2 from '../EstimationMethods/delphi/components/Round2';
import Round3 from '../EstimationMethods/delphi/components/Round3';
import InputRound1 from '../EstimationMethods/delphi/components/InputRound1';
import InputRound2 from '../EstimationMethods/delphi/components/InputRound2';
import InputRound3 from '../EstimationMethods/delphi/components/InputRound3';
import Result from '../EstimationMethods/delphi/components/Result';

const Router1 = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    try {
      const response = await fetch('/api/logout', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setIsAuthenticated(false);
        window.alert("Logged out!");
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/sign-up" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/about" element={<About />} />
        <Route path="/howitswork" element={<HowItsWork />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/service" element={<Services />} />
        <Route path="/input_r1" element={<InputRound1 />} />
        <Route path="/input_r2" element={<InputRound2 />} />
        <Route path="/input_r3" element={<InputRound3 />} />

        {isAuthenticated ? (
          <>
            <Route path="/form" element={<MyForm />} />
            <Route path="/fp" element={<FunctionPoint />} />
            <Route path="/tp" element={<ThreePoint />} />
            <Route path="/delphi" element={<Delphi />} />
            <Route path="/round1" element={<Round1 />} />
            <Route path="/round2" element={<Round2 />} />
            <Route path="/round3" element={<Round3 />} />
            <Route path="/ques" element={<Questionnaire />} />
            <Route path="/result" element={<Result />} />
            <Route path="/cocomo" element={<Cocomo />} />
            <Route path="/function" element={<FunctionF />} />
            <Route path="/sloc" element={<Sloc />} />
            <Route path="/estimate" element={<CEstimate />} />
            <Route path="/cocomo2" element={<Cocomo2 />} />
          </>
        ) : (
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        )}
      </Routes>
    </Router>
  );
};

export default Router1;
